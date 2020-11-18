import React from 'react'
import {Table} from '.'
import {View} from 'react-native'
import { Input } from './Input'

export function FinalDiagnosis() {
    return (
      <Table headerTitle="Final Diagnosis:">
        <Input multiline={true} numberOfLines={4}/>
      </Table>
    );
  }