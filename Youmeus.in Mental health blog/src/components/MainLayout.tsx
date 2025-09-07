import { ReactNode } from "react";
import SidebarNav from "./SidebarNav";
import RightSidebar from "./RightSidebar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - 10% */}
        <aside className="lg:col-span-1 xl:col-span-1">
          <SidebarNav />
        </aside>
        
        {/* Main Content - 65% */}
        <main className="lg:col-span-8 xl:col-span-8">
          {children}
        </main>
        
        {/* Right Sidebar - 25% */}
        <aside className="lg:col-span-3 xl:col-span-3">
          <RightSidebar />
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;