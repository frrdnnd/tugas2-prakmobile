import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts as useLibreCaslonTextFonts, LibreCaslonText_400Regular, LibreCaslonText_700Bold } from '@expo-google-fonts/libre-caslon-text';
import { useFonts as useInterFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import MainTabs from './src/navigation/MainTabs';
import { colors } from './src/theme/theme';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [caslonLoaded] = useLibreCaslonTextFonts({
    LibreCaslonText_400Regular,
    LibreCaslonText_700Bold,
  });
  const [interLoaded] = useInterFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  const fontsLoaded = caslonLoaded && interLoaded;

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, backgroundColor: colors.background }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <MainTabs />
        </NavigationContainer>
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  );
}
