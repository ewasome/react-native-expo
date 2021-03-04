import React, { useState, useCallback, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';

import { getColorFormatesApiUrl } from '../config';
import { mapColorDetails } from '../utils';

const ColorBoxDetails = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [isError, setIsError] = useState(false);

  const { hexValue } = route.params;

  const getDetails = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    const url = `${getColorFormatesApiUrl()}?hex=${hexValue.replace('#', '')}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(mapColorDetails(data));
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  }, [hexValue]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  return (
    <View style={[styles.container]}>
      {isLoading && <ActivityIndicator size="large" color="#333" />}
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
    flex: 1,
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
