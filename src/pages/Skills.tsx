import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Core PHP", level: 90, description: "Strong foundation in PHP fundamentals and OOP" },
        { name: "Laravel", level: 85, description: "Experienced in building robust web applications" },
        { name: "Java Spring Boot", level: 75, description: "Proficient in enterprise Java development" },
      ]
    },
    {
      title: "Frontend Development", 
      skills: [
        { name: "React (Vite)", level: 80, description: "Building modern, interactive user interfaces" },
        { name: "Tailwind CSS", level: 85, description: "Creating responsive and beautiful designs" },
        { name: "JavaScript/TypeScript", level: 82, description: "Modern JavaScript and type-safe development" },
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", level: 88, description: "Version control and collaborative development" },
        { name: "MySQL/PostgreSQL", level: 80, description: "Database design and optimization" },
        { name: "Docker", level: 70, description: "Containerization and deployment" },
      ]
    }
  ];

  const technologies = [
    { name: "PHP", icon: "🐘", color: "bg-blue-100 text-blue-800" },
    { name: "Laravel", icon: "🏗️", color: "bg-red-100 text-red-800" },
    { name: "React", icon: "⚛️", color: "bg-cyan-100 text-cyan-800" },
    { name: "Vite", icon: "⚡", color: "bg-yellow-100 text-yellow-800" },
    { name: "Tailwind", icon: "🎨", color: "bg-teal-100 text-teal-800" },
    { name: "Spring Boot", icon: "🍃", color: "bg-green-100 text-green-800" },
    { name: "MySQL", icon: "🗄️", color: "bg-orange-100 text-orange-800" },
    { name: "Git", icon: "📁", color: "bg-gray-100 text-gray-800" },
    { name: "Docker", icon: "🐳", color: "bg-blue-100 text-blue-800" },
    { name: "REST API", icon: "🔌", color: "bg-purple-100 text-purple-800" },
    { name: "JavaScript", icon: "📄", color: "bg-yellow-100 text-yellow-800" },
    { name: "TypeScript", icon: "📘", color: "bg-blue-100 text-blue-800" },
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Skills & Technologies
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-scale-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                {category.title}
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold text-foreground">{skill.name}</h3>
                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                      </div>
                      
                      <Progress value={skill.level} className="mb-3" />
                      
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Technology Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <Card 
                key={tech.name} 
                className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <h3 className="font-medium text-sm text-foreground">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Highlights */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Experience Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Full-Stack Projects</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Built complete web applications from backend APIs to responsive frontends, 
                  handling everything from database design to user interface implementation.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    RESTful API development with Laravel
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    React component architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Database optimization and modeling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Performance Optimization</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Specialized in optimizing application performance, from database queries 
                  to frontend rendering, achieving significant improvements in load times.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Query optimization and caching
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Code splitting and lazy loading
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Performance monitoring and analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Team Collaboration</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Experienced in working with cross-functional teams, conducting code reviews, 
                  and mentoring junior developers in best practices.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Agile development methodologies
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Code review and mentoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Technical documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Modern Development</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Proficient in modern development practices including containerization, 
                  CI/CD pipelines, and cloud deployment strategies.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Docker containerization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Version control with Git
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Cloud platforms and deployment
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

export default Skills;