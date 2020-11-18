import React from "react";
import { Table, Row, Col } from ".";
import { Text } from "react-native";
import { styles } from "../style";
import { FitTextToCell } from "./FixTextToCell";
import { Input } from "./Input";

export function Diefferentials() {
  return (
    <Table headerTitle="Differentials">
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Differential #1</Text>
        </Col>
        <Col cols={3}>
          <FitTextToCell>
            <Input />
          </FitTextToCell>
        </Col>
      </Row>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Differential #2</Text>
        </Col>
        <Col cols={3}>
          <FitTextToCell>
            <Input />
          </FitTextToCell>
        </Col>
      </Row>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Differential #3</Text>
        </Col>
        <Col cols={3}>
          <FitTextToCell>
            <Input />
          </FitTextToCell>
        </Col>
      </Row>
    </Table>
  );
}
