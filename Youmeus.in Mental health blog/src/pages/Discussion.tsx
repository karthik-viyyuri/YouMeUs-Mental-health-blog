import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Clock, Pin, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBox from "@/components/ChatBox";
import { supabase } from "@/integrations/supabase/client";

const Discussion = () => {
  const [discussionRooms, setDiscussionRooms] = useState<any[]>([]);
  const [expandedRooms, setExpandedRooms] = useState<string[]>([]);

  useEffect(() => {
    fetchDiscussionRooms();
  }, []);

  const fetchDiscussionRooms = async () => {
    try {
      const { data, error } = await supabase
        .from('discussion_rooms')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setDiscussionRooms(data || []);
    } catch (error) {
      console.error('Error fetching discussion rooms:', error);
    }
  };

  const toggleRoom = (roomId: string) => {
    setExpandedRooms(prev => 
      prev.includes(roomId) 
        ? prev.filter(id => id !== roomId)
        : [...prev, roomId]
    );
  };

  const featuredTopics = [
    {
      id: 1,
      title: "Weekly Check-in: How are you doing this week?",
      author: "ModeratorSarah",
      replies: 45,
      views: 234,
      lastReply: "12 minutes ago",
      isPinned: true,
      category: "Mental Health Support"
    },
    {
      id: 2,
      title: "Success Stories: Small wins that made a big difference",
      author: "CommunityHelper",
      replies: 28,
      views: 156,
      lastReply: "1 hour ago",
      isPinned: true,
      category: "Personal Growth"
    },
    {
      id: 3,
      title: "Managing anxiety during job interviews - tips that worked for me",
      author: "JobSeeker23",
      replies: 17,
      views: 89,
      lastReply: "2 hours ago",
      isPinned: false,
      category: "Career & Education"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Community Discussion Forums</h1>
          <p className="text-muted-foreground">Connect with others, share experiences, and find support in our community forums</p>
        </div>

        {/* Featured Topics */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Featured Discussions
          </h2>
          <div className="space-y-3">
            {featuredTopics.map((topic) => (
              <Card key={topic.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {topic.isPinned && (
                          <Pin className="h-4 w-4 text-primary" />
                        )}
                        <Badge variant="outline" className="text-xs">
                          {topic.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer mb-1">
                        {topic.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>by {topic.author}</span>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>{topic.replies} replies</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{topic.views} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>Last reply {topic.lastReply}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.location.href = `/chat?topic=${encodeURIComponent(topic.category)}`}
                    >
                      Join Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Chat Rooms */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            Live Discussion Rooms
          </h2>
          <div className="space-y-4">
            {discussionRooms.map((room) => (
              <ChatBox
                key={room.id}
                roomId={room.id}
                roomName={room.name}
                isExpanded={expandedRooms.includes(room.id)}
                onToggle={() => toggleRoom(room.id)}
              />
            ))}
          </div>
        </div>

        {/* Create New Topic Button */}
        <div className="mt-8 text-center">
          <Button size="lg" className="px-8">
            Start New Discussion
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Discussion;