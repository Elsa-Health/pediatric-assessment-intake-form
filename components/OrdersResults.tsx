import React from "react";
import { Table, Row, Col } from ".";
import { Text } from "react-native";
import { styles } from "../style";
import { SimpleQuestion } from "./Question";
import { FitTextToCell } from "./FixTextToCell";
import { Input } from "./Input";
import {
  useChemistryTests,
  useGlucoseTests,
  useHematologyTests,
  useHIVTests,
  useMalariaTests,
  useMicrobiologyTests,
  useStoolTests,
  useTBTests,
  useUrineTests,
  useXRayTests,
} from "../store";

export function OrdersResults() {
  const malariaTests = useMalariaTests((state) => state);
  const setMalariaTests = useMalariaTests((state) => state.setMalariaTests);

  const microbiologyTests = useMicrobiologyTests((state) => state);
  const setMicrobiologyTests = useMicrobiologyTests(
    (state) => state.setMicrobiologyTests
  );

  const tbTests = useTBTests((state) => state);
  const setTBTests = useTBTests((state) => state.setTBTests);

  const chemistryTests = useChemistryTests((state) => state);
  const setChemistryTests = useChemistryTests(
    (state) => state.setChemistryTests
  );

  const stoolTests = useStoolTests((state) => state);
  const setStoolTests = useStoolTests((state) => state.setStoolTests);

  const hematologyTests = useHematologyTests((state) => state);
  const setHematologyTests = useHematologyTests(
    (state) => state.setHematologyTests
  );

  const xrayTests = useXRayTests((state) => state);
  const setXRayTests = useXRayTests((state) => state.setXRayTests);

  const glucoseTests = useGlucoseTests((state) => state);
  const setGlucoseTests = useGlucoseTests((state) => state.setGlucoseTests);

  const hivTests = useHIVTests((state) => state);
  const setHIVTests = useHIVTests((state) => state.setHIVTests);

  const urineTests = useUrineTests((state) => state);
  const setUrineTests = useUrineTests((state) => state.setUrineTests);

  // console.log("Debugging the data on orders and results : ");
  // console.table(urineTests);

  return (
    <Table headerTitle="Investigations Ordered and Results">
      <Row>
        <Col>
          <Col style={styles.headerLightGray}>
            <Text>Malaria</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Blood slide"]}
                checked={malariaTests.bloodSlide}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setMalariaTests({ bloodSlide: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={malariaTests.bloodSlideValue}
                  setText={(text) => {
                    setMalariaTests({ bloodSlideValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Rapid test"]}
                checked={malariaTests.rapidTest}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setMalariaTests({ rapidTest: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={malariaTests.rapidTestValue}
                  setText={(text) => {
                    setMalariaTests({ rapidTestValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Microbiology</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Lumbar puncture"]}
                checked={microbiologyTests.lumberPuncture}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setMicrobiologyTests({ lumberPuncture: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={microbiologyTests.lumberPunctureValue}
                  setText={(text) => {
                    setMicrobiologyTests({ lumberPunctureValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Blood Culture"]}
                checked={microbiologyTests.bloodCulture}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setMicrobiologyTests({ bloodCulture: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={microbiologyTests.bloodCultureValue}
                  setText={(text) => {
                    setMicrobiologyTests({ bloodCultureValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>TB Test</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Micro for AAFBs"]}
                checked={tbTests.microAAFBs}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setTBTests({ microAAFBs: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={tbTests.microAAFBsValue}
                  setText={(text) => {
                    setTBTests({ microAAFBsValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Mantoux"]}
                checked={tbTests.mantoux}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setTBTests({ mantoux: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={tbTests.mantouxValue}
                  setText={(text) => {
                    setTBTests({ mantouxValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Row>
            <Col>
              <SimpleQuestion
                options={["Xpert MTB/RIF"]}
                checked={tbTests.xpertMTBRIF}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setTBTests({ xpertMTBRIF: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={tbTests.xpertMTBRIFValue}
                  setText={(text) => {
                    setTBTests({ xpertMTBRIFValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Myco TB Culture"]}
                checked={tbTests.mycoTBCulture}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setTBTests({ mycoTBCulture: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={tbTests.mycoTBCultureValue}
                  setText={(text) => {
                    setTBTests({ mycoTBCultureValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Chemistry</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Na/K"]}
                checked={chemistryTests.nak}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setChemistryTests({ nak: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={chemistryTests.nakValue}
                  setText={(text) => {
                    setChemistryTests({ nakValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["U & C"]}
                checked={chemistryTests.uc}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setChemistryTests({ uc: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={chemistryTests.ucValue}
                  setText={(text) => {
                    setChemistryTests({ ucValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Ca + Phos"]}
                checked={chemistryTests.caphos}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setChemistryTests({ caphos: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={chemistryTests.caphosValue}
                  setText={(text) => {
                    setChemistryTests({ caphosValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Row>
            <Col>
              <SimpleQuestion
                options={["Alb"]}
                checked={chemistryTests.alb}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setChemistryTests({ alb: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={chemistryTests.albValue}
                  setText={(text) => {
                    setChemistryTests({ albValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Row>
            <Col>
              <SimpleQuestion
                options={["LFT"]}
                checked={chemistryTests.lft}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setChemistryTests({ lft: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={chemistryTests.lftValue}
                  setText={(text) => {
                    setChemistryTests({ lftValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Stool</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Microscopy"]}
                checked={stoolTests.microscopy}
                setChecked={(text) => {
                  setStoolTests({ microscopy: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={stoolTests.microscopyValue}
                  setText={(text) => {
                    setStoolTests({ microscopyValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Micro & culture"]}
                checked={stoolTests.microCulture}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setStoolTests({ microCulture: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={stoolTests.microCultureValue}
                  setText={(text) => {
                    setStoolTests({ microCultureValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
        </Col>

        <Col>
          <Col style={styles.headerLightGray}>
            <Text>Hematology</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["HB"]}
                checked={hematologyTests.hb}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setHematologyTests({ hb: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={hematologyTests.hbValue}
                  setText={(text) => {
                    setHematologyTests({ hbValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Full blood picture:"]}
                checked={hematologyTests.fullBloodPicture}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setHematologyTests({ fullBloodPicture: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={hematologyTests.fullBloodPictureValue}
                  setText={(text) => {
                    setHematologyTests({ fullBloodPictureValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>X-Ray</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["CXR"]}
                checked={xrayTests.cxr}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setXRayTests({ cxr: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={xrayTests.cxrValue}
                  setText={(text) => {
                    setXRayTests({ cxrValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Other"]}
                checked={xrayTests.other}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setXRayTests({ other: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={xrayTests.otherValue}
                  setText={(text) => {
                    setXRayTests({ otherValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          {/* <Row>
            <Col></Col>
            <Col>
              <FitTextToCell>
                <Input />
              </FitTextToCell>
            </Col>
          </Row> */}

          <Col style={styles.headerLightGray}>
            <Text>Glucose</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Stick Test"]}
                checked={glucoseTests.stickTest}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setGlucoseTests({ stickTest: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={glucoseTests.stickTestValue}
                  setText={(text) => {
                    setGlucoseTests({ stickTestValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Laboratory"]}
                checked={glucoseTests.laboratory}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setGlucoseTests({ laboratory: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={glucoseTests.laboratoryValue}
                  setText={(text) => {
                    setGlucoseTests({ laboratoryValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>HIV</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Rapid Test"]}
                checked={hivTests.rapidTest}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setHIVTests({ rapidTest: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={hivTests.rapidTestValue}
                  setText={(text) => {
                    setHIVTests({ rapidTestValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["PCR"]}
                checked={hivTests.pcr}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setHIVTests({ pcr: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={hivTests.pcrValue}
                  setText={(text) => {
                    setHIVTests({ pcrValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Urine</Text>
          </Col>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Urinalysis"]}
                checked={urineTests.urinalysis}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setUrineTests({ urinalysis: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={urineTests.urinalysisValue}
                  setText={(text) => {
                    setUrineTests({ urinalysisValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <SimpleQuestion
                options={["Micro & culture"]}
                checked={urineTests.microCulture}
                setChecked={(text) => {
                  // console.log("Hello There ", text);
                  // setGeneral({ fever: text, ...general });

                  // we can set custom values here

                  setUrineTests({ microCulture: text });
                }}
              />
            </Col>
            <Col>
              <FitTextToCell>
                <Input
                  text={urineTests.microCultureValue}
                  setText={(text) => {
                    setUrineTests({ microCultureValue: text });
                  }}
                />
              </FitTextToCell>
            </Col>
          </Row>

          <Col style={styles.headerLightGray}>
            <Text>Other</Text>
          </Col>
          {/* <Row>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <FitTextToCell>
                <Input />
              </FitTextToCell>
            </Col>
          </Row>
          <Row>
            <Col>
              <Text></Text>
            </Col>
            <Col>
              <FitTextToCell>
                <Input />
              </FitTextToCell>
            </Col>
          </Row>

          <Row>
            <Col>{''}</Col>
            <Col>
              <FitTextToCell>
                <Input />
              </FitTextToCell>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </Table>
  );
}
