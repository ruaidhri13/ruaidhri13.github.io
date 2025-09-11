import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 px-6 bg-hero-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 text-sm font-medium">
              Available for internships & projects
            </Badge>
            
            <h1 className="font-display font-bold mb-6">
              Hey, I'm <span className="text-primary">Ruaidhri O'Neill</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Computer Science student at Queen's University Belfast, passionate about 
              software development, web applications, and creating solutions that matter. 
              When I'm not coding, you'll find me talking about cars or Formula One.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="text-lg px-8 py-3"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="text-lg px-8 py-3"
              >
                Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for work
              </div>
              <div>Belfast, UK</div>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                <img 
                  src="https://avatars.githubusercontent.com/u/49767184?v=4" 
                  alt="Ruaidhri O'Neill"
                  className="w-72 h-72 rounded-xl object-cover shadow-card"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-card-hover">
                CS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
