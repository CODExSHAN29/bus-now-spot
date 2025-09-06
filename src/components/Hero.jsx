import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Users, Smartphone } from "lucide-react";
import { AuthModal } from "./AuthModal.jsx";
import heroImage from "@/assets/hero-bus-app.jpg";

const Hero = () => {
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
      <section className="relative min-h-screen flex items-center justify-center gradient-subtle overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Track Your Bus in{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Real-Time
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Never miss your bus again. Get live location updates, accurate arrival times, 
                  and seamless route planning for passengers and drivers alike.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 animate-slide-up delay-100">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Live Tracking</p>
                    <p className="text-sm text-muted-foreground">Real-time GPS</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 animate-slide-up delay-200">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Accurate ETAs</p>
                    <p className="text-sm text-muted-foreground">Smart predictions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 animate-slide-up delay-300">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Dual Access</p>
                    <p className="text-sm text-muted-foreground">Passengers & drivers</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 animate-slide-up delay-500">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Smartphone className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Mobile First</p>
                    <p className="text-sm text-muted-foreground">Always available</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-600">
                <Button 
                  onClick={() => openAuthModal('passenger')}
                  className="btn-hero text-lg px-8 py-6 h-auto"
                >
                  Start as Passenger
                </Button>
                <Button 
                  onClick={() => openAuthModal('driver')}
                  variant="outline"
                  className="btn-outline-hero text-lg px-8 py-6 h-auto"
                >
                  Join as Driver
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground animate-slide-up delay-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Real-time updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Secure platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Free to use</span>
                </div>
              </div>
            </div>

            {/* Right column - App preview */}
            <div className="relative animate-scale-in delay-300">
              <div className="relative z-10 hover-lift">
                <img
                  src={heroImage}
                  alt="Bus tracking app interface"
                  className="w-full max-w-lg mx-auto rounded-2xl shadow-elegant"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-glow animate-bounce">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-full shadow-glow animate-bounce delay-500">
                <Clock className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuthModal 
        isOpen={authModal.open}
        onClose={closeAuthModal}
        userType={authModal.type}
      />
    </>
  );
};

export default Hero;