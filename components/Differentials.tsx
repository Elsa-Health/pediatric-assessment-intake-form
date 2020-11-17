import React from 'react'
import {Table,Row,Col} from '.'
import {Text} from 'react-native'

export function Diefferentials() {
    return (
      <Table headerTitle="Differentials">
        <Row>
          <Col>
            <Text>Differential #1</Text>
          </Col>
          <Col cols={3}>
            <Text></Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Differential #2</Text>
          </Col>
          <Col cols={3}>
            <Text></Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Differential #3</Text>
          </Col>
          <Col cols={3}>
            <Text></Text>
          </Col>
        </Row>
      </Table>
    );
  }