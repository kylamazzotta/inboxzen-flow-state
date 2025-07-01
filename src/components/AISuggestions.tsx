import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Edit, Sparkles } from "lucide-react";

const suggestions = [
  {
    type: "draft",
    title: "Draft Ready",
    content: "Reply to Sarah Chen: 'Thanks for scheduling the meeting. I'll review the budget beforehand and come prepared with questions.'",
    confidence: "95%"
  },
  {
    type: "label",
    title: "Auto-label suggestion",
    content: "Tag email from GitHub as 'Development Updates'",
    explanation: "Based on sender pattern and content analysis"
  },
  {
    type: "reply",
    title: "Quick replies",
    suggestions: ["Thanks!", "Let's do it", "I'll get back to you", "Sounds good"]
  }
];

export function AISuggestions() {
  return (
    <Card className="shadow-sm border-0 bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-accent" />
          AI Suggestions
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border">
            {suggestion.type === "draft" && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-foreground">{suggestion.title}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {suggestion.confidence} confident
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3 italic">
                  "{suggestion.content}"
                </p>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-accent hover:bg-accent/90">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Accept
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            )}
            
            {suggestion.type === "label" && (
              <div>
                <h4 className="font-medium text-foreground mb-2">{suggestion.title}</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-zen-indigo text-zen-indigo-foreground">Development Updates</Badge>
                  <span className="text-xs text-muted-foreground">{suggestion.explanation}</span>
                </div>
                <Button size="sm" variant="outline" className="mt-2">
                  Apply Label
                </Button>
              </div>
            )}
            
            {suggestion.type === "reply" && (
              <div>
                <h4 className="font-medium text-foreground mb-3">{suggestion.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {suggestion.suggestions?.map((reply, replyIndex) => (
                    <Button 
                      key={replyIndex} 
                      size="sm" 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}