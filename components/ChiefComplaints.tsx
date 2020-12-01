import React, { useState } from "react";
import { Table } from ".";
import { Input } from ".";
import { useChiefComplains } from "../store";

export function ChiefComplaints() {
  const { complains, setChiefComplains } = useChiefComplains((state) => state);

  // console.log("Chief Complains here : ", complains);

  return (
    <Table headerTitle="Chief Complaints">
      <Input
        multiline
        numberOfLines={4}
        text={complains}
        setText={(text) => {
          setChiefComplains({ complains: text });
        }}
      />
    </Table>
  );
}
