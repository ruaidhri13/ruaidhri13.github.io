import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Fuel Cost Calculator",
      description: "A comprehensive JavaFX application designed to help users estimate fuel costs for trips. Features a clean GUI with modular MVC architecture, input validation, and real-time calculations.",
      technologies: ["Java", "JavaFX", "MVC Architecture", "GUI Design"],
      features: [
        "Interactive GUI with user-friendly interface",
        "Modular design following MVC principles",
        "Input validation and error handling",
        "Real-time fuel cost calculations"
      ],
      githubUrl: "https://github.com/ruaidhri13",
      type: "Desktop Application",
      status: "Completed"
    },
    {
      id: 2,
      title: "Stasis Protocol",
      description: "An immersive text-based adventure game set in a sci-fi universe. Led the development team, managed GitHub workflow, and implemented core gameplay mechanics using object-oriented principles.",
      technologies: ["Java", "OOP", "Git", "Team Collaboration"],
      features: [
        "Engaging sci-fi storyline and world-building",
        "Complex branching narrative system",
        "Team-based development with Git workflow",
        "Object-oriented game architecture"
      ],
      githubUrl: "https://github.com/ruaidhri13",
      type: "Game Development",
      status: "Completed"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "This responsive portfolio website built with modern web technologies. Showcases my projects, skills, and experience with a clean, professional design focused on user experience.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
      features: [
        "Fully responsive design",
        "Modern UI/UX principles",
        "Performance optimized",
        "Accessible and SEO-friendly"
      ],
      githubUrl: "https://github.com/ruaidhri13",
      type: "Web Development",
      status: "In Progress"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that demonstrate my technical skills, problem-solving 
            abilities, and passion for creating functional software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.type}
                  </Badge>
                  <Badge className={getStatusColor(project.status)} variant="secondary">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1 text-xs">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">🚀</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-1">More Projects Coming</h3>
                  <p className="text-muted-foreground text-sm">
                    Check out my GitHub for additional projects and contributions
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://github.com/ruaidhri13', '_blank')}
                >
                  Visit GitHub
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
