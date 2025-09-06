import { MapPin, Clock, Bell, Shield, Users, Route } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const passengerFeatures = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Live Bus Tracking",
      description: "See exactly where your bus is on the map with real-time GPS updates every few seconds."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Accurate Arrival Times",
      description: "Get precise ETAs based on current traffic conditions and historical route data."
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Smart Notifications",
      description: "Receive alerts when your bus is approaching, delayed, or route changes occur."
    }
  ];

  const driverFeatures = [
    {
      icon: <Route className="h-8 w-8 text-accent" />,
      title: "Route Management",
      description: "Manage your assigned routes, view stops, and access real-time passenger demand."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Passenger Insights",
      description: "See passenger waiting counts at stops and optimize your schedule accordingly."
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Safety Features",
      description: "Emergency alerts, panic buttons, and direct communication with dispatch center."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're catching the bus or driving it, our platform provides 
            the tools you need for a seamless transportation experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Passenger Features */}
          <div className="space-y-8 animate-slide-up">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2 text-primary">For Passengers</h3>
              <p className="text-muted-foreground">
                Never wait in uncertainty again. Track your bus and plan your journey with confidence.
              </p>
            </div>
            <div className="space-y-6">
              {passengerFeatures.map((feature, index) => (
                <Card key={index} className="hover-lift border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Driver Features */}
          <div className="space-y-8 animate-slide-up delay-200">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-2 text-accent">For Drivers</h3>
              <p className="text-muted-foreground">
                Streamline your operations with professional tools designed for efficiency and safety.
              </p>
            </div>
            <div className="space-y-6">
              {driverFeatures.map((feature, index) => (
                <Card key={index} className="hover-lift border-accent/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;