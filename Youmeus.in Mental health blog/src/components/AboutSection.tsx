import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Edit3, BookOpen, Award } from "lucide-react";

const AboutSection = () => {
  const team = [
    {
      name: "Dr. Sarah Williams",
      role: "Founder & Author",
      bio: "Licensed therapist with 10+ years experience in mental health advocacy. Passionate about destigmatizing mental health through storytelling.",
      avatar: "👩‍⚕️",
      posts: 45,
      specialties: ["Anxiety", "Depression", "Trauma Recovery"]
    },
    {
      name: "James Mitchell",
      role: "Editor & Content Manager",
      bio: "Mental health advocate and experienced editor. Ensures every story is shared with care, respect, and proper support resources.",
      avatar: "👨‍💼",
      posts: 12,
      specialties: ["Content Strategy", "Community Building", "Editorial Guidelines"]
    },
    {
      name: "Maya Patel",
      role: "Community Coordinator",
      bio: "Survivor turned advocate. Coordinates our support groups and ensures our community remains a safe, welcoming space for all.",
      avatar: "👩‍🎓",
      posts: 23,
      specialties: ["Peer Support", "Community Events", "Crisis Resources"]
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">About You,Me,Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team behind our platform, committed to creating a safe space 
            for mental health stories and community support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <p className="text-primary font-medium">{member.role}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                {/* Stats */}
                <div className="flex justify-around text-center py-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-semibold text-primary">{member.posts}</div>
                    <div className="text-xs text-muted-foreground">Posts</div>
                  </div>
                  <div>
                    <div className="font-semibold text-healing-green">{member.specialties.length}</div>
                    <div className="text-xs text-muted-foreground">Specialties</div>
                  </div>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs bg-primary-soft text-primary px-2 py-1 rounded-md"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => console.log(`View ${member.name}'s posts`)}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  View Posts
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Maintaining strict editorial guidelines for sensitive content</li>
                <li>• Providing crisis resources and professional referrals</li>
                <li>• Ensuring every story includes appropriate trigger warnings</li>
                <li>• Moderating discussions to maintain a supportive environment</li>
                <li>• Regularly reviewing content with mental health professionals</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Edit3 className="h-5 w-5 text-primary" />
                Editorial Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• All submissions reviewed by qualified editors</li>
                <li>• Mental health professionals fact-check medical content</li>
                <li>• Authors can remain anonymous if preferred</li>
                <li>• Support resources added to every published story</li>
                <li>• Regular follow-up with story contributors</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="text-center bg-card rounded-xl p-8 border">
          <h3 className="text-xl font-semibold text-foreground mb-4">Want to Share Your Story?</h3>
          <p className="text-muted-foreground mb-6">
            We're always looking for authentic, inspiring stories that can help others 
            on their mental health journey. Our team will work with you to share your 
            story in a way that feels comfortable and impactful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-primary to-healing-blue">
              <User className="h-4 w-4 mr-2" />
              Submit Your Story
            </Button>
            <Button variant="outline">
              Editorial Guidelines
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;