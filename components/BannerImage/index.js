import * as React from "react";
import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  banner: {
    maxWidth: 200,
    maxHeight: 200,
  },
});

export default function BannerImage({ source }) {
  return <Image style={styles.banner} source={source} />;
}
