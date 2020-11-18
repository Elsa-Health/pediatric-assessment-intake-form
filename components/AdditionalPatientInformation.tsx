import React from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Table, Col, Row } from ".";
import { styles } from "../style";
import { FitTextToCell } from "./FixTextToCell";
import { Input } from "./Input";
import { SimpleQuestion } from "./Question";

// no state management so far included
// remove this comment when intergrated with state management

export function AdditionalPatientInformation() {
  return (
    <Table headerTitle="Additional Patient Information:">
      <Col style={styles.headerDarkGray}>
        <Text>Birth History</Text>
      </Col>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Gestation</Text>
        </Col>
        <Col cols={3}>
          <SimpleQuestion options={["full term", "pre-term", "post term"]} />
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>Mother’s age at delivery:</Text>
        </Col>
        <Col cols={2}>
          <FitTextToCell>
            <Input />
          </FitTextToCell>
        </Col>
      </Row>

      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Complications after delivery</Text>
        </Col>
        <Col cols={2}>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>(If Yes) Apgar Score:</Text>
        </Col>
        <Col cols={2}>
          <FitTextToCell>
            <Input />
          </FitTextToCell>
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>Additional birth history notes:</Text>
        </Col>
        <Col cols={4}>
          <FitTextToCell>
            <Input />
          </FitTextToCell>
        </Col>
      </Row>
      <Col style={styles.headerDarkGray}>
        <Text>Nutritional History</Text>
      </Col>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Was the child breast fed?</Text>
        </Col>
        <Col cols={2}>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>(If yes) Was it exclusive?</Text>
        </Col>
        <Col cols={2}>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>(If yes) When did the breastfeeding start?</Text>
        </Col>
        <Col cols={4}>
          <Row style={{ alignItems: "center" }}>
            <RadioButton
              value={""}
              status={false ? "checked" : "unchecked"}
              onPress={() => {
                console.log("Checked : ");
                // return setChecked(qn);
              }}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text>At Birth</Text>
            </View>

            <RadioButton
              value={""}
              status={false ? "checked" : "unchecked"}
              onPress={() => {
                console.log("Checked : ");
                // return setChecked(qn);
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>After Birth </Text>
              <Input />
            </View>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>Was the child on vitamin A supplements?</Text>
        </Col>
        <Col cols={4}>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
      </Row>

      <Col style={styles.headerDarkGray}>
        <Text>Vaccination History</Text>
      </Col>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Is the child up to date on all vaccines?</Text>
        </Col>
        <Col>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>If no, please note below which ones they are missing:</Text>
        </Col>
      </Row>
      <Col>
        <FitTextToCell>
          <Input />
        </FitTextToCell>
      </Col>
      <Col style={styles.headerDarkGray}>
        <Text>Previous Medical History</Text>
      </Col>
      <Row>
        <Col>
          <Text>Any previous admission ? </Text>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder="If yes, why?" />
          </FitTextToCell>
        </Col>
        <Col>
          <Text>History of antibiotic use?</Text>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
      </Row>
    </Table>
  );
}
