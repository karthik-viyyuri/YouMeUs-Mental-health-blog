import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, ExternalLink, Bell } from "lucide-react";

const RightSidebar = () => {
  const discussionTopics = [
    { title: "Coping with Anxiety", replies: 24, lastActive: "2 hours ago" },
    { title: "Success After Depression", replies: 18, lastActive: "4 hours ago" },
    { title: "Mindfulness Techniques", replies: 32, lastActive: "1 day ago" },
    { title: "Building Resilience", replies: 15, lastActive: "2 days ago" },
  ];

  return (
    <div className="space-y-6">
      {/* Discussion Forum */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MessageCircle className="h-5 w-5 text-primary" />
            Discussion Forum
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {discussionTopics.map((topic, index) => (
            <div key={index} className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer">
              <h4 className="font-medium text-sm text-foreground mb-1">{topic.title}</h4>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{topic.replies} replies</span>
                <span>{topic.lastActive}</span>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full" size="sm">
            View All Discussions
          </Button>
        </CardContent>
      </Card>

      {/* Community Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Join Our Community</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            Discord Server
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            Support Groups
          </Button>
          <Button variant="outline" className="w-full" size="sm">
            Weekly Sessions
          </Button>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Bell className="h-5 w-5 text-primary" />
            Stay Updated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Get weekly insights and new stories delivered to your inbox.
          </p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button className="w-full" size="sm">
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Community Impact</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Stories Shared</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-healing-green">1,200+</div>
            <div className="text-sm text-muted-foreground">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-healing-blue">95%</div>
            <div className="text-sm text-muted-foreground">Positive Feedback</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RightSidebar;