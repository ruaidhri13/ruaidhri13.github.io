import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: "📧",
      label: "Email",
      value: "ruaidhri2006@gmail.com",
      action: () => window.open("mailto:ruaidhri2006@gmail.com", "_blank"),
      description: "Best way to reach me for opportunities or collaborations"
    },
    {
      icon: "📞",
      label: "Phone",
      value: "07421050050",
      action: () => window.open("tel:07421050050", "_blank"),
      description: "Available for calls Monday - Friday, 9am - 6pm"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "ruaidhrioneill",
      action: () => window.open("https://www.linkedin.com/in/ruaidhrioneill", "_blank"),
      description: "Connect with me for professional networking"
    },
    {
      icon: "🔗",
      label: "GitHub",
      value: "ruaidhri13",
      action: () => window.open("https://github.com/ruaidhri13", "_blank"),
      description: "Explore my code and contribute to projects"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, or just having 
            a chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method) => (
            <Card 
              key={method.label} 
              className="shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              onClick={method.action}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-2">{method.icon}</div>
                <CardTitle className="text-lg font-semibold">{method.label}</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="font-medium mb-2 text-primary">{method.value}</p>
                <p className="text-sm text-muted-foreground leading-tight">
                  {method.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold mb-2">Ready to Work Together?</CardTitle>
              <p className="text-muted-foreground">
                I'm actively seeking internship opportunities and interesting projects. 
                Whether you have a role in mind or just want to discuss technology, I'd love to hear from you!
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => window.open("mailto:ruaidhri2006@gmail.com", "_blank")}
                  className="text-lg px-8 py-3"
                >
                  Send me an Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open("https://www.linkedin.com/in/ruaidhrioneill", "_blank")}
                  className="text-lg px-8 py-3"
                >
                  Connect on LinkedIn
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Location:</strong><br/>
                    Belfast, Northern Ireland
                  </div>
                  <div>
                    <strong className="text-foreground">Availability:</strong><br/>
                    Open for internships & projects
                  </div>
                  <div>
                    <strong className="text-foreground">Response Time:</strong><br/>
                    Usually within 24 hours
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
