import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <PaperProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
