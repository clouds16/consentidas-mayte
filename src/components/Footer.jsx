import { 
    Box, 
    Container, 
    Grid, 
    Title, 
    Text, 
    Group, 
    ActionIcon, 
    Divider 
  } from '@mantine/core';
  import { 
    IconPhone, 
    IconMapPin, 
    IconBrandInstagram, 
    IconBrandFacebook, 
    IconBrandWhatsapp 
  } from '@tabler/icons-react';
  
  export default function Footer() {
    return (
      <Box component="footer" py="lg" bg="pink.6" c="white">
        <Container size="lg">
          <Grid mb="md">
            <Grid.Col span={{ base: 12, md: 4 }} mb={{ base: 'md', md: 0 }}>
              <Title order={4} mb="md" className="font-serif">Consentidas Mayte</Title>
              <Text size="sm" mb="md">
                Tu salón de belleza de confianza en Milpa Alta, Ciudad de México.
              </Text>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 4 }} mb={{ base: 'md', md: 0 }}>
              <Title order={4} mb="md" className="font-serif">Contáctanos</Title>
              <Group mb="xs">
                <IconPhone size={16} />
                <Text size="sm">+52 55 3922 9944</Text>
              </Group>
              <Group>
                <IconMapPin size={16} />
                <Text size="sm">Milpa Alta, CDMX</Text>
              </Group>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Title order={4} mb="md" className="font-serif">Síguenos</Title>
              <Group gap="md">
                <ActionIcon variant="subtle" color="white" size="lg">
                  <IconBrandInstagram size={24} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="white" size="lg">
                  <IconBrandFacebook size={24} />
                </ActionIcon>
                <ActionIcon variant="subtle" color="white" size="lg">
                  <IconBrandWhatsapp size={24} />
                </ActionIcon>
              </Group>
            </Grid.Col>
          </Grid>
          
          <Divider my="md" />
          
          <Text size="xs" ta="center" c="pink.1">
            © {new Date().getFullYear()} Consentidas Mayte. Todos los derechos reservados.
          </Text>
        </Container>
      </Box>
    );
  }