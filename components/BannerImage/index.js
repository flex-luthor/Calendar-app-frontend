import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    banner: {
      width: 300,
      height: 300
    },
  });



export default function BannerImage({source}) {
  return <Image style={styles.banner} source={source} />;
}
