//
//  ICNHSResearchGrade7_Wigets.swift
//  ICNHSResearchGrade7_Wigets
//
//  Created by Tristan Listanco on 1/16/22.
//

import WidgetKit
import SwiftUI
import Intents

struct Provider: TimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
      SimpleEntry(date: Date(), data: TipsWidgetData.previewData)
    }

    func getSnapshot(in context: Context, completion: @escaping (SimpleEntry) -> ()) {
      let entry = SimpleEntry(date: Date(), data: TipsWidgetData.previewData)
        completion(entry)
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<Entry>) -> ()) {
        var entries: [SimpleEntry] = []

        // Generate a timeline consisting of five entries an hour apart, starting from the current date.
        let currentDate = Date()
        for hourOffset in 0 ..< 5 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: hourOffset, to: currentDate)!
          let entry = SimpleEntry(date: entryDate, data: TipsWidgetData.previewData)
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
    quoteDescription:"Start with the most difficult tasks instead of putting them off until the end of the day. For example, start with your most complicated experiment, or work on writing a grant application that you're finding challenging",
    quoteTitle:"be a Good Student Researcher",
    quoteTitle2:"NO IMAGE FOUND"
  
    
  )
}

struct SimpleEntry: TimelineEntry {
    let date: Date
    let data: TipsWidgetData
}

struct ICNHSResearchGrade7_WigetsEntryView : View {
  @Environment(\.widgetFamily)var widgetFamily
    var entry: Provider.Entry

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
                 Text("import Intents")
                   .font(Font.system(size:20,weight:.bold, design:.default ))
                   .foregroundColor(.white)
                  
                   .opacity(0.5)
               }
               .padding(.all)

               
               
             }
             Spacer(minLength: 0)
             
             
             
           }
    }
}

@main
struct ICNHSResearchGrade7_Wigets: Widget {
    let kind: String = "ICNHSResearchGrade7_Wigets"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: Provider()) { entry in
            ICNHSResearchGrade7_WigetsEntryView(entry: entry)
        }
        .configurationDisplayName("My Widget")
        .description("This is an example widget.")
    }
}

struct ICNHSResearchGrade7_Wigets_Previews: PreviewProvider {
    static var previews: some View {
      ICNHSResearchGrade7_WigetsEntryView(entry: SimpleEntry(date: Date(), data: TipsWidgetData.previewData))
            .previewContext(WidgetPreviewContext(family: .systemSmall))
    }
}
