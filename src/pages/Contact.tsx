import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Send,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for reaching out!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Mail className="h-16 w-16 text-accent mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Let's Plan Your Journey
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? Want to customize an itinerary? We're here to help
              turn your travel dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 flex-1">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're dreaming of your first adventure or planning
                  your tenth, our travel specialists are ready to help you craft
                  the perfect journey.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-border/50 flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Visit Us
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The Uphill Diaries
                      <br />
                      The Mall Shimla, Himachal Pradesh 171001
                      <br />
                      India
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Call Us</h3>
                    <a
                      href="tel:+14155551234"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      +91 7876887463
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      Mon-Fri: 9AM - 6PM IST
                    </p>
                  </div>
                </Card>

                <Card className="p-6 border-border/50 flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Email Us
                    </h3>
                    <a
                      href="mailto:sakshi1512002@gmail.com"
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      sakshi1512002@gmail.com
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      We respond within 24 hours
                    </p>
                  </div>
                </Card>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border/50">
                <img
                  src="/placeholder.svg"
                  alt="Map showing our San Francisco office location"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-primary mb-4">
                  Follow Our Adventures
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100064672274731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  {/* <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a> */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="form">
              <Card className="p-8 border-border/50">
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) =>
                        setFormData({ ...formData, subject: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="What can we help with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Enquiry</SelectItem>
                        <SelectItem value="custom">
                          Custom Trip Request
                        </SelectItem>
                        <SelectItem value="group">Group Travel</SelectItem>
                        <SelectItem value="press">Press / Media</SelectItem>
                        <SelectItem value="partnership">
                          Partnership Opportunity
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      placeholder="Tell us about your dream journey..."
                      rows={6}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy and will never share your
                    information.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
