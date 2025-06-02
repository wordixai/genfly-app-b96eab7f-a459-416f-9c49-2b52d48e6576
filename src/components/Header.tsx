import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="u-container-full">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <svg height="22" viewBox="0 0 143 16" fill="none" className="text-foreground">
              <path d="M24.5475 0H19.3384L28.8374 24H34.0465L24.5475 0Z" fill="currentColor"></path>
              <path d="M9.49897 0L0 24H5.31125L7.25395 18.96H17.1914L19.1341 24H24.4454L14.9464 0H9.49897ZM8.97193 14.5029L12.2227 6.06857L15.4735 14.5029H8.97193Z" fill="currentColor"></path>
              <text x="35" y="12" fontSize="10" fill="currentColor" fontFamily="Arial, sans-serif">NTHROPIC</text>
            </svg>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Claude</a>
            <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">API</a>
            <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Solutions</a>
            <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Research</a>
            <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Conversations</a>
            <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">Learn</a>
            <a href="#" className="text-sm font-medium hover:text-primary/80 transition-colors">News</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Try Claude
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block text-sm font-medium hover:text-primary/80 transition-colors">Claude</a>
              <a href="#" className="block text-sm font-medium hover:text-primary/80 transition-colors">API</a>
              <a href="#" className="block text-sm font-medium hover:text-primary/80 transition-colors">Solutions</a>
              <a href="#" className="block text-sm font-medium hover:text-primary/80 transition-colors">Research</a>
              <a href="#" className="block text-sm font-medium hover:text-primary/80 transition-colors">Conversations</a>
              <a href="#" className="block text-sm font-medium hover:text-primary/80 transition-colors">Learn</a>
              <a href="#" className="block text-sm font-medium hover:text-primary/80 transition-colors">News</a>
              <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors mt-4">
                Try Claude
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;