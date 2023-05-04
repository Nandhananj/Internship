import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios';
const Addemp = () => {
  const { register, handleSubmit}= useForm();
  const getVal=(val)=>{
    console.log(val);
    alert('Form Submitted');
    axios.post('https://reqres.in/api/users',val).then((res)=>{
    alert(`The data is posted with id ${res.data.id}`)  
    })
  }
  return (
    <div>
      <Stack
      component="form"
      sx={{
        marginTop:'40px',
        marginLeft:'30%',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
    
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Employee name"
        variant="filled"
      />
      <TextField
      name='emplocation'
      {...register('emplocation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Employee location"
        variant="filled"
      />
      
      <TextField
      name='empdesignation'
      {...register('empdesignation')}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Employee designation"
        variant="filled"
      />
      <Button onClick={handleSubmit(getVal)} variant='contained'>SUBMIT</Button>
    </Stack>
    </div>
  )
}

export default Addemp
