import { useState } from "react";
import { Clock, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const emails = [
  {
    id: 1,
    sender: "Sarah Chen",
    subject: "Q4 Budget Review Meeting",
    preview: "Hi team, I've scheduled our Q4 budget review for next Tuesday...",
    time: "2 min ago",
    urgent: true,
    unread: true
  },
  {
    id: 2,
    sender: "Marketing Team",
    subject: "New Campaign Performance",
    preview: "Great news! Our latest campaign exceeded expectations...",
    time: "15 min ago",
    urgent: false,
    unread: true
  },
  {
    id: 3,
    sender: "GitHub",
    subject: "Weekly activity summary",
    preview: "You had 12 commits this week across 3 repositories...",
    time: "1 hour ago",
    urgent: false,
    unread: false
  }
];

export function InboxOverview() {
  const [sortBy, setSortBy] = useState("time");

  return (
    <Card className="shadow-sm border-0 bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">Inbox Overview</CardTitle>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="time">Time</SelectItem>
              <SelectItem value="sender">Sender</SelectItem>
              <SelectItem value="priority">Priority</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <p className="text-muted-foreground">
          You have <span className="font-medium text-accent">12 new messages</span> — 
          <span className="font-medium text-destructive"> 3 are urgent</span>
        </p>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="urgent">Urgent</TabsTrigger>
            <TabsTrigger value="later">Later</TabsTrigger>
            <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-3">
            {emails.map((email) => (
              <div 
                key={email.id} 
                className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className={`font-medium ${email.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {email.sender}
                      </h4>
                      {email.urgent && (
                        <Badge variant="destructive" className="text-xs px-2 py-0">Urgent</Badge>
                      )}
                      {email.unread && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                    <p className={`font-medium mb-1 ${email.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {email.subject}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {email.preview}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <span className="text-sm text-muted-foreground">{email.time}</span>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Star className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Clock className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}