import { useState } from 'react';
import {
  AppShell,
  Burger,
  Button,
  Group,
  NavLink,
  Title,
  Paper,
  Container,
  useMantineTheme,
} from '@mantine/core';

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ 
        width: 300, 
        breakpoint: 'sm', 
        collapsed: { mobile: !opened } 
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger 
            opened={opened} 
            onClick={() => setOpened(!opened)} 
            hiddenFrom="sm" 
            size="sm" 
          />
          <Title order={3}>Mantine + Tailwind</Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <NavLink
          label="Home"
          leftSection={<span>🏠</span>}
          active
        />
        <NavLink
          label="Settings"
          leftSection={<span>⚙️</span>}
        />
        <NavLink
          label="Gallery"
          leftSection={<span>🖼️</span>}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        <Container size="md">
          {/* Using Mantine components */}
          <Title order={1} className="mb-8">Mantine + Tailwind CSS</Title>
          
          {/* Using Mantine Paper with Tailwind classes */}
          <Paper withBorder p="xl" radius="md" className="mb-8 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Using Both Libraries Together</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Mantine Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ready-to-use components</li>
                  <li>Theming system</li>
                  <li>Accessibility features</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Tailwind Benefits</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Utility-first approach</li>
                  <li>Highly customizable</li>
                  <li>No naming conventions needed</li>
                </ul>
              </div>
            </div>
            
            {/* Mix of Mantine components with Tailwind classes */}
            <Group justify="flex-end" className="mt-4">
              <Button variant="default" className="hover:bg-gray-200 transition-colors">
                Cancel
              </Button>
              <Button className="hover:shadow-md transition-shadow">
                Submit
              </Button>
            </Group>
          </Paper>
          
          {/* Pure Tailwind section */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-xl">
            <h2 className="text-xl font-bold mb-3">Pure Tailwind Section</h2>
            <p className="mb-4">This section is styled purely with Tailwind CSS classes.</p>
            <button className="bg-white text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Tailwind Button
            </button>
          </div>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;