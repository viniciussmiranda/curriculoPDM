import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#315a7b',
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#f7e7bd',
        tabBarInactiveTintColor: 'rgba(247,231,189,0.4)',
        tabBarLabelStyle: { fontSize: 10, fontWeight: '600' },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="profissional" options={{ title: 'Profissional', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="briefcase" size={size} color={color} /> }} />
      <Tabs.Screen name="academico" options={{ title: 'Acadêmico', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="school" size={size} color={color} /> }} />
      <Tabs.Screen name="projetos" options={{ title: 'Projetos', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="rocket-launch" size={size} color={color} /> }} />
      <Tabs.Screen name="sobre" options={{ title: 'Sobre', tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="information" size={size} color={color} /> }} />
    </Tabs>
  );
}
