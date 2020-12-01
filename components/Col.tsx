import React from "react";
import { View } from "react-native";

export function Col({
  children,
  cols,
  style,
}: {
  children?: any;
  cols?: number;
  style?: any;
}) {
  return (
    <View
      style={[
        {
          flex: cols ? cols : 1,
          flexDirection: "column",
          borderRightColor: "#333",
          borderWidth: 0.1,
          paddingHorizontal: 8,
          paddingVertical: 16,
          justifyContent: "center",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
