import React from "react";
import { View, Text, FlatList } from "react-native";
import { List, ListItem, Thumbnail, Body, Right } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
const githubLogo = require("../Images/Octocat.png");

const HotRepo = props => (
  <View style={{ marginTop: 20, flex: 1 }}>
    <View style={{ flex: 0.05 }}>
      <Text style={{ fontSize: 20 }}>
        This is the top repos for the past week
      </Text>
    </View>
    <View style={{ flex: 0.95 }}>
      <FlatList
        style={{ marginTop: 20 }}
        data={props.github.hotRepoList}
        renderItem={({ item }) => (
          <List>
            <ListItem>
              <Thumbnail square size={80} source={githubLogo} />
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.owner.login}</Text>
              </Body>
              <Right>
                <Ionicons name="logo-octocat" style={{ fontSize: 20 }}>
                  <Text style={{ paddingLeft: 5 }}>
                    {item.score.toFixed(2)}
                  </Text>
                </Ionicons>
              </Right>
            </ListItem>
          </List>
        )}
      />
    </View>
  </View>
);

export default HotRepo;
