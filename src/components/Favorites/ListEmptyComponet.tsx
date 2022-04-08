import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default function ListEmptyComponent() {
  return ( 
    <View>
      <Text style={styles.favoriteEmptyText}>
        You don't have favorites yet
      </Text>
    </View>
  )
}