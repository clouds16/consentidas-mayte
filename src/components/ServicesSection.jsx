import { 
    Box, 
    Container, 
    Title, 
    Text, 
    Grid, 
    Paper, 
    Flex, 
    useMantineTheme 
  } from '@mantine/core';
  import { 
    IconScissors, 
    IconNail, 
    IconColorSwatch, 
    IconWaveSine, 
    IconHairpin 
  } from '@tabler/icons-react';
  
  export default function ServicesSection() {
    const theme = useMantineTheme();
  
    const services = [
      { icon: IconScissors, name: 'Cortes de Cabello', description: 'Cortes personalizados para todos los estilos y edades.' },
      { icon: IconNail, name: 'Uñas', description: 'Manicura, pedicura y diseños exclusivos para tus uñas.' },
      { icon: IconColorSwatch, name: 'Mechas', description: 'Mechas, balayage, y coloración profesional para transformar tu look.' },
      { icon: IconWaveSine, name: 'Bases', description: 'Permanentes y alisados que mantienen tu cabello hermoso por más tiempo.' },
      { icon: IconHairpin, name: 'Extensiones', description: 'Extensiones de cabello natural para añadir volumen y longitud.' },
    ];
  
    return (
      <Box id="servicios" py="4rem" bg="white">
        <Container size="lg">
          <Title order={2} ta="center" className="font-serif" size={{ base: 30, md: 36 }} mb="xs" c="pink.6">
            Nuestros Servicios
          </Title>
          <Text ta="center" c="gray.6" mb="3rem" mx="auto" maw={600}>
            En Consentidas Mayte ofrecemos una variedad de servicios de belleza profesionales para realzar tu belleza natural.
          </Text>
          
          <Grid>
            {services.map((service, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 6, lg: 4 }}>
                <Paper
                  shadow="md"
                  radius="md"
                  p="xl"
                  sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-0.5rem)',
                      boxShadow: theme.shadows.xl
                    },
                    border: `1px solid ${theme.colors.pink[1]}`
                  }}
                >
                  <Flex direction="column" align="center">
                    <Flex 
                      align="center" 
                      justify="center" 
                      mb="md" 
                      w={64}
                      h={64}
                      sx={{ 
                        backgroundColor: theme.colors.pink[0],
                        borderRadius: '50%',
                        color: theme.colors.pink[5]
                      }}
                    >
                      <service.icon size={32} stroke={1.5} />
                    </Flex>
                    
                    <Title order={3} mb="sm" className="font-serif" c="pink.6">
                      {service.name}
                    </Title>
                    
                    <Text c="gray.6" ta="center">
                      {service.description}
                    </Text>
                  </Flex>
                </Paper>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  }