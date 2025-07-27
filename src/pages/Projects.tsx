import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
      {
      title: "e-Estimator – Mechanical & Electrical",
      description:
        "A government project for IGCAR Kalpakkam. Built a web-based estimation and rate analysis system for civil and electrical works using Laravel and PostgreSQL. Features include tender generation, sanction management, and amendment workflows.",
      image: "/assets/e-estimator.png", // Ensure this image exists in your public/assets folder
      technologies: ["HTML", "CSS", "Bootstrap", "Laravel", "PostgreSQL"],
      githubUrl: "", // Keep blank if private
      demoUrl: "",   // Leave blank if no live link
      date: "2025",
      featured: true,
    },
    {
      title: "Schedule of Rates (SOR) – Civil, Electrical & Mechanical",
      description: "A government-based web application developed to manage and determine the rates of civil, electrical, and mechanical works. It calculates item-wise costs based on material, labor, and overhead factors. The system includes rate analysis, item master management, and revision workflows.",
      image: "/assets/sor-system.png", // Replace with actual image path
      technologies: ["Laravel", "PostgreSQL", "PHP", "MySQL", "HTML", "CSS"],
      githubUrl: "", // Leave blank if it's a private/government project
      demoUrl: "",   // Leave blank if not available
      date: "2024",
      featured: true
    },
    {
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, project organization, and team collaboration features. Includes drag-and-drop functionality and deadline tracking.",
      image: "/api/placeholder/400/250",
      technologies: ["Java Spring Boot", "React", "PostgreSQL", "WebSocket"],
      githubUrl: "https://github.com/johndeveloper/task-manager",
      demoUrl: "https://taskmanager-demo.example.com",
      date: "2023",
      featured: true
    },
    {
      title: "Blog Content Management",
      description: "A modern blogging platform with rich text editor, category management, user roles, and SEO optimization. Features include comment system and social media integration.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
      githubUrl: "https://github.com/johndeveloper/blog-cms",
      demoUrl: "https://blog-demo.example.com",
      date: "2023",
      featured: false
    },
    {
      title: "Blog Content Management",
      description: "A modern blogging platform with rich text editor, category management, user roles, and SEO optimization. Features include comment system and social media integration.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis"],
      githubUrl: "https://github.com/johndeveloper/blog-cms",
      demoUrl: "https://blog-demo.example.com",
      date: "2023",
      featured: false
    },
    {
      title: "Restaurant Ordering System",
      description: "A digital menu and ordering system for restaurants with QR code integration, real-time order tracking, and payment processing. Includes admin dashboard for menu management.",
      image: "/api/placeholder/400/250",
      technologies: ["Laravel", "React", "MySQL", "PayPal API"],
      githubUrl: "https://github.com/johndeveloper/restaurant-ordering",
      demoUrl: "https://restaurant-demo.example.com",
      date: "2022",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course creation, student enrollment, progress tracking, and assessment tools. Features video streaming and interactive quizzes.",
      image: "/api/placeholder/400/250",
      technologies: ["Java Spring Boot", "React", "PostgreSQL", "AWS S3"],
      githubUrl: "https://github.com/johndeveloper/lms-platform",
      demoUrl: "https://lms-demo.example.com",
      date: "2022",
      featured: true
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl text-primary-foreground">📱</span>
                      </div>
                      <p className="text-muted-foreground text-sm">Project Screenshot</p>
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Other Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title} 
                className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-lg text-primary-foreground">💻</span>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="flex-1 text-xs">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <Card className="shadow-card bg-gradient-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Technologies Used Across Projects
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {Array.from(new Set(projects.flatMap(p => p.technologies))).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm py-1 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
                Each project represents a unique challenge and learning opportunity, 
                showcasing different aspects of full-stack development and problem-solving skills.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
