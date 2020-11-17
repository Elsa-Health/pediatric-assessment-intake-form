
import React from 'react'
export * from './Row'
export * from './Col'
export * from './TableHeader'
export * from './ChiefComplaints'
export * from './Table'
export * from './Input'
export * from './CheckBox'
export * from './Question'
export * from './Spacer'
export * from './BasicSymptomInput'
export * from './Header'
export * from './PatientInformation'
export * from './ChiefComplaints'
export * from './Symptoms'
export * from './AdditionalPatientInformation'
export * from './SignExams'
export * from './Differentials'
export * from './OrdersResults'
export * from './FinalDiagnosis'



import {View} from 'react-native'

export function FitTextToCell({ children }) {
    return (
      <View
        style={{
          marginVertical: -16,
          marginHorizontal: -8,
        }}>
        {children}
      </View>
    );
  }
  
