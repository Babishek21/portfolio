import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Building } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground animate-slide-up">
            Dedicated full-stack developer committed to building impactful, user-centric web applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="animate-scale-in">
            <div className="aspect-square rounded-2xl bg-gradient-card border border-border shadow-elegant overflow-hidden">
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">BJ</span>
                  </div>
                  <p className="text-muted-foreground">Professional Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground">
               Hi, I'm Babishek J
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Laravel developer with over a year of experience building efficient, scalable web applications. My journey began with a passion for understanding how digital systems work, and has grown into a professional pursuit of delivering high-quality software solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in back-end development using Laravel and PostgreSQL, with strong front-end experience in React, Tailwind CSS, and jQuery. I'm committed to clean code, agile collaboration, and continuous learning.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Outside of coding, I enjoy exploring new tools and frameworks, contributing to open-source projects, and staying active in the tech community.
            </p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Professional Experience
          </h2>

          <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Laravel Developer
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Building className="h-4 w-4" />
                    <a href="http://lashron.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Lashron Technology
                    </a>
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                     <span>May 2023 – Present</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    On-site (Chennai Office)
                  </div>
                  
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">
                  Key Responsibilities & Achievements:
                </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        Developed and maintained backend modules for IGCAR Kalpakam’s estimate and billing packages using Laravel and PostgreSQL, streamlining data management and project workflows.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        Designed responsive front-end interfaces using HTML, CSS, and Bootstrap to ensure accessibility across devices and browsers.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        Collaborated with engineering and documentation teams to build cost estimation and rate analysis tools for electrical, mechanical, and civil engineering modules.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        Improved system performance by optimizing database queries and implementing clean, maintainable code practices.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        Contributed to project documentation and provided support in QA testing, helping to ensure smooth deployment and ongoing usability.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>
                        Visited the IGCAR Kalpakkam client site regularly to diagnose and resolve critical system issues, working directly with end users to ensure optimal functionality and performance.
                      </span>
                    </li>
                  </ul>
                 <h4 className="text-lg font-semibold text-foreground mb-6">Tech Stack:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Backend: Laravel (PHP), Core PHP, Core Java, Java (Spring Boot) 
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Frontend:React.js, jQuery, HTML5, CSS3
                        </span>
                      </li><li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Database: PostgreSQL, MySQL
                        </span>
                      </li><li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Version Control System:  Git & GitHub
                        </span>
                      </li><li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Container Technologies: Docker, Kubernetes
                        </span>
                      </li><li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                          Operating Systems: Windows & Linux
                        </span>
                      </li><li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>
                           Cloud: AWS (Amazon Web Services)
                        </span>
                      </li>
                    </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            What Drives Me
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Always exploring new technologies and creative solutions to solve complex problems.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  Committed to writing clean, maintainable code and delivering high-quality solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Growth</h3>
                <p className="text-muted-foreground">
                  Continuously learning and improving skills to stay current with industry trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;