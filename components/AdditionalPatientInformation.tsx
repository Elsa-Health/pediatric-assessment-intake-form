import React from 'react'
import {Text} from 'react-native'
import {Table,Col,Row} from '.'

export function AdditionalPatientInformation() {
    return (
      <Table headerTitle="Additional Patient Information:">
        <Col>
          <Text>Birth History</Text>
        </Col>
        <Row>
          <Col>
            <Text>Gestation</Text>
          </Col>
          <Col cols={3}>
            <Text></Text>
          </Col>
          <Col>
            <Text>Mother’s age at delivery:</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Complications after delivery</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
          <Col cols={2}>
            <Text>(If Yes) Apgar Score:</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Additional birth history notes:</Text>
          </Col>
          <Col cols={4}>
            <Text></Text>
          </Col>
        </Row>
        <Col>
          <Text>Nutritional History</Text>
        </Col>
        <Row>
          <Col>
            <Text>Was the child breast fed?</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
          <Col cols={2}>
            <Text>(If yes) Was it exclusive?</Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>(If yes) When did the breastfeeding start?</Text>
          </Col>
          <Col cols={4}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Was the child on vitamin A supplements?</Text>
          </Col>
          <Col cols={4}>
            <Text></Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Vaccination History</Text>
        </Col>
        <Row>
          <Col>
            <Text>Is the child up to date on all vaccines?</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text>If no, please note below which ones they are missing:</Text>
          </Col>
        </Row>
        <Col>
          <Text>Empy Space</Text>
        </Col>
        <Col>
          <Text>Previous Medical History</Text>
        </Col>
        <Row>
          <Col>
            <Text>Any previous admission ? </Text>
            <Text>Radios here</Text>
          </Col>
          <Col>If yes, why?</Col>
          <Col>
            <Text>History of antibiotic use?</Text>
            <Text>Radios here</Text>
          </Col>
        </Row>
      </Table>
    );
  }