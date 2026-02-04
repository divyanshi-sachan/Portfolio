import { BlogHeaderFeaturedPost01 } from "../components/ui/blog-header-featured-post-01";
import ScrollProgress from "../components/ScrollProgress";
import Contact from "../sections/Contact";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-[#cfcfd0] dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300">
      <ScrollProgress />
      
      {/* Header - Same as portfolio */}
      <header className="absolute top-0 left-0 right-0 z-30 flex justify-between items-center px-10 py-8">
        <div className="text-black dark:text-white text-sm font-medium">© Code by Divyanshi</div>
        <nav className="flex gap-8 items-center">
          <a href="/#projects" className="text-black dark:text-white text-sm font-medium hover:opacity-80 transition-all duration-300 hover:scale-105 relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/#about" className="text-black dark:text-white text-sm font-medium hover:opacity-80 transition-all duration-300 hover:scale-105 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
          </a>
          <a href="/#contact" className="text-black dark:text-white text-sm font-medium hover:opacity-80 transition-all duration-300 hover:scale-105 relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
          </a>
          <Link to="/case-studies" className="text-black dark:text-white text-sm font-medium hover:opacity-80 transition-all duration-300 hover:scale-105 relative group">
            Case Studies
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300" />
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      {/* Back Icon Only */}
      <div className="pt-24 px-10">
        <Link
          to="/"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white transition-all duration-300 group"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Blog Header with Featured Post */}
      <BlogHeaderFeaturedPost01 />
      <Contact />
    </div>
  );
};

export default BlogsPage;

