import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MessageCircle, Share2, Calendar, User } from "lucide-react";

const RecentBlogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "From Anxiety to Achievement: My Journey Through College",
      excerpt: "How I learned to manage severe anxiety and graduated with honors. A story of persistence, therapy, and self-discovery.",
      author: "Sarah Chen",
      date: "2024-01-20",
      views: 1240,
      comments: 23,
      shares: 45,
      tags: ["Anxiety", "Education", "Success"],
      category: "Mental Health",
      featured: true
    },
    {
      id: 2,
      title: "Breaking the Silence: Overcoming Depression in the Workplace",
      excerpt: "My experience dealing with depression while building a successful career in tech. How I found support and thrived.",
      author: "Michael Rodriguez",
      date: "2024-01-18",
      views: 980,
      comments: 18,
      shares: 32,
      tags: ["Depression", "Career", "Workplace"],
      category: "Personal Stories"
    },
    {
      id: 3,
      title: "The Power of Community: Finding Strength in Shared Struggles",
      excerpt: "How joining a support group changed my perspective on mental health and helped me build lasting friendships.",
      author: "Emma Thompson",
      date: "2024-01-15",
      views: 756,
      comments: 31,
      shares: 28,
      tags: ["Community", "Support", "Friendship"],
      category: "Community"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Mental Health":
        return "bg-primary text-primary-foreground";
      case "Personal Stories":
        return "bg-healing-green text-white";
      case "Community":
        return "bg-healing-purple text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getTagColor = (tag: string) => {
    const colors = [
      "bg-blue-100 text-blue-800",
      "bg-green-100 text-green-800",
      "bg-purple-100 text-purple-800",
      "bg-orange-100 text-orange-800",
      "bg-pink-100 text-pink-800"
    ];
    return colors[tag.length % colors.length];
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Recent Blog Posts</h2>
        <Button variant="outline" size="sm" onClick={() => window.location.href = '/blog'}>
          View All Posts
        </Button>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="relative hover:shadow-md transition-shadow">
            {post.featured && (
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                  Featured
                </Badge>
              </div>
            )}
            
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <Badge className={getCategoryColor(post.category)} variant="secondary">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mt-2 mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className={getTagColor(tag)}>
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Stats and Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>{post.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="h-4 w-4" />
                    <span>{post.shares}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                  <Button size="sm">
                    Comment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-6">
        <Button variant="outline" className="w-full md:w-auto">
          Load More Stories
        </Button>
      </div>
    </section>
  );
};

export default RecentBlogs;