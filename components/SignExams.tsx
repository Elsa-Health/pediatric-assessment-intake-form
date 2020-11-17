import React from 'react'
import {Table,Col,Row} from '.'
import {Text} from 'react-native'

export function SignsExam() {
    return (
      <Table headerTitle="Signs/ Exam">
        <Col>
          <Text>Vital Signs</Text>
        </Col>
        <Row>
          <Col>
            <Text>Temp</Text>
          </Col>
          <Col>
            <Text>V</Text>
          </Col>
          <Col>
            <Text>Resp Rate</Text>
          </Col>
          <Col>
            <Text>V</Text>
          </Col>
          <Col>
            <Text>HR</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text>O2 Sat</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col>
            <Text>BP</Text>
          </Col>
          <Col>
            <Text>V</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Text>Weight</Text>
          </Col>
          <Col></Col>
          <Col>
            <Text>Height/Length</Text>
          </Col>
          <Col></Col>
        </Row>
        <Col>
          <Text>General Examination</Text>
        </Col>
        <Row>
          <Col>
            <Text>Mental Status:</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Child’s appearance (can select multiple):</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Hair </Text>
          </Col>
          <Col cols={2}>
            <Text>Color</Text>
          </Col>
          <Col cols={3}>
            <Text> </Text>
          </Col>
          <Col cols={2}>
            <Text>Texture</Text>
          </Col>
          <Col cols={3}>
            <Text> </Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Eyes </Text>
          </Col>
          <Col cols={2}>
            <Text>Conjunctiva</Text>
          </Col>
  
          <Col cols={8}>
            <Text> </Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>ENT </Text>
          </Col>
  
          <Col cols={10}>
            <Text> </Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={2}>
            <Text>Mouth </Text>
          </Col>
          <Col cols={2}>
            <Text>Outside</Text>
          </Col>
  
          <Col cols={8}>
            <Text>Inside</Text>
          </Col>
        </Row>
        <Col>
          <Text>Hands </Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Finger clubbing </Text>
          </Col>
          <Col>
            <Text>Outside</Text>
          </Col>
  
          <Col>
            <Text>Palmar pallor</Text>
          </Col>
          <Col>
            <Text>Inside</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Peripheral cyanosis </Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
  
          <Col>
            <Text>Capillary refill time</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
        <Col>
          <Text>Other </Text>
        </Col>
  
        <Row>
          <Col>
            <Text>Tonsils </Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
  
          <Col>
            <Text>Central Cyanosis</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={3}>
            <Text>Skin Pinch Test </Text>
          </Col>
          <Col cols={9}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={3}>
            <Text>Lower limb edema </Text>
          </Col>
          <Col cols={9}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col cols={1}>
            <Text>Lymph Nodes </Text>
          </Col>
          <Col cols={11}>
            <Text></Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Respiratory Examination </Text>
        </Col>
        <Row>
          <Col>
            <Text>When looking at the chest, is it:</Text>
          </Col>
          <Col>
            <Row>
              <Col>
                <Text>Auscultation</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Air Entry</Text>
              </Col>
              <Col>
                <Text></Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Breath sounds</Text>
              </Col>
              <Col>
                <Text></Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Crackles</Text>
              </Col>
              <Col>
                <Text></Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <Text>Wheezing</Text>
              </Col>
              <Col>
                <Text></Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Col>
          <Text>Abdominal Examination </Text>
        </Col>
        <Row>
          <Col>
            <Text>Questions Here</Text>
          </Col>
          <Col>
            <Text>Drawing/Illustration here</Text>
          </Col>
        </Row>
  
        <Col>
          <Text>Skin </Text>
        </Col>
        <Row>
          <Col>
            <Text>Is there a skin lesion?</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
          <Col cols={2}>
            <Text></Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>?</Text>
          </Col>
          <Col>
            <Text></Text>
          </Col>
        </Row>
        <Col>
          <Text>Other information:</Text>
        </Col>
        <Col>
          <Text>Neurological Examination</Text>
        </Col>
  
        <Row>
          <Col>
            <Row>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
            </Row>
  
            <Row>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
            </Row>
  
            <Row>
              <Col>
                <Text>GCS Score:</Text>
              </Col>
              <Col cols={3}>
                <Text>GCS Score:</Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Col>
              <Text>If neonate:</Text>
            </Col>
  
            <Col>
              <Text></Text>
            </Col>
  
            <Row>
              <Col>
                <Text>Motor flexion : </Text>
              </Col>
  
              <Col>
                <Text></Text>
              </Col>
            </Row>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Text>Gait </Text>
          </Col>
  
          <Col cols={7}>
            <Text></Text>
          </Col>
        </Row>
        <Col>
          <Text>Do not fill below if neonate:</Text>
        </Col>
  
        <Row>
          <Col>
            <Text></Text>
          </Col>
  
          <Col>
            <Text>Right</Text>
          </Col>
  
          <Col>
            <Text>Left</Text>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Row>
              <Col>
                <Text>Upper Limbs</Text>
              </Col>
              <Col>
                <Col>
                  <Text>Sensation</Text>
                </Col>
                <Col>
                  <Text>Power</Text>
                </Col>
                <Col>
                  <Text>Muscle tone</Text>
                </Col>
                <Col>
                  <Text>Reflexes</Text>
                </Col>
              </Col>
            </Row>
          </Col>
  
          <Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
          </Col>
  
          <Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
          </Col>
        </Row>
  
        <Row>
          <Col>
            <Row>
              <Col>
                <Text>Lower Limbs</Text>
              </Col>
              <Col>
                <Col>
                  <Text>Sensation</Text>
                </Col>
                <Col>
                  <Text>Power</Text>
                </Col>
                <Col>
                  <Text>Muscle tone</Text>
                </Col>
                <Col>
                  <Text>Reflexes</Text>
                </Col>
              </Col>
            </Row>
          </Col>
  
          <Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
          </Col>
  
          <Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <Text></Text>
            </Col>
          </Col>
        </Row>
        <Col>
          <Text>Cranial Nerves</Text>
        </Col>
      </Table>
    );
  }
  
  function Diefferentials() {
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