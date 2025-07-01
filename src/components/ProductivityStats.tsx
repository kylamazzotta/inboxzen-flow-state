import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Mail, TrendingUp, Target } from "lucide-react";

const stats = [
  {
    label: "Time saved this week",
    value: "4.3 hours",
    icon: Clock,
    color: "text-accent"
  },
  {
    label: "Emails replied with AI",
    value: "28",
    icon: Mail,
    color: "text-primary"
  },
  {
    label: "Focus Mode sessions",
    value: "6",
    icon: Target,
    color: "text-zen-indigo"
  }
];

export function ProductivityStats() {
  return (
    <Card className="shadow-sm border-0 bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-accent" />
          Productivity
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className={`p-2 rounded-lg bg-muted/30 ${stat.color}`}>
              <stat.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            </div>
          </div>
        ))}
        
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Inbox Zero Progress</span>
            <span className="text-sm text-muted-foreground">73%</span>
          </div>
          <Progress value={73} className="h-2 mb-3" />
          <p className="text-xs text-muted-foreground">
            12 emails remaining to achieve Inbox Zero
          </p>
        </div>
        
        <Button className="w-full" variant="outline">
          View Weekly Report
        </Button>
      </CardContent>
    </Card>
  );
}