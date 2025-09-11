import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skills = {
    "Programming Languages": [
      { name: "Java", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "HTML/CSS", level: "Advanced" },
      { name: "SQL", level: "Intermediate" },
      { name: "C++", level: "Basic" },
      { name: "Swift", level: "Basic" }
    ],
    "Tools & Technologies": [
      { name: "GitHub", level: "Advanced" },
      { name: "IntelliJ IDEA", level: "Advanced" },
      { name: "VS Code", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "JavaFX", level: "Intermediate" },
      { name: "SwiftUI", level: "Basic" }
    ],
    "Core Areas": [
      { name: "Object-Oriented Programming", level: "Advanced" },
      { name: "Web Development", level: "Intermediate" },
      { name: "Mobile App Development", level: "Basic" },
      { name: "Database Design", level: "Intermediate" },
      { name: "Agile Collaboration", level: "Intermediate" },
      { name: "Version Control", level: "Advanced" }
    ]
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary text-primary-foreground";
      case "Intermediate":
        return "bg-orange-100 text-orange-800";
      case "Basic":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise gained through university 
            coursework, personal projects, and hands-on experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <Badge className={getLevelColor(skill.level)} variant="secondary">
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
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
                  <span className="text-primary font-bold text-lg">📚</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Always Learning</h3>
                  <p className="text-muted-foreground text-sm">
                    Currently exploring React, Node.js, and cloud technologies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
