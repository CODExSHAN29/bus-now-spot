import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { AuthModal } from "./AuthModal.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModal, setAuthModal] = useState({ 
    open: false, 
    type: null 
  });

  const openAuthModal = (type) => {
    setAuthModal({ open: true, type });
  };

  const closeAuthModal = () => {
    setAuthModal({ open: false, type: null });
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                BusTracker
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
                Features
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
                How it Works
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                Contact
              </a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => openAuthModal('passenger')}
                className="btn-outline-hero"
              >
                I'm a Passenger
              </Button>
              <Button 
                onClick={() => openAuthModal('driver')}
                className="btn-hero"
              >
                I'm a Driver
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-slide-up">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Features
                </a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
                  How it Works
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button 
                    variant="outline" 
                    onClick={() => openAuthModal('passenger')}
                    className="btn-outline-hero w-full"
                  >
                    I'm a Passenger
                  </Button>
                  <Button 
                    onClick={() => openAuthModal('driver')}
                    className="btn-hero w-full"
                  >
                    I'm a Driver
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <AuthModal 
        isOpen={authModal.open}
        onClose={closeAuthModal}
        userType={authModal.type}
      />
    </>
  );
};

export default Header;