import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { UserProvider } from "../contexts/user.context";

export default function TabLayout() {
  console.log("Entrou");

  return (
    <UserProvider>
      <Tabs initialRouteName="index">
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color }) => <MaterialIcons size={28} name="house" color={color} />,
          }}
        />
        <Tabs.Screen
          name="second"
          options={{
            headerShown: false,
            title: "Second",
          }}
        />
      </Tabs>
    </UserProvider>
  );
}
