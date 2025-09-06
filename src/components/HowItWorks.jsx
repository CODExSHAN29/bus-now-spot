import { Smartphone, MapPin, Bell, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Download & Sign Up",
      description: "Create your account as either a passenger or bus driver in seconds.",
      step: "01"
    },
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      title: "Select Your Route",
      description: "Choose your bus route and see all available buses with live locations.",
      step: "02"
    },
    {
      icon: <Bell className="h-12 w-12 text-primary" />,
      title: "Get Notifications",
      description: "Receive smart alerts about arrivals, delays, and route updates.",
      step: "03"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-primary" />,
      title: "Travel Confidently",
      description: "Board your bus on time and track your journey in real-time.",
      step: "04"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple. Follow these four easy steps to transform 
            your bus travel experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative bg-card p-6 rounded-2xl shadow-elegant hover-lift animate-slide-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-glow">
                {step.step}
              </div>
              
              {/* Content */}
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-2xl w-fit">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connection line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;