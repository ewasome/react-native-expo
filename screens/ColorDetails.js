import React, { useState, useCallback, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { mapColorDetails } from '../utils/colorDetails';

const ColorBoxDetails = ({ route }) => {
  const { hexValue } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [isError, setIsError] = useState(false);
  const getDetails = useCallback(async () => {
    setIsLoading(true);
    const url = `http://thecolorapi.com/id?hex=${hexValue.replace('#', '')}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(mapColorDetails(data));
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
    setIsLoading(false);
  }, [hexValue]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <View style={[styles.container]}>
      {isLoading && <Text>Please wait...</Text>}
      {isError && !isLoading && (
        <View style={[styles.container]}>
          <Text style={[styles.text]}>Error occured</Text>
          <Button onPress={getDetails} title="try again" color="#841584" />
        </View>
      )}
      {!isError && !isLoading && (
        <Text style={[styles.text]}>done {JSON.stringify(details)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    marginHorizontal: 15,
    paddingTop: 10,
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ColorBoxDetails;
