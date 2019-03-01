import React from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem, Thumbnail, Body, Button } from "native-base";
const githubLogo = require("../Images/Octocat.png");

const RepoResult = props => (
  <View style={{ marginTop: 20, flex: 1 }}>
    <View style={{ flex: 0.05 }}>
      <Text style={{ fontSize: 20 }}>
        This is the top 10 repo for {props.github.username}
      </Text>
    </View>
    <View style={{ flex: 0.85 }}>
      <FlatList
        style={{ marginTop: 20 }}
        data={props.github.repoList.slice(0, 9)}
        renderItem={({ item }) => (
          <List>
            <ListItem>
              <Thumbnail square size={80} source={githubLogo} />
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.id}</Text>
              </Body>
            </ListItem>
          </List>
        )}
      />
    </View>
    <View style={{ flex: 0.1, alignSelf: "center" }}>
      <Button style={{ width: 150 }} onPress={() => props.navigation.goBack()}>
        <Text style={{ textAlign: "center" }}>BACK</Text>
      </Button>
    </View>
  </View>
);

export default RepoResult;
