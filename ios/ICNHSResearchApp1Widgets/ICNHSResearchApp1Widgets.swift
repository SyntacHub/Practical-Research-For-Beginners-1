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

struct TipsWidgetData {
let quoteDescription: String
let quoteTitle: String
let quoteTitle2:String
  
}

extension TipsWidgetData {
  static let previewData = TipsWidgetData(
    quoteDescription:"To be a productive student researcher you must be dedicated towards your work and hobbies.Struggles are part of our life...",
    quoteTitle:"be a Good Student Researcher",
    quoteTitle2:"NO IMAGE FOUND"
  
    
  )
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let configuration: ConfigurationIntent
}

struct ICNHSResearchApp1WidgetsEntryView : View {
  @Environment(\.widgetFamily)var widgetFamily
  
  var entry: Provider.Entry
  let data: TipsWidgetData

    var body: some View {
      ZStack{
        LinearGradient(
                    gradient: Gradient(stops: [
                .init(color: Color(#colorLiteral(red: 0.2819444537162781, green: 0.9666666388511658, blue: 0.3915000557899475, alpha: 1)), location: 0),
                .init(color: Color(#colorLiteral(red: 0, green: 0.4124999940395355, blue: 0.1650000363588333, alpha: 1)), location: 1),
                .init(color: Color(#colorLiteral(red: 0.04491317272186279, green: 0.8291666507720947, blue: 0.35861465334892273, alpha: 1)), location: 1)]),
                    startPoint: UnitPoint(x: -0.21935484526773896, y: 1.4677419489792682),
                    endPoint: UnitPoint(x: 0.7516129073618478, y: -0.1612903088663047))
        
        HStack {
          VStack(alignment:.leading){
            Text("How to")
              .foregroundColor(.white)
              .font(Font.system(size:24,weight:.bold, design:.default ))

              
              .minimumScaleFactor(0.8)
            Text(data.quoteTitle)
              .font(Font.system(size:22,weight:.bold, design:.default ))
              .foregroundColor(.white)
             
              .opacity(0.5)
          }
          .padding(.all)
          if widgetFamily == .systemMedium,
             let quoteDescription = data.quoteDescription {
            Text(quoteDescription)
              .font(.subheadline)
          }
          
        }
        Spacer(minLength: 0)
        
        
        
      }
      
}

@main
struct ICNHSResearchApp1Widgets: Widget {
    let kind: String = "ICNHSResearchApp1Widgets"

    var body: some WidgetConfiguration {
        IntentConfiguration(kind: kind, intent: ConfigurationIntent.self, provider: Provider()) { entry in
          ICNHSResearchApp1WidgetsEntryView(entry: entry, data: TipsWidgetData.previewData)
        }
        .configurationDisplayName("Research Tips")
        .description("Get the most of Research with helpful hints and hidden tools")
        .supportedFamilies([.systemSmall, .systemMedium])
    }
}


}

