import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
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
  );
}
