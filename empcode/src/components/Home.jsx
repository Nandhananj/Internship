import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './stl.css'
const Home = () => {
  
  var [value,setValue]=useState([])
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((response)=>{
      console.log(response);
      setValue (response.data.users)
      
    })
  },[])
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            value.map((data,ind)=>{
              return <TableRow>
                <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>{data.age}</TableCell>
              </TableRow>
            })
          }
        </TableBody>
        </Table>
    </div>
  )
}

export default Home
