import { 
    Box, 
    Container, 
    Title, 
    Text, 
    Grid, 
    Group, 
    Flex,
    useMantineTheme 
  } from '@mantine/core';
  
  export default function AboutSection() {
    const theme = useMantineTheme();
  
    return (
      <Box id="nosotros" py="4rem" bg="pink.0">
        <Container size="lg">
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={2} className="font-serif" size={{ base: 30, md: 36 }} mb="md" c="pink.6">
                Sobre Nosotros
              </Title>
              
              <Text c="gray.7" mb="md">
                Consentidas Mayte nació con la misión de ofrecer servicios de belleza de alta calidad en el corazón de Milpa Alta. Nuestro equipo de profesionales está dedicado a realzar la belleza natural de cada cliente, brindando una experiencia personalizada y relajante.
              </Text>
              
              <Text c="gray.7" mb="md">
                Nos enorgullece utilizar productos de primera calidad y mantenernos actualizados con las últimas tendencias en belleza y estética. Cada visita a Consentidas Mayte es una oportunidad para consentirte y renovar tu imagen.
              </Text>
              
              <Text c="gray.7" mb="md">
                Nuestros valores:
              </Text>
              
              <Grid mb="lg">
                <Grid.Col span={6}>
                  <Group>
                    <Box w={12} h={12} style={{ borderRadius: '50%', backgroundColor: theme.colors.pink[5] }}></Box>
                    <Text>Profesionalismo</Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Group>
                    <Box w={12} h={12} style={{ borderRadius: '50%', backgroundColor: theme.colors.pink[5] }}></Box>
                    <Text>Calidad</Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Group>
                    <Box w={12} h={12} style={{ borderRadius: '50%', backgroundColor: theme.colors.pink[5] }}></Box>
                    <Text>Creatividad</Text>
                  </Group>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Group>
                    <Box w={12} h={12} style={{ borderRadius: '50%', backgroundColor: theme.colors.pink[5] }}></Box>
                    <Text>Pasión</Text>
                  </Group>
                </Grid.Col>
              </Grid>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Flex justify="center">
                <Box style={{ position: 'relative' }}>
                  <Box style={{ 
                    position: 'absolute', 
                    inset: '-1rem', 
                    backgroundColor: theme.colors.pink[2], 
                    borderRadius: '0.5rem', 
                    transform: 'rotate(3deg)' 
                  }}></Box>
                  <Box style={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    borderRadius: '0.5rem', 
                    width: '100%', 
                    maxWidth: '28rem',
                    aspectRatio: '4/3' 
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style={{ width: '100%', height: '100%' }}>
                      {/* SVG for salon illustration */}
                      <rect width="400" height="300" fill="#FFF0F6" />
                      
                      <rect x="100" y="40" width="200" height="220" rx="10" fill="#FAA2C1" />
                      <rect x="110" y="50" width="180" height="200" rx="5" fill="#FFFFFF" />
                      
                      <path d="M200,130 C220,130 235,110 235,90 C235,70 220,50 200,50 C180,50 165,70 165,90 C165,110 180,130 200,130 Z" fill="#F783AC" />
                      <path d="M165,130 C165,160 180,180 200,180 C220,180 235,160 235,130 Z" fill="#F783AC" />
                      
                      <g>
                        <path d="M130,110 L120,160 L135,160 L140,120 Z" fill="#D6336C">
                          <animateTransform attributeName="transform" type="rotate" from="0 130 110" to="5 130 110" dur="2s" repeatCount="indefinite" />
                        </path>
                        <path d="M270,110 L280,160 L265,160 L260,120 Z" fill="#D6336C">
                          <animateTransform attributeName="transform" type="rotate" from="0 270 110" to="-5 270 110" dur="2s" repeatCount="indefinite" />
                        </path>
                      </g>
                      
                      <g>
                        <path d="M190,85 C180,75 185,65 190,60 C195,65 200,75 190,85 Z" fill="#333333">
                          <animate attributeName="d" values="M190,85 C180,75 185,65 190,60 C195,65 200,75 190,85 Z;M190,85 C180,80 183,65 190,60 C197,65 200,80 190,85 Z;M190,85 C180,75 185,65 190,60 C195,65 200,75 190,85 Z" dur="3s" repeatCount="indefinite" />
                        </path>
                        <path d="M200,85 C190,75 195,65 200,60 C205,65 210,75 200,85 Z" fill="#333333">
                          <animate attributeName="d" values="M200,85 C190,75 195,65 200,60 C205,65 210,75 200,85 Z;M200,85 C190,80 193,65 200,60 C207,65 210,80 200,85 Z;M200,85 C190,75 195,65 200,60 C205,65 210,75 200,85 Z" dur="3s" repeatCount="indefinite" />
                        </path>
                        <path d="M210,85 C200,75 205,65 210,60 C215,65 220,75 210,85 Z" fill="#333333">
                          <animate attributeName="d" values="M210,85 C200,75 205,65 210,60 C215,65 220,75 210,85 Z;M210,85 C200,80 203,65 210,60 C217,65 220,80 210,85 Z;M210,85 C200,75 205,65 210,60 C215,65 220,75 210,85 Z" dur="3s" repeatCount="indefinite" />
                        </path>
                      </g>
                      
                      <g transform="translate(130, 110) scale(0.5)">
                        <path d="M0,0 L20,20 M0,20 L20,0" stroke="#333333" strokeWidth="3" strokeLinecap="round">
                          <animateTransform attributeName="transform" type="scale" from="1 1" to="0.8 0.8" dur="1s" repeatCount="indefinite" />
                        </path>
                        <circle cx="5" cy="5" r="5" fill="#333333" />
                        <circle cx="15" cy="15" r="5" fill="#333333" />
                      </g>
                      
                      <g>
                        <circle cx="90" cy="60" r="5" fill="#F783AC" opacity="0.7">
                          <animate attributeName="cy" from="60" to="30" dur="3s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.7" to="0" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="310" cy="80" r="4" fill="#F783AC" opacity="0.7">
                          <animate attributeName="cy" from="80" to="50" dur="4s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.7" to="0" dur="4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="330" cy="100" r="6" fill="#F783AC" opacity="0.7">
                          <animate attributeName="cy" from="100" to="70" dur="5s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.7" to="0" dur="5s" repeatCount="indefinite" />
                        </circle>
                      </g>
                      
                      <text x="200" y="250" fontFamily="'Playfair Display', serif" fontSize="16" textAnchor="middle" fill="#C2255C" fontWeight="bold">
                        Consentidas Mayte
                      </text>
                      <text x="200" y="270" fontFamily="'Poppins', sans-serif" fontSize="12" textAnchor="middle" fill="#F06595">
                        Belleza y Estilo
                      </text>
                    </svg>
                  </Box>
                </Box>
              </Flex>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>
    );
  }