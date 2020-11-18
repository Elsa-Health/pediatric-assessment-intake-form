import React from "react";
import { Table, Col, Row } from ".";
import { Text } from "react-native";
import { styles } from "../style";
import { Input } from "./Input";
import { FitTextToCell } from "./FixTextToCell";
import { SimpleQuestion } from "./Question";
import { Spacer } from "./Spacer";

export function SignsExam() {
  return (
    <Table headerTitle="Signs/ Exam">
      <Col style={styles.headerDarkGray}>
        <Text>Vital Signs</Text>
      </Col>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Temp</Text>
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder="*C" />
          </FitTextToCell>
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>Resp Rate</Text>
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder="bpm" />
          </FitTextToCell>
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>HR</Text>
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder="/min" />
          </FitTextToCell>
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>O2 Sat</Text>
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder=" % " />
          </FitTextToCell>
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>BP</Text>
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder="mmhg" />
          </FitTextToCell>
        </Col>
      </Row>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Weight</Text>
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder="kg" />
          </FitTextToCell>
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>Height/Length</Text>
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder="cm" />
          </FitTextToCell>
        </Col>
      </Row>
      <Col style={styles.headerDarkGray}>
        <Text>General Examination</Text>
      </Col>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Mental Status:</Text>
        </Col>
        <Col>
          <SimpleQuestion
            options={["alert", "drowsy", "widthdrawn", "not responding"]}
          />
        </Col>
      </Row>

      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Child’s appearance (can select multiple):</Text>
        </Col>
        <Col>
          <SimpleQuestion
            options={["sick", "wasted", "lethargic", "normal", "alert"]}
          />
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerDarkGray}>
          <Text>Hair </Text>
        </Col>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>Color</Text>
        </Col>
        <Col cols={3}>
          <SimpleQuestion options={["normal", "abnormal"]} />
        </Col>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>Texture</Text>
        </Col>
        <Col cols={3}>
          <SimpleQuestion options={["thick", "brittle"]} />
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerDarkGray}>
          <Text>Eyes </Text>
        </Col>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>Conjunctiva</Text>
        </Col>

        <Col cols={8}>
          <SimpleQuestion options={["pale", "not pale"]} />
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerDarkGray}>
          <Text>ENT </Text>
        </Col>

        <Col cols={10}>
          <FitTextToCell>
            <Input />
          </FitTextToCell>
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerDarkGray}>
          <Text>Mouth </Text>
        </Col>
        <Col cols={2}>
          <Text>Outside : </Text>
          <SimpleQuestion
            options={["Angular stomatitis", "Ulcerations"]}
            horizontal={false}
          />
        </Col>

        <Col cols={8}>
          <Text>Inside : </Text>
          <SimpleQuestion
            options={[
              "Ulcerations",
              "Glossitis",
              "Bleeding gums",
              "White lesions",
              "Red lesions",
              "Cyanosis",
            ]}
          />
        </Col>
      </Row>
      <Col style={styles.headerDarkGray}>
        <Text>Hands </Text>
      </Col>

      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Finger clubbing </Text>
        </Col>
        <Col>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>

        <Col style={styles.headerLightGray}>
          <Text>Palmar pallor</Text>
        </Col>
        <Col>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
      </Row>

      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Peripheral cyanosis </Text>
        </Col>
        <Col>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>

        <Col style={styles.headerLightGray}>
          <Text>Capillary refill time</Text>
        </Col>
        <Col>
          <FitTextToCell>
            <Input placeholder="Secs" />
          </FitTextToCell>
        </Col>
      </Row>
      <Col style={styles.headerDarkGray}>
        <Text>Other </Text>
      </Col>

      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Tonsils </Text>
        </Col>
        <Col>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>

        <Col style={styles.headerLightGray}>
          <Text>Central Cyanosis</Text>
        </Col>
        <Col>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
      </Row>

      <Row>
        <Col cols={3} style={styles.headerLightGray}>
          <Text>Skin Pinch Test </Text>
        </Col>
        <Col cols={9}>
          <SimpleQuestion options={["slow", "medium", "normal"]} />
        </Col>
      </Row>

      <Row>
        <Col cols={3} style={styles.headerLightGray}>
          <Text>Lower limb edema </Text>
        </Col>
        <Col cols={9}>
          <SimpleQuestion options={["Yes", "No"]} />
          <Text style={{ marginTop: 12, marginLeft: 10 }}>If Yes,</Text>
          <SimpleQuestion options={["Pitting", "Non-pitting"]} />
        </Col>
      </Row>

      <Row>
        <Col cols={1} style={styles.headerDarkGray}>
          <Text>Lymph Nodes </Text>
        </Col>
        <Col cols={11}>
          {/* still not sure about the input for the second argument below according to the from */}
          <SimpleQuestion
            options={["Non palpable ", "Palpable Right/Left group of:"]}
          />
        </Col>
      </Row>

      <Col style={styles.headerDarkGray}>
        <Text>Respiratory Examination </Text>
      </Col>
      <Row>
        <Col>
          <Text>When looking at the chest, is it:</Text>
          <SimpleQuestion
            options={[
              "Normal",
              "Barrel",
              "Intercostal recession",
              "Chest indrawing",
            ]}
            horizontal={false}
          />
        </Col>
        <Col>
          <Row>
            <Col style={styles.headerDarkGray}>
              <Text>Auscultation</Text>
            </Col>
          </Row>
          <Row>
            <Col style={styles.headerLightGray}>
              <Text>Air Entry</Text>
            </Col>
            <Col>
              <SimpleQuestion
                options={["Normal", "Diminished"]}
                // horizontal={false}
              />
            </Col>
          </Row>
          <Row>
            <Col style={styles.headerLightGray}>
              <Text>Breath sounds</Text>
            </Col>
            <Col>
              <SimpleQuestion
                options={["Bronchovesicular", "Bronchial", "Vesicular"]}
                horizontal={false}
              />
            </Col>
          </Row>
          <Row>
            <Col style={styles.headerLightGray}>
              <Text>Crackles</Text>
            </Col>
            <Col>
              <SimpleQuestion options={["yes", "no"]} />
            </Col>
          </Row>
          <Row>
            <Col style={styles.headerLightGray}>
              <Text>Wheezing</Text>
            </Col>
            <Col>
              <SimpleQuestion options={["yes", "no"]} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Col style={styles.headerLightGray}>
        <Text>Abdominal Examination </Text>
      </Col>
      <Row>
        <Col>
          <SimpleQuestion
            options={["yes", "no"]}
            label="Are there any masses on the abdomen? (If yes,
