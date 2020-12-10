import React from "react";
import { View, Text } from "react-native";
import { Row, Col } from ".";

export function TableHeader({ title }:{title?:string}) {
  return (
    <View style={{ backgroundColor: "#0A0A0B" }}>
      <Row>
        <Col>
          <Text style={{ color: "white" }}>{title}</Text>
        </Col>
      </Row>
    </View>
  );
}
