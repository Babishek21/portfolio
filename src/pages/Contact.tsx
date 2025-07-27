import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission (in a real Laravel app, this would be sent to your backend)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "babishek21@gmail.com",
      href: "mailto:babishek21@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 91505 35220",
      href: "tel:+919150535220"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kanyakumari, Tamil Nadu",
      href: null
    }
  ];

  const socialLinks = [
   {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Babishek-Git"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/babishek-j-540665283",
    color: "hover:text-blue-600"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:babishek21@gmail.com",
  }
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up">
            Open to freelance and full-time roles — let’s work together to build something impactful.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-scale-in">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 focus:shadow-card"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-200 focus:shadow-card"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project and how I can help you..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="resize-none transition-all duration-200 focus:shadow-card"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-glow transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={info.title} className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{info.title}</h3>
                            {info.href ? (
                              <a 
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="lg"
                      asChild
                      className="flex-1 hover:shadow-card transition-all duration-300"
                    >
                      <a 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`${social.color} transition-colors`}
                      >
                        <IconComponent className="h-5 w-5 mr-2" />
                        {social.name}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Current Availability
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-700">Available for new projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Actively seeking freelance or full-time roles as a Laravel, Java, or React developer.
                  Feel free to reach out to discuss your project or opportunity.
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  What to Expect
                </h3>
               <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Response within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Free intro call available
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Clear timeline and proposal
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Communication via email, call, or WhatsApp
                </li>
              </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;