import * as React from 'react';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
//import { ProsData } from './tableData';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
export default function ProductDetails() {
  let navigate = useNavigate();
  const itemcart = localStorage.getItem('Dpass');
  const arraytem = itemcart.split(',');
  const prosvalue = arraytem[0];
  //const fname = useContext(ProsData);
  return (
    <>
      <div>Details List of all RegisterUser</div>
      <p>
        <Button variant="contained" onClick={() => navigate('/register')}>
          Back To Register Deatils Page{' '}
        </Button>
      </p>
      <p>ProductDetails each product {prosvalue}</p>
    </>
  );
}
