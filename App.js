import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_200ExtraLight,
  Poppins_500Medium,
  Poppins_800ExtraBold
} from '@expo-google-fonts/poppins';

import Navigation from './src/navigation';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_200ExtraLight,
    Poppins_500Medium,
    Poppins_800ExtraBold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <>
      <StatusBar style={'light'} translucent={false} />
      <Navigation />
    </>
  );
}
