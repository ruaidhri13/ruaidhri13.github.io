import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Currently pursuing my BSc in Computer Science at Queen's University Belfast, 
            I'm passionate about building software that makes a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Education</h3>
                    <p className="text-muted-foreground mb-3">
                      <strong>Queen's University Belfast</strong><br/>
                      BSc Computer Science (with Professional Experience)<br/>
                      Sept 2024 - Jun 2028
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Algorithms</Badge>
                      <Badge variant="secondary">Data Structures</Badge>
                      <Badge variant="secondary">Software Engineering</Badge>
                      <Badge variant="secondary">Databases</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Current Focus</h3>
                    <p className="text-muted-foreground">
                      I'm actively seeking internship opportunities and working on personal projects 
                      to deepen my understanding of software development. My goal is to contribute 
                      to meaningful projects while continuing to learn and grow as a developer.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">🚗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Interests & Hobbies</h3>
                    <p className="text-muted-foreground mb-3">
                      Beyond coding, I'm passionate about cars and Formula One. I love the 
                      engineering precision and innovation in motorsport, which often inspires 
                      my approach to software development.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Formula One</Badge>
                      <Badge variant="outline">Automotive Tech</Badge>
                      <Badge variant="outline">Football</Badge>
                      <Badge variant="outline">Open Source</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What Drives Me</h3>
                    <p className="text-muted-foreground">
                      I believe in writing clean, efficient code and building applications that 
                      solve real problems. Whether it's a fuel cost calculator or a text-based 
                      adventure game, I approach every project with curiosity and attention to detail.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
