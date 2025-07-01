import { useState } from "react";
import { 
  Inbox, 
  Settings, 
  Bell, 
  Calendar, 
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  { icon: Inbox, label: "Inbox", active: true, count: 12 },
  { icon: Mail, label: "Drafts", count: 3 },
  { icon: Bell, label: "AI Suggestions", count: 5 },
  { icon: TrendingUp, label: "Summarized Threads" },
  { icon: Calendar, label: "Productivity" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div className={cn(
      "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border transition-all duration-300 z-40",
      isOpen ? "w-64" : "w-16"
    )}>
      {/* Toggle Button */}
      <div className="p-4 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="w-full justify-center hover:bg-primary/10"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-2">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={cn(
              "w-full justify-start mb-1 h-11 transition-all duration-200",
              !isOpen && "px-2 justify-center",
              item.active && "bg-primary text-primary-foreground shadow-sm",
              !item.active && "hover:bg-primary/10 text-foreground"
            )}
          >
            <item.icon className={cn("h-5 w-5", isOpen && "mr-3")} />
            {isOpen && (
              <div className="flex items-center justify-between w-full">
                <span className="font-medium">{item.label}</span>
                {item.count && (
                  <span className={cn(
                    "text-xs px-2 py-1 rounded-full",
                    item.active 
                      ? "bg-primary-foreground/20 text-primary-foreground" 
                      : "bg-accent text-accent-foreground"
                  )}>
                    {item.count}
                  </span>
                )}
              </div>
            )}
          </Button>
        ))}
      </nav>
    </div>
  );
}