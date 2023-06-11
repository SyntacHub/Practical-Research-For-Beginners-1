//
//  ICNHSResearchGrade7_WidgetsLiveActivity.swift
//  ICNHSResearchGrade7-Widgets
//
//  Created by Tristan Listanco on 6/10/23.
//

import ActivityKit
import WidgetKit
import SwiftUI

struct ICNHSResearchGrade7_WidgetsAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        // Dynamic stateful properties about your activity go here!
        var emoji: String
    }

    // Fixed non-changing properties about your activity go here!
    var name: String
}

struct ICNHSResearchGrade7_WidgetsLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: ICNHSResearchGrade7_WidgetsAttributes.self) { context in
            // Lock screen/banner UI goes here
            VStack {
                Text("Hello \(context.state.emoji)")
            }
            .activityBackgroundTint(Color.cyan)
            .activitySystemActionForegroundColor(Color.black)

        } dynamicIsland: { context in
            DynamicIsland {
                // Expanded UI goes here.  Compose the expanded UI through
                // various regions, like leading/trailing/center/bottom
                DynamicIslandExpandedRegion(.leading) {
                    Text("Leading")
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text("Trailing")
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("Bottom \(context.state.emoji)")
                    // more content
                }
            } compactLeading: {
                Text("L")
            } compactTrailing: {
                Text("T \(context.state.emoji)")
            } minimal: {
                Text(context.state.emoji)
            }
            .widgetURL(URL(string: "http://www.apple.com"))
            .keylineTint(Color.red)
        }
    }
}

extension ICNHSResearchGrade7_WidgetsAttributes {
    fileprivate static var preview: ICNHSResearchGrade7_WidgetsAttributes {
        ICNHSResearchGrade7_WidgetsAttributes(name: "World")
    }
}

extension ICNHSResearchGrade7_WidgetsAttributes.ContentState {
    fileprivate static var smiley: ICNHSResearchGrade7_WidgetsAttributes.ContentState {
        ICNHSResearchGrade7_WidgetsAttributes.ContentState(emoji: "😀")
     }
     
     fileprivate static var starEyes: ICNHSResearchGrade7_WidgetsAttributes.ContentState {
         ICNHSResearchGrade7_WidgetsAttributes.ContentState(emoji: "🤩")
     }
}

#Preview("Notification", as: .content, using: ICNHSResearchGrade7_WidgetsAttributes.preview) {
   ICNHSResearchGrade7_WidgetsLiveActivity()
} contentStates: {
    ICNHSResearchGrade7_WidgetsAttributes.ContentState.smiley
    ICNHSResearchGrade7_WidgetsAttributes.ContentState.starEyes
}
