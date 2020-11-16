import React from "react";
import { View } from "react-native";
import {Row,Col} from './'


export function TableHeader({ title = "" }) {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Row>
        <Col>
          <Text style={{ color: "white" }}>{title}</Text>
        </Col>
      </Row>
    </View>
  );
}
