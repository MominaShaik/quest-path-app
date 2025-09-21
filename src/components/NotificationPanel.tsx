import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Bell, ExternalLink, Clock, MapPin, Star } from "lucide-react";

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanel = ({ isOpen, onClose }: NotificationPanelProps) => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Govt Job for Health Assistant",
      message: "AIIMS Delhi is hiring Health Assistants. Apply by Sept 25, 2024.",
      type: "job",
      urgent: true,
      time: "2 hours ago",
      link: "https://aiims.edu/careers",
      location: "New Delhi"
    },
    {
      id: 2,
      title: "Free Google Tech Certification",
      message: "Google Digital Marketing Fundamentals course is now available for free enrollment.",
      type: "certification",
      urgent: false,
      time: "5 hours ago",
      link: "https://skillshop.withgoogle.com",
      provider: "Google"
    },
    {
      id: 3,
      title: "Railways Hiring ITI Electricians",
      message: "Indian Railways is recruiting ITI qualified electricians this week. Don't miss out!",
      type: "job",
      urgent: true,
      time: "1 day ago",
      link: "https://indianrailways.gov.in",
      location: "Various Locations"
    },
    {
      id: 4,
      title: "Microsoft Azure Certification Discount",
      message: "Get 50% off on Microsoft Azure Fundamentals certification until month end.",
      type: "certification",
      urgent: false,
      time: "2 days ago",
      link: "https://learn.microsoft.com",
      provider: "Microsoft"
    },
    {
      id: 5,
      title: "TCS Walk-in Interview",
      message: "TCS is conducting walk-in interviews for software developers in Bangalore.",
      type: "job",
      urgent: true,
      time: "3 days ago",
      link: "https://careers.tcs.com",
      location: "Bangalore"
    }
  ]);

  const dismissNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getNotificationIcon = (type: string) => {
    return type === 'job' ? '💼' : '📚';
  };

  const getTypeColor = (type: string) => {
    return type === 'job' ? 'jobs' : 'education';
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40" 
        onClick={onClose}
      />
      
      {/* Panel */}
      <div className="fixed right-0 top-0 h-full w-96 max-w-[90vw] bg-card border-l border-border z-50 overflow-y-auto slide-in-right">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Notifications</h2>
            {notifications.length > 0 && (
              <Badge variant="secondary" className="text-xs">
                {notifications.length}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Notifications List */}
        <div className="p-4 space-y-4">
          {notifications.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <Bell className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No new notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className="shadow-card hover-lift relative overflow-hidden"
              >
                {notification.urgent && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-destructive"></div>
                )}
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{getNotificationIcon(notification.type)}</span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs text-${getTypeColor(notification.type)}`}
                        >
                          {notification.type === 'job' ? 'Job' : 'Certification'}
                        </Badge>
                        {notification.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            <Star className="h-2 w-2 mr-1" />
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-sm font-medium leading-tight">
                        {notification.title}
                      </CardTitle>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-muted-foreground"
                      onClick={() => dismissNotification(notification.id)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    {notification.message}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {notification.time}
                    </div>
                    {notification.location && (
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {notification.location}
                      </div>
                    )}
                    {notification.provider && (
                      <div className="flex items-center gap-1">
                        <span>by {notification.provider}</span>
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    asChild 
                    size="sm" 
                    className={`w-full bg-${getTypeColor(notification.type)} hover:bg-${getTypeColor(notification.type)}/90`}
                  >
                    <a
                      href={notification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {notification.type === 'job' ? 'Apply Now' : 'Enroll Now'}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="sticky bottom-0 bg-card border-t border-border p-4">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setNotifications([])}
            >
              Clear All Notifications
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationPanel;