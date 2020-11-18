import React from "react";
import { Table, Row, Col } from ".";
import { Text } from "react-native";
import { styles } from "../style";
import { SimpleQuestion } from "./Question";
import { FitTextToCell } from "./FixTextToCell";
import { Input } from "./Input";

export function OrdersResults() {
  return (
    <Table headerTitle="Investigations Ordered and Results">
      <Row>
        <Col>
          <Col style={styles.headerLightGray}>
            <Text>Malaria</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["Blood slide"]} />
            </Col>
            <Col>
              {/* <FitTextToCell> */}
              <Input />
              {/* </FitTextToCell> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Rapid test"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Microbiology</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["Lumbar puncture"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Blood Culture"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>TB Test</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["Micro for AAFBs"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Mantoux"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Row>
            <Col>
              <SimpleQuestion options={["Xpert MTB/RIF"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Myco TB Culture"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Chemistry</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["Na/K"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["U & C"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Ca + Phos"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Row>
            <Col>
              <SimpleQuestion options={["Alb"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Row>
            <Col>
              <SimpleQuestion options={["LFT"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Stool</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["Microscopy"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Micro & culture"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
        </Col>

        <Col>
          <Col style={styles.headerLightGray}>
            <Text>Hematology</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["HB"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Full blood picture:"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>X-Ray</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["CXR"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Other"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col></Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Glucose</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["Stick Test"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Micro & culture"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>HIV</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["Rapid Test"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["PCR"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Urine</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion options={["Urinalysis"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion options={["Micro & culture"]} />
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Other</Text>
          </Col>
          <Row>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>

          <Row>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text>M</Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Table>
  );
}
