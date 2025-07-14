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
            Passionate developer with a love for creating innovative solutions
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
                    <span className="text-3xl font-bold text-primary-foreground">JD</span>
                  </div>
                  <p className="text-muted-foreground">Professional Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl font-bold text-foreground">
              Hi, I'm John Developer
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate PHP & Laravel developer with a strong foundation in full-stack 
              web development. My journey in software development began with a curiosity about 
              how digital products work, and it has evolved into a career focused on creating 
              meaningful and efficient solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the 
              latest industry trends and best practices. My goal is to build applications 
              that not only function perfectly but also provide an exceptional user experience.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to 
              open-source projects, and sharing knowledge with the developer community.
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
                    Full Stack Developer
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Building className="h-4 w-4" />
                    Lashron Technology
                  </div>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    1.5 Years (2022 - Present)
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Remote
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
                      Developed and maintained multiple web applications using Laravel framework, 
                      resulting in improved system performance and user satisfaction
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Implemented responsive front-end interfaces using React and Tailwind CSS, 
                      ensuring optimal user experience across all device types
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Collaborated with cross-functional teams to deliver projects on time and 
                      within budget, maintaining high code quality standards
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Optimized database queries and application performance, resulting in 
                      40% faster page load times
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>
                      Mentored junior developers and contributed to code reviews, 
                      promoting best practices and knowledge sharing
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