import { useState, useEffect } from 'react';
import { 
  AppShell, 
  Container,
  useMantineTheme,
  Burger,
  Group,
  Title,
  Button,
} from '@mantine/core';

// Import components
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollY, setScrollY] = useState(0);

  // Scroll effect to change active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['inicio', 'servicios', 'nosotros', 'contacto'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpened(false);
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding={0}
    >
      <AppShell.Header 
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(255, 255, 255, 0.9)' : 'white',
          backdropFilter: scrollY > 50 ? 'blur(8px)' : 'none',
          boxShadow: scrollY > 50 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <Container size="lg">
          <Group justify="space-between" h="100%">
            <Group>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                hiddenFrom="sm"
                size="sm"
              />
              <Title c="pink.6" className="font-serif" order={3}>Consentidas Mayte</Title>
            </Group>
            
            <Group gap={5} visibleFrom="sm">
              <Button 
                variant={activeSection === 'inicio' ? 'filled' : 'subtle'} 
                color="pink" 
                onClick={() => scrollToSection('inicio')}
              >
                Inicio
              </Button>
              <Button 
                variant={activeSection === 'servicios' ? 'filled' : 'subtle'} 
                color="pink" 
                onClick={() => scrollToSection('servicios')}
              >
                Servicios
              </Button>
              <Button 
                variant={activeSection === 'nosotros' ? 'filled' : 'subtle'} 
                color="pink" 
                onClick={() => scrollToSection('nosotros')}
              >
                Nosotros
              </Button>
              <Button 
                variant={activeSection === 'contacto' ? 'filled' : 'subtle'} 
                color="pink" 
                onClick={() => scrollToSection('contacto')}
              >
                Contacto
              </Button>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Button 
          fullWidth 
          variant={activeSection === 'inicio' ? 'filled' : 'subtle'} 
          color="pink" 
          onClick={() => scrollToSection('inicio')}
          mb="xs"
        >
          Inicio
        </Button>
        <Button 
          fullWidth 
          variant={activeSection === 'servicios' ? 'filled' : 'subtle'} 
          color="pink" 
          onClick={() => scrollToSection('servicios')}
          mb="xs"
        >
          Servicios
        </Button>
        <Button 
          fullWidth 
          variant={activeSection === 'nosotros' ? 'filled' : 'subtle'} 
          color="pink" 
          onClick={() => scrollToSection('nosotros')}
          mb="xs"
        >
          Nosotros
        </Button>
        <Button 
          fullWidth 
          variant={activeSection === 'contacto' ? 'filled' : 'subtle'} 
          color="pink" 
          onClick={() => scrollToSection('contacto')}
        >
          Contacto
        </Button>
      </AppShell.Navbar>

      <AppShell.Main>
        <HeroSection scrollToSection={scrollToSection} />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;