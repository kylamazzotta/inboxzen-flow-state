import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail } from "lucide-react";

const meetings = [
  {
    title: "Budget Review Meeting",
    time: "2:00 PM",
    duration: "1 hour",
    attendees: 5
  },
  {
    title: "Product Demo",
    time: "4:30 PM", 
    duration: "30 mins",
    attendees: 12
  }
];

const priorityEmails = [
  {
    sender: "Sarah Chen",
    subject: "Q4 Budget Review",
    deadline: "Before 5PM"
  },
  {
    sender: "Marketing Team", 
    subject: "Campaign Approval",
    deadline: "Today"
  }
];

export function TodaysAgenda() {
  return (
    <Card className="shadow-sm border-0 bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-accent" />
          Today's Agenda
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Upcoming Meetings */}
        <div>
          <h4 className="font-medium mb-3 flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Upcoming Meetings
          </h4>
          <div className="space-y-3">
            {meetings.map((meeting, index) => (
              <div key={index} className="p-3 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start justify-between mb-1">
                  <h5 className="font-medium text-foreground">{meeting.title}</h5>
                  <Badge variant="secondary" className="text-xs">
                    {meeting.attendees} people
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>{meeting.time}</span>
                  <span>•</span>
                  <span>{meeting.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Priority Emails */}
        <div>
          <h4 className="font-medium mb-3 flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            Emails to Reply
          </h4>
          <div className="space-y-3">
            {priorityEmails.map((email, index) => (
              <div key={index} className="p-3 rounded-lg bg-muted/20 border border-border">
                <div className="flex items-start justify-between mb-1">
                  <div className="flex-1 min-w-0">
                    <h5 className="font-medium text-foreground">{email.sender}</h5>
                    <p className="text-sm text-muted-foreground truncate">{email.subject}</p>
                  </div>
                  <Badge variant="outline" className="text-xs whitespace-nowrap">
                    {email.deadline}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full" variant="outline">
          View Full Calendar
        </Button>
      </CardContent>
    </Card>
  );
}