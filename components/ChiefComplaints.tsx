import React,{useState} from 'react'
import {Table } from '.'
import {Input} from '.'

export function ChiefComplaints() {
    const [complaints, setComplaints] = useState("");
  
    React.useEffect(() => {
      console.log("Complains : ", complaints);
    }, [complaints]);
  
    return (
      <Table headerTitle="Chief Complaints">
        <Input
          multiline
          numberOfLines={4}
          text={complaints}
          setText={setComplaints}
        />
      </Table>
    
    );
  }
  