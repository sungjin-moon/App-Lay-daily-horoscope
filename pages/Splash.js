import React from "react";
import { ImageBackground, StyleSheet} from "react-native";

const Splash = () => {
  const source = {
    uri:
      "http://file2.instiz.net/data/cached_img/upload/2015/09/22/14/411452ea85d4b1dcaacb380ae5766550.png"
  };
  return <ImageBackground source={source} style={{ flex: 1 }} />;
};

export default Splash;

const styles = StyleSheet.create({});