please indicate the location in the picture.)"
          />

          <SimpleQuestion
            options={["yes", "no"]}
            label="Is there tenderness? (If yes, please indicate
              location.)"
          />

          <SimpleQuestion
            options={["yes", "no"]}
            label="Is there any rebound tenderness?"
          />

          <SimpleQuestion
            options={["yes", "no"]}
            label="Any rectal prolapse?"
          />
          <Spacer size={12} />
          <Text>Anal examination (e.g.; if pinworms observed):</Text>
        </Col>
        <Col>
          <Text>Drawing/Illustration here</Text>
        </Col>
      </Row>

      <Col style={styles.headerDarkGray}>
        <Text>Skin </Text>
      </Col>
      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Is there a skin lesion?</Text>
        </Col>
        <Col>
          <SimpleQuestion options={["yes", "no"]} />
        </Col>
        <Col cols={2}>
          <Text>If yes, where is the lesion?</Text>
          <Input />
          <Text>Shape of lesion:</Text>
          <Input />
          <SimpleQuestion options={["Multiple", "Single lesion"]} />
        </Col>
      </Row>

      <Row>
        <Col>
          <SimpleQuestion
            options={[
              "Rash",
              "Weal",
              "Bump",
              "Ringworm",
              "Rose spots",
              "Burn",
              "Other",
            ]}
            label="Type : "
          />

          {/* show this only when other is selected */}
          <Input />
          <Spacer size={8} />
          <SimpleQuestion
            options={["Defined", "Undefined"]}
            label="Margins : "
          />
        </Col>
        <Col>
          <SimpleQuestion options={["Bleeding", "Pruritic", "Discolored :"]} />
          <Input />
          <Spacer size={8} />
          <SimpleQuestion
            options={[
              "Worsens at night",
              "Another household member with similar problem",
            ]}
            horizontal={false}
          />
        </Col>
      </Row>
      <Col>
        <Text>Other information:</Text>
      </Col>
      <Col style={styles.headerDarkGray}>
        <Text>Neurological Examination</Text>
      </Col>

      {/* the inputs for this parts are not clear */}
      {/* might need to be updated */}
      <Row>
        <Col>
          <Row>
            <Col style={styles.headerLightGray}>
              <Text>GCS Score:</Text>
              <Input placeholder="/15" />
            </Col>
            <Col>
              <Text>Eyes:</Text>
              <Input placeholder="/4" />
            </Col>
            <Col>
              <Text>Verbal:</Text>
              <Input placeholder="/5" />
            </Col>
            <Col>
              <Text>Motor:</Text>
              <Input placeholder="/6" />
            </Col>
          </Row>

          <Row>
            <Col style={styles.headerLightGray}>
              <Text>Blantyre Score (if non verbal):</Text>
              <Input placeholder="/5" />
            </Col>
            <Col>
              <Text>Eyes:</Text>
              <Input placeholder="/1" />
            </Col>
            <Col>
              <Text>Verbal:</Text>
              <Input placeholder="/2" />
            </Col>
            <Col>
              <Text>Motor:</Text>
              <Input placeholder="/3" />
            </Col>
          </Row>

          <Row>
            <Col style={styles.headerLightGray}>
              <Text>Neck rigidity:</Text>
            </Col>
            <Col cols={3}>
              <SimpleQuestion
                options={["Rigid", "Supple"]}
                // horizontal={false}
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <Col style={[styles.headerLightGray]}>
            <Text>If neonate:</Text>
          </Col>

          <Col >
            <SimpleQuestion
              options={["Babinski’s sign", "Moro’s reflex", "Palmar grasp"]}
              // horizontal={false}
            />
          </Col>

          <Row style={{flex: 4,}}>
            <Col style={styles.headerLightGray}>
              <Text>Motor flexion : </Text>
            </Col>

            <Col style={{ }}>
              <SimpleQuestion
                options={["Normal", "Hyporeflexed", "Hyper reflexed"]}
                horizontal={false}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Gait </Text>
        </Col>

        <Col cols={7}>
          <FitTextToCell>
            <Input />
          </FitTextToCell>
        </Col>
      </Row>
      <Col style={{ backgroundColor: "black" }}>
        <Text style={{ color: "white", fontStyle: "italic" }}>
          Do not fill below if neonate:
        </Text>
      </Col>

      <Row>
        <Col>
          <Text></Text>
        </Col>

        <Col>
          <Text style={{ fontWeight: "bold" }}>Right</Text>
        </Col>

        <Col>
          <Text style={{ fontWeight: "bold" }}>Left</Text>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Col style={styles.headerDarkGray}>
              <Text>Upper Limbs</Text>
            </Col>

            {/* to move to component for fixing padding defaults for cols */}

            <Col style={styles.removePadding}>
              <Col style={styles.headerLightGray}>
                <Text>Sensation</Text>
              </Col>
              <Col style={styles.headerLightGray}>
                <Text>Power</Text>
              </Col>
              <Col style={styles.headerLightGray}>
                <Text>Muscle tone</Text>
              </Col>
              <Col style={styles.headerLightGray}>
                <Text>Reflexes</Text>
              </Col>
            </Col>
          </Row>
        </Col>

        <Col>
          <Col>
            <SimpleQuestion options={["Normal", "Diminished"]} />
          </Col>
          <Col>
            <FitTextToCell>
              <Input placeholder="/5" />
            </FitTextToCell>
          </Col>
          <Col>
            <FitTextToCell>
              <Input placeholder="/5" />
            </FitTextToCell>
          </Col>
          <Col>
            <SimpleQuestion
              options={["Normal", "Hyporeflexive", "Hypereflexive"]}
            />
          </Col>
        </Col>

        <Col>
          <Col>
            <SimpleQuestion options={["Normal", "Diminished"]} />
          </Col>
          <Col>
            <FitTextToCell>
              <Input placeholder="/5" />
            </FitTextToCell>
          </Col>
          <Col>
            <FitTextToCell>
              <Input placeholder="/5" />
            </FitTextToCell>
          </Col>
          <Col>
            <SimpleQuestion
              options={["Normal", "Hyporeflexive", "Hypereflexive"]}
            />
          </Col>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Col style={styles.headerDarkGray}>
              <Text>Lower Limbs</Text>
            </Col>
            <Col style={styles.removePadding}>
              <Col style={styles.headerLightGray}>
                <Text>Sensation</Text>
              </Col>
              <Col style={styles.headerLightGray}>
                <Text>Power</Text>
              </Col>
              <Col style={styles.headerLightGray}>
                <Text>Muscle tone</Text>
              </Col>
              <Col style={styles.headerLightGray}>
                <Text>Reflexes</Text>
              </Col>
            </Col>
          </Row>
        </Col>

        <Col>
          <Col>
            <SimpleQuestion options={["Normal", "Diminished"]} />
          </Col>
          <Col>
            <FitTextToCell>
              <Input placeholder="/5" />
            </FitTextToCell>
          </Col>
          <Col>
            <FitTextToCell>
              <Input placeholder="/5" />
            </FitTextToCell>
          </Col>
          <Col>
            <SimpleQuestion
              options={["Normal", "Hyporeflexive", "Hypereflexive"]}
            />
          </Col>
        </Col>

        <Col>
          <Col>
            <SimpleQuestion options={["Normal", "Diminished"]} />
          </Col>
          <Col>
            <FitTextToCell>
              <Input placeholder="/5" />
            </FitTextToCell>
          </Col>
          <Col>
            <FitTextToCell>
              <Input placeholder="/5" />
            </FitTextToCell>
          </Col>
          <Col>
            <SimpleQuestion
              options={["Normal", "Hyporeflexive", "Hypereflexive"]}
            />
          </Col>
        </Col>
      </Row>
      <Col>
        <Text>Cranial Nerves</Text>
        <SimpleQuestion options={['All intact','Abnormal: Cranial nerve (s) ']}/>
        <Input placeholder="number(1-12)"/>
        <Spacer size={8}/>
        <Text>If abnormal, patient cannot illicit:</Text>
        <Input/>
      </Col>
    </Table>
  );
}
