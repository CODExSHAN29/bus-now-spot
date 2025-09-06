import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Mail, Facebook, Chrome, User, Bus } from "lucide-react";

// Props: { isOpen, onClose, userType }

export const AuthModal = ({ isOpen, onClose, userType }) => {
  const [authTab, setAuthTab] = useState("login");

  const handleSocialAuth = (provider) => {
    console.log(`${provider} authentication for ${userType}`);
    // This would integrate with actual auth providers
  };

  const handleEmailAuth = (e) => {
    e.preventDefault();
    console.log(`Email authentication for ${userType}`);
    // This would handle actual authentication
  };

  if (!userType) return null;

  const isDriver = userType === 'driver';
  const icon = isDriver ? <Bus className="h-6 w-6" /> : <User className="h-6 w-6" />;
  const title = isDriver ? "Bus Driver Portal" : "Passenger Portal";
  const description = isDriver 
    ? "Access your driver dashboard to manage routes and update real-time locations" 
    : "Track buses in real-time and plan your journey efficiently";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[440px] animate-scale-in">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className={`p-3 rounded-full ${isDriver ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'}`}>
              {icon}
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={authTab} onValueChange={setAuthTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-12 hover-lift"
                onClick={() => handleSocialAuth('google')}
              >
                <Chrome className="h-5 w-5 text-red-500" />
                Continue with Google
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-12 hover-lift"
                onClick={() => handleSocialAuth('facebook')}
              >
                <Facebook className="h-5 w-5 text-blue-600" />
                Continue with Facebook
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-12"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 btn-hero">
                <Mail className="h-4 w-4 mr-2" />
                Sign In with Email
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 mt-6">
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-12 hover-lift"
                onClick={() => handleSocialAuth('google')}
              >
                <Chrome className="h-5 w-5 text-red-500" />
                Sign up with Google
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-12 hover-lift"
                onClick={() => handleSocialAuth('facebook')}
              >
                <Facebook className="h-5 w-5 text-blue-600" />
                Sign up with Facebook
              </Button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <form onSubmit={handleEmailAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  className="h-12"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 btn-hero">
                <Mail className="h-4 w-4 mr-2" />
                Create Account
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};