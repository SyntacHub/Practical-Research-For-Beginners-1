//
//  ICNHSResearchApp1Widgets.swift
//  ICNHSResearchApp1Widgets
//
//  Created by Tristan Listanco on 1/11/22.
//

import WidgetKit
import SwiftUI
import Intents

struct Provider: IntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), configuration: ConfigurationIntent())
    }

    func getSnapshot(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (SimpleEntry) -> ()) {
        let entry = SimpleEntry(date: Date(), configuration: configuration)
        completion(entry)
    }

    func getTimeline(for configuration: ConfigurationIntent, in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        var entries: [SimpleEntry] = []

        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
            let entry = SimpleEntry(date: entryDate, configuration: configuration)
            entries.append(entry)
        }

        let timeline = Timeline(entries: entries, policy: .atEnd)
        completion(timeline)
    }
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let configuration: ConfigurationIntent
}

struct ICNHSResearchApp1WidgetsEntryView : View {
  
    var entry: Provider.Entry

    var body: some View {
      
        Text("Practical Research For Beginners")
        Text("Widgetkit Test on iOS 15")
        .background(Color.green)
    }
}

@main
struct ICNHSResearchApp1Widgets: Widget {
    let kind: String = "ICNHSResearchApp1Widgets"

    var body: some WidgetConfiguration {
        IntentConfiguration(kind: kind, intent: ConfigurationIntent.self, provider: Provider()) { entry in
            ICNHSResearchApp1WidgetsEntryView(entry: entry)
        }
        .configurationDisplayName("Continue Reading")
        .description("Pick-up from where you left off in lessons and tutroials.")
    }
}

struct ICNHSResearchApp1Widgets_Previews: PreviewProvider {
    static var previews: some View {
        ICNHSResearchApp1WidgetsEntryView(entry: SimpleEntry(date: Date(), configuration: ConfigurationIntent()))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
