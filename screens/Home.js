import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  Button,
  Text,
} from 'react-native';

import { getColorPalletesApiUrl } from '../config';
import { mapPalettes } from '../utils';

import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [palletes, setPalettes] = useState([]);
  const [isError, setIsError] = useState(false);

  const getPalettes = useCallback(async () => {
    const url = getColorPalletesApiUrl();
    setIsError(false);
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const palettes = await response.json();
      setPalettes(mapPalettes(palettes));
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    getPalettes();
  }, [getPalettes]);

  return (
    <View style={styles.container}>
      {isError && !isLoading && (
        <View style={[styles.container]}>
          <Text style={[styles.text]}>Error occured</Text>
          <Button onPress={getPalettes} title="try again" color="#841584" />
        </View>
      )}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getPalettes} />
        }
        data={palletes}
        keyExtractor={(palette) => palette.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            name={item.paletteName}
            colors={item.colors.slice(0, 5)}
            onPress={() => {
              navigation.navigate('ColorPalette', {
                name: item.paletteName,
                colors: item.colors,
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

export default Home;
