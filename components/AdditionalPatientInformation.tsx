import React from "react";
import { Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Table, Col, Row } from ".";
import {
  useBirthHistory,
  useMedicalHistory,
  useNutritionalHistory,
  useVaccinationHistory,
} from "../store";
import { styles } from "../style";
import { FitTextToCell } from "./FixTextToCell";
import { Input } from "./Input";
import { SimpleQuestion } from "./Question";

// no state management so far included
// remove this comment when intergrated with state management

export function AdditionalPatientInformation() {
  // stores to be moved to separate components
  const birthHistory = useBirthHistory((state) => state);
  const setBirthHistory = useBirthHistory((state) => state.setBirthHistory);

  const nutritionHistory = useNutritionalHistory((state) => state);
  const setNutritionHistory = useNutritionalHistory(
    (state) => state.setNutritionalHistory
  );

  const vaccinationHistory = useVaccinationHistory((state) => state);
  const setVaccinationHistory = useVaccinationHistory(
    (state) => state.setVaccinationHistory
  );

  const medicalHistory = useMedicalHistory((state) => state);
  const setMedicalHistory = useMedicalHistory(
    (state) => state.setMedicalHistory
  );

  console.log("Debugging the additional patient information ");
  console.table(medicalHistory);

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
          <SimpleQuestion
            options={["full term", "pre-term", "post term"]}
            checked={birthHistory.gestation}
            setChecked={(text) => {
              // console.log("Hello There ", text);
              // setGeneral({ fever: text, ...general });
              setBirthHistory({ gestation: text });
            }}
          />
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>Mother’s age at delivery:</Text>
        </Col>
        <Col cols={2}>
          <FitTextToCell>
            <Input
              text={birthHistory.mothersAgeAtDelivery}
              setText={(text) => {
                setBirthHistory({ mothersAgeAtDelivery: text });
              }}
            />
          </FitTextToCell>
        </Col>
      </Row>

      <Row>
        <Col style={styles.headerLightGray}>
          <Text>Complications after delivery</Text>
        </Col>
        <Col cols={2}>
          <SimpleQuestion
            options={["yes", "no"]}
            checked={birthHistory.complicationsAfterDelivery}
            setChecked={(text) => {
              // console.log("Hello There ", text);
              // setGeneral({ fever: text, ...general });
              setBirthHistory({ complicationsAfterDelivery: text });
            }}
          />
        </Col>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>(If Yes) Apgar Score:</Text>
        </Col>
        <Col cols={2}>
          <FitTextToCell>
            <Input
              text={birthHistory.apgarScore}
              setText={(text) => {
                setBirthHistory({ apgarScore: text });
              }}
            />
          </FitTextToCell>
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>Additional birth history notes:</Text>
        </Col>
        <Col cols={4}>
          <FitTextToCell>
            <Input
              text={birthHistory.additionalBirthHistoryNotes}
              setText={(text) => {
                setBirthHistory({ additionalBirthHistoryNotes: text });
              }}
            />
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
          <SimpleQuestion
            options={["yes", "no"]}
            checked={nutritionHistory.breastfed}
            setChecked={(text) => {
              // console.log("Hello There ", text);
              // setGeneral({ fever: text, ...general });
              setNutritionHistory({ breastfed: text });
            }}
          />
        </Col>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>(If yes) Was it exclusive?</Text>
        </Col>
        <Col cols={2}>
          <SimpleQuestion
            options={["yes", "no"]}
            checked={nutritionHistory.wasItExclusive}
            setChecked={(text) => {
              // console.log("Hello There ", text);
              // setGeneral({ fever: text, ...general });
              setNutritionHistory({ wasItExclusive: text });
            }}
          />
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>(If yes) When did the breastfeeding start?</Text>
        </Col>
        <Col cols={4}>
          <Row style={{ alignItems: "center" }}>
            <SimpleQuestion
              options={["At Birth", "After Birth"]}
              checked={nutritionHistory.breadfeedingStartTime}
              setChecked={(text) => {
                // console.log("Hello There ", text);
                // setGeneral({ fever: text, ...general });
                setNutritionHistory({ breadfeedingStartTime: text });
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text> </Text>
              <Input
                text={nutritionHistory.breastfeedingStartTimeMonths}
                setText={(text) => {
                  setNutritionHistory({ breastfeedingStartTimeMonths: text });
                }}
              />
            </View>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col cols={2} style={styles.headerLightGray}>
          <Text>Was the child on vitamin A supplements?</Text>
        </Col>
        <Col cols={4}>
          <SimpleQuestion
            options={["yes", "no"]}
            checked={nutritionHistory.vitaminASupplements}
            setChecked={(text) => {
              // console.log("Hello There ", text);
              // setGeneral({ fever: text, ...general });
              setNutritionHistory({ vitaminASupplements: text });
            }}
          />
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
          <SimpleQuestion
            options={["yes", "no"]}
            checked={vaccinationHistory.updateOnAllVaccines}
            setChecked={(text) => {
              // console.log("Hello There ", text);
              // setGeneral({ fever: text, ...general });
              setVaccinationHistory({ updateOnAllVaccines: text });
            }}
          />
        </Col>
        <Col style={styles.headerLightGray}>
          <Text>If no, please note below which ones they are missing:</Text>
        </Col>
      </Row>
      <Col>
        <FitTextToCell>
          <Input
            text={vaccinationHistory.missingNotes}
            setText={(text) => {
              setVaccinationHistory({ missingNotes: text });
            }}
          />
        </FitTextToCell>
      </Col>
      <Col style={styles.headerDarkGray}>
        <Text>Previous Medical History</Text>
      </Col>
      <Row>
        <Col>
          <Text>Any previous admission ? </Text>
          <SimpleQuestion
            options={["yes", "no"]}
            checked={medicalHistory.previousSubmission}
            setChecked={(text) => {
              // console.log("Hello There ", text);
              // setGeneral({ fever: text, ...general });
              setMedicalHistory({ previousSubmission: text });
            }}
          />
        </Col>
        <Col>
          <FitTextToCell>
            <Input
              placeholder="If yes, why?"
              text={medicalHistory.whyPreviousSubmission}
              setText={(text) => {
                setMedicalHistory({ whyPreviousSubmission: text });
              }}
            />
          </FitTextToCell>
        </Col>
        <Col>
          <Text>History of antibiotic use?</Text>
          <SimpleQuestion
            options={["yes", "no"]}
            checked={medicalHistory.antibioticUse}
            setChecked={(text) => {
              // console.log("Hello There ", text);
              // setGeneral({ fever: text, ...general });
              setMedicalHistory({ antibioticUse: text });
            }}
          />
        </Col>
      </Row>
    </Table>
  );
}
