import { 
    Box, 
    Container, 
    Grid, 
    Title, 
    Text, 
    Group, 
    Button, 
    Flex, 
    ActionIcon, 
    useMantineTheme 
  } from '@mantine/core';
  import { IconChevronDown } from '@tabler/icons-react';
  
  export default function HeroSection({ scrollToSection }) {
    const theme = useMantineTheme();
  
    return (
      <Box 
        id="inicio" 
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #FFF0F6, #FFFFFF)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <Box
            className="animate-blob"
            style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '18rem',
              height: '18rem',
              borderRadius: '50%',
              backgroundColor: theme.colors.pink[3],
              opacity: 0.2
            }}
          />
          <Box
            className="animate-blob animation-delay-2000"
            style={{
              position: 'absolute',
              top: '5rem',
              right: '13rem',
              width: '18rem',
              height: '18rem',
              borderRadius: '50%',
              backgroundColor: theme.colors.indigo[3],
              opacity: 0.2
            }}
          />
          <Box
            className="animate-blob animation-delay-4000"
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: '-10px',
              width: '18rem',
              height: '18rem',
              borderRadius: '50%',
              backgroundColor: theme.colors.pink[3],
              opacity: 0.2
            }}
          />
        </Box>
        
        <Container size="lg" py="4rem" style={{ position: 'relative', zIndex: 10 }}>
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
              <Box ta={{ base: "center", md: "left" }}>
                <Title order={1} className="font-serif" size={{ base: 36, md: 48 }} mb="md" c="pink.6">
                  Consentidas Mayte
                </Title>
                <Text size={{ base: "lg", md: "xl" }} mb="xl" c="gray.7">
                  Tu salón de belleza en Milpa Alta, donde la belleza se encuentra con el profesionalismo.
                </Text>
                
                <Group gap="md" justify={{ base: 'center', md: 'flex-start' }}>
                  <Button 
                    size="lg" 
                    color="pink" 
                    className="animate-bounce"
                    onClick={() => scrollToSection('servicios')}
                  >
                    Nuestros Servicios
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    color="pink" 
                    onClick={() => scrollToSection('contacto')}
                  >
                    Contáctanos
                  </Button>
                </Group>
              </Box>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
              <Flex justify="center">
                <Box style={{ position: 'relative', width: '16rem', height: '16rem', '@media (min-width: 768px)': { width: '20rem', height: '20rem' } }}>
                  <Box 
                    className="animate-spin-slow"
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      borderRadius: '50%', 
                      background: 'linear-gradient(to top right, #F06595, #A55EEA)'
                    }} 
                  />
                  <Box style={{ position: 'absolute', inset: '0.5rem', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{ width: '100%', height: '100%' }}>
                      {/* Logo SVG content */}
                      <circle cx="100" cy="100" r="95" fill="#ffffff" stroke="#F06595" strokeWidth="3" />
                      
                      <g>
                        <path d="M60,70 C65,65 70,70 75,75 L125,125 C130,130 135,135 140,130 M140,70 C135,65 130,70 125,75 L75,125 C70,130 65,135 60,130" 
                              fill="none" stroke="#F06595" strokeWidth="3" strokeLinecap="round" />
                        
                        <path d="M75,45 H125 M75,52 H125 M85,45 V60 M95,45 V60 M105,45 V60 M115,45 V60" 
                              fill="none" stroke="#E64980" strokeWidth="2" strokeLinecap="round" />
                        
                        <rect x="85" y="135" width="30" height="20" rx="2" fill="#F783AC" />
                        <rect x="90" y="130" width="20" height="5" rx="1" fill="#D6336C" />
                        <rect x="95" y="122" width="10" height="8" rx="1" fill="#D6336C" />
                      </g>
                      
                      <path id="textPathTop" d="M100,30 A70,70 0 0,1 170,100" fill="none" />
                      <text>
                        <textPath href="#textPathTop" startOffset="50%" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="14" fill="#C2255C" fontWeight="bold">
                          Consentidas
                        </textPath>
                      </text>
                      
                      <path id="textPathBottom" d="M170,100 A70,70 0 0,1 100,170" fill="none" />
                      <text>
                        <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="14" fill="#C2255C" fontWeight="bold">
                          Mayte
                        </textPath>
                      </text>
                      
                      <path d="M35,100 L38,94 L42,100 L38,106 Z" fill="#F783AC" transform="rotate(30, 38, 100)" />
                      <path d="M165,100 L168,94 L172,100 L168,106 Z" fill="#F783AC" transform="rotate(-30, 168, 100)" />
                      <path d="M100,35 L103,29 L107,35 L103,41 Z" fill="#F783AC" transform="rotate(0, 103, 35)" />
                      <path d="M100,165 L103,159 L107,165 L103,171 Z" fill="#F783AC" transform="rotate(0, 103, 165)" />
                    </svg>
                  </Box>
                </Box>
              </Flex>
            </Grid.Col>
          </Grid>
          
          <Box style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }} className="animate-bounce">
            <ActionIcon 
              variant="subtle" 
              color="pink" 
              size="xl" 
              radius="xl"
              onClick={() => scrollToSection('servicios')}
            >
              <IconChevronDown size={30} />
            </ActionIcon>
          </Box>
        </Container>
      </Box>
    );
  }