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
	const { updateMalariaTests, ...malariaTests } = useMalariaTests(
		(state) => state
	);

	const {
		updataMicrobiologyTests,
		...microbiologyTests
	} = useMicrobiologyTests((state) => state);

	const { updateTBTests, ...tbTests } = useTBTests((state) => state);

	const { updateChemistryTests, ...chemistryTests } = useChemistryTests(
		(state) => state
	);

	const { updateStoolTests, ...stoolTests } = useStoolTests((state) => state);

	const { updateHematologyTests, ...hematologyTests } = useHematologyTests(
		(state) => state
	);

	const { updateXRayTests, ...xrayTests } = useXRayTests((state) => state);

	const { updateGlucoseTests, ...glucoseTests } = useGlucoseTests(
		(state) => state
	);

	const { updateHIVTests, ...hivTests } = useHIVTests((state) => state);

	const { updateUrineTests, ...urineTests } = useUrineTests((state) => state);

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
								setChecked={(text: string) => {
									updateMalariaTests({ bloodSlide: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={malariaTests.bloodSlideValue}
									setText={(text: string) => {
										updateMalariaTests({
											bloodSlideValue: text,
										});
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
								setChecked={(text: string) => {
									updateMalariaTests({ rapidTest: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={malariaTests.rapidTestValue}
									setText={(text: string) => {
										updateMalariaTests({
											rapidTestValue: text,
										});
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
								checked={microbiologyTests.lumbarPuncture}
								setChecked={(text: string) => {
									console.log("Lumber puncture ", text);

									updataMicrobiologyTests({
										lumbarPuncture: text,
									});
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={microbiologyTests.lumbarPunctureValue}
									setText={(text: string) => {
										updataMicrobiologyTests({
											lumbarPunctureValue: text,
										});
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
								setChecked={(text: string) => {
									updataMicrobiologyTests({
										bloodCulture: text,
									});
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={microbiologyTests.bloodCultureValue}
									setText={(text: string) => {
										updataMicrobiologyTests({
											bloodCultureValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateTBTests({ microAAFBs: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={tbTests.microAAFBsValue}
									setText={(text: string) => {
										updateTBTests({
											microAAFBsValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateTBTests({ mantoux: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={tbTests.mantouxValue}
									setText={(text: string) => {
										updateTBTests({ mantouxValue: text });
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
								setChecked={(text: string) => {
									updateTBTests({ xpertMTBRIF: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={tbTests.xpertMTBRIFValue}
									setText={(text: string) => {
										updateTBTests({
											xpertMTBRIFValue: text,
										});
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
								setChecked={(text: string) => {
									updateTBTests({ mycoTBCulture: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={tbTests.mycoTBCultureValue}
									setText={(text: string) => {
										updateTBTests({
											mycoTBCultureValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateChemistryTests({ nak: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={chemistryTests.nakValue}
									setText={(text: string) => {
										updateChemistryTests({
											nakValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateChemistryTests({ uc: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={chemistryTests.ucValue}
									setText={(text: string) => {
										updateChemistryTests({ ucValue: text });
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateChemistryTests({ caphos: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={chemistryTests.caphosValue}
									setText={(text: string) => {
										updateChemistryTests({
											caphosValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateChemistryTests({ alb: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={chemistryTests.albValue}
									setText={(text: string) => {
										updateChemistryTests({
											albValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateChemistryTests({ lft: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={chemistryTests.lftValue}
									setText={(text: string) => {
										updateChemistryTests({
											lftValue: text,
										});
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
								setChecked={(text: string) => {
									updateStoolTests({ microscopy: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={stoolTests.microscopyValue}
									setText={(text: string) => {
										updateStoolTests({
											microscopyValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateStoolTests({ microCulture: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={stoolTests.microCultureValue}
									setText={(text: string) => {
										updateStoolTests({
											microCultureValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateHematologyTests({ hb: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={hematologyTests.hbValue}
									setText={(text: string) => {
										updateHematologyTests({
											hbValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateHematologyTests({
										fullBloodPicture: text,
									});
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={hematologyTests.fullBloodPictureValue}
									setText={(text: string) => {
										updateHematologyTests({
											fullBloodPictureValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateXRayTests({ cxr: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={xrayTests.cxrValue}
									setText={(text: string) => {
										updateXRayTests({ cxrValue: text });
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateXRayTests({ other: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={xrayTests.otherValue}
									setText={(text: string) => {
										updateXRayTests({ otherValue: text });
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateGlucoseTests({ stickTest: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={glucoseTests.stickTestValue}
									setText={(text: string) => {
										updateGlucoseTests({
											stickTestValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateGlucoseTests({ laboratory: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={glucoseTests.laboratoryValue}
									setText={(text: string) => {
										updateGlucoseTests({
											laboratoryValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateHIVTests({ rapidTest: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={hivTests.rapidTestValue}
									setText={(text: string) => {
										updateHIVTests({
											rapidTestValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateHIVTests({ pcr: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={hivTests.pcrValue}
									setText={(text: string) => {
										updateHIVTests({ pcrValue: text });
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateUrineTests({ urinalysis: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={urineTests.urinalysisValue}
									setText={(text: string) => {
										updateUrineTests({
											urinalysisValue: text,
										});
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
								setChecked={(text: string) => {
									// console.log("Hello There ", text);
									// setGeneral({ fever: text, ...general });

									// we can set custom values here

									updateUrineTests({ microCulture: text });
								}}
							/>
						</Col>
						<Col>
							<FitTextToCell>
								<Input
									text={urineTests.microCultureValue}
									setText={(text: string) => {
										updateUrineTests({
											microCultureValue: text,
										});
									}}
								/>
							</FitTextToCell>
						</Col>
					</Row>

					<Col style={styles.headerLightGray}>
						<Text>Other</Text>
					</Col>
				</Col>
			</Row>
		</Table>
	);
}
