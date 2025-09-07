import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getSession = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <section id="home" className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-healing-purple/5 to-healing-blue/5" />
      
      <div className="container relative">
        {/* Date and Time Display */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card rounded-lg px-4 py-2 shadow-sm">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(currentTime)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card rounded-lg px-4 py-2 shadow-sm">
            <Clock className="h-4 w-4" />
            <span>{formatTime(currentTime)}</span>
          </div>
          <div className="text-sm font-medium text-primary bg-primary-soft rounded-lg px-4 py-2">
            {getSession()}
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Stories of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-healing-blue"> Resilience</span>
            <br />
            & Mental Wellness
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover inspiring journeys of individuals who overcame mental health challenges 
            and found their path to success. Share your story, find support, and join a 
            community dedicated to mental wellness.
          </p>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                Creating a world where mental health stories inspire hope, 
                reduce stigma, and empower individuals to seek help and support.
              </p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide a safe platform for sharing mental health journeys, 
                fostering community support, and celebrating the strength in vulnerability.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-healing-blue hover:opacity-90 transition-opacity">
              Read Stories
            </Button>
            <Button variant="outline" size="lg">
              Share Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;