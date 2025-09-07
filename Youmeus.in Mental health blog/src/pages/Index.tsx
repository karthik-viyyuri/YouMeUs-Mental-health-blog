import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MainLayout from "@/components/MainLayout";
import RecentBlogs from "@/components/RecentBlogs";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MainLayout>
        <RecentBlogs />
      </MainLayout>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
