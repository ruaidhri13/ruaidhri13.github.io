import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Software Engineering Work Experience",
      company: "FD Technologies",
      location: "Newry",
      period: "Oct 2023",
      type: "Work Experience",
      description: "Gained exposure to enterprise-level software development across multiple domains including mobile applications, backend systems, and database management.",
      highlights: [
        "Observed enterprise development practices",
        "Learned about mobile app development lifecycle",
        "Understood backend system architecture",
        "Explored database design and management"
      ],
      skills: ["Enterprise Software", "Mobile Development", "Backend Systems", "Databases"]
    },
    {
      id: 2,
      role: "Software Engineering Work Experience", 
      company: "Slice",
      location: "Belfast",
      period: "Nov 2021",
      type: "Work Experience",
      description: "Shadowed software engineers across iOS, Android, and backend development teams. Completed Stanford CS193p iOS course and SwiftUI tutorials to deepen understanding.",
      highlights: [
        "Shadowed engineers in iOS development",
        "Observed Android development processes",
        "Learned about backend development practices",
        "Completed Stanford CS193p iOS course",
        "Completed SwiftUI tutorials"
      ],
      skills: ["iOS Development", "Android Development", "SwiftUI", "Backend Development"]
    },
    {
      id: 3,
      role: "Sales Assistant",
      company: "JD Sports", 
      location: "Belfast",
      period: "Jul 2022 - Present",
      type: "Part-time Employment",
      description: "Developed strong interpersonal and teamwork skills in a fast-paced retail environment while balancing university studies.",
      highlights: [
        "Built resilience and adaptability",
        "Developed teamwork and communication skills",
        "Managed time effectively between work and studies",
        "Provided excellent customer service"
      ],
      skills: ["Communication", "Teamwork", "Time Management", "Customer Service"]
    },
    {
      id: 4,
      role: "Volunteer Mentor",
      company: "CoderDojo",
      location: "Belfast",
      period: "Mar 2024 - Present", 
      type: "Volunteer Work",
      description: "Mentor young learners in programming fundamentals, helping to inspire the next generation of developers while improving my own communication and teaching skills.",
      highlights: [
        "Taught programming concepts to young learners",
        "Improved communication and teaching skills",
        "Contributed to community tech education",
        "Developed patience and mentoring abilities"
      ],
      skills: ["Teaching", "Mentoring", "Programming", "Communication"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Work Experience":
        return "bg-primary/10 text-primary";
      case "Part-time Employment":
        return "bg-blue-100 text-blue-800";
      case "Volunteer Work":
        return "bg-green-100 text-green-800";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 px-6 bg-section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey combining software engineering exposure, 
            work experience, and community involvement.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-semibold mb-2">{exp.role}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <Badge className={getTypeColor(exp.type)} variant="secondary">
                      {exp.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-3 text-sm">Key Highlights:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    {exp.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-1 text-xs">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2 text-sm">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
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
                  <span className="text-primary font-bold text-lg">🎯</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-1">Seeking New Opportunities</h3>
                  <p className="text-muted-foreground text-sm">
                    Open to internships and entry-level software engineering roles
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

export default Experience;
