import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block">Hello, I'm</span>
            <span className="block text-primary-glow">John Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-slate-light animate-slide-up">
            PHP & Laravel Developer
          </p>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-slate-light animate-slide-up">
            Passionate full-stack developer with expertise in building robust web applications 
            using modern technologies. I create efficient, scalable solutions that deliver 
            exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-glow transition-all duration-300 shadow-glow">
              <Link to="/projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Building Digital Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized in creating modern web applications with clean code and exceptional performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1.5</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-muted-foreground">Working with modern web technologies and frameworks</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
              <p className="text-muted-foreground">From concept to deployment, delivering quality solutions</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">6+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technologies</h3>
              <p className="text-muted-foreground">Proficient in multiple programming languages and frameworks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Let's discuss your next project and bring your ideas to life.
          </p>
          <Button asChild size="lg" variant="secondary" className="hover:shadow-glow transition-all duration-300">
            <Link to="/contact">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;