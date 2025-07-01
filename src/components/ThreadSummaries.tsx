import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, Copy, RefreshCw, Sparkles } from "lucide-react";

const summaries = [
  {
    id: 1,
    thread: "Budget Discussion with Finance Team",
    participants: "5 people",
    summary: "Team discussed Q4 budget allocation. Marketing needs 15% increase for new campaigns. IT department requesting server upgrades. Final decision pending CEO approval.",
    messagesCount: 12,
    timespan: "Last 3 days",
    expanded: false
  },
  {
    id: 2,
    thread: "Product Launch Planning",
    participants: "8 people",
    summary: "Launch date confirmed for December 15th. Design team finalized mockups. Marketing preparing announcement materials. QA team identified minor bugs to fix.",
    messagesCount: 24,
    timespan: "Last week",
    expanded: false
  }
];

export function ThreadSummaries() {
  const [summariesState, setSummariesState] = useState(summaries);

  const toggleExpanded = (id: number) => {
    setSummariesState(prev => 
      prev.map(summary => 
        summary.id === id 
          ? { ...summary, expanded: !summary.expanded }
          : summary
      )
    );
  };

  return (
    <Card className="shadow-sm border-0 bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-accent" />
          Thread Summaries
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {summariesState.map((summary) => (
          <div key={summary.id} className="border border-border rounded-lg overflow-hidden">
            <div 
              className="p-4 bg-muted/20 cursor-pointer hover:bg-muted/40 transition-colors"
              onClick={() => toggleExpanded(summary.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-foreground">{summary.thread}</h4>
                    <Badge variant="secondary" className="text-xs">
                      Summarized by InboxZen AI
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{summary.participants}</span>
                    <span>•</span>
                    <span>{summary.messagesCount} messages</span>
                    <span>•</span>
                    <span>{summary.timespan}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  {summary.expanded ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            
            {summary.expanded && (
              <div className="p-4 bg-card border-t border-border">
                <div className="mb-4">
                  <h5 className="font-medium mb-2">Summary</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {summary.summary}
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <RefreshCw className="h-4 w-4 mr-1" />
                    Re-summarize
                  </Button>
                  <Button size="sm" variant="outline">
                    <Copy className="h-4 w-4 mr-1" />
                    Copy TL;DR
                  </Button>
                  <Button size="sm" variant="ghost" className="text-primary">
                    View Original Thread
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}