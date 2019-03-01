import React from "react";
import { View, Text, Image } from "react-native";
import { Images } from "../Themes";
import { Item, Input, Button } from "native-base";
import styles from "../Containers/Styles/LaunchScreenStyles";

const githubLogo = require("../Images/Octocat.png");

const Launch = props => (
  <View style={styles.mainContainer}>
    {/* <Image
      source={Images.background}
      style={styles.backgroundImage}
      resizeMode="stretch"
    /> */}
    <View style={styles.container}>
      <View style={styles.centered}>
        <Image source={githubLogo} style={styles.logo} />
      </View>
      <Item rounded>
        <Input
          autoCapitalize="none"
          placeholder="Please insert github's username ..."
          onChangeText={username => props.onChangeUsername(username)}
          style={{ paddingLeft: 30 }}
        />
      </Item>
      <Text
        style={{
          fontWeight: "bold",
          color: "red",
          alignSelf: "center",
          marginTop: 15
        }}
      >
        {props.github.errorMessage}
      </Text>
      {/* <Text>{props.username}</Text> */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 20
        }}
      >
        <Button onPress={() => props.submitUsername(props.username)}>
          <Text>GET USER REPO</Text>
        </Button>
      </View>
    </View>
  </View>
);

export default Launch;
