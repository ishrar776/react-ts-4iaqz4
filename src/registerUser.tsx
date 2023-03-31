import * as React from 'react';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import EnhancedTable from './tableData';
export default function RegisterUser() {
  let navigate = useNavigate();
  return (
    <>
      <div>Details List of all RegisterUser</div>
      <p>
        <Button variant="contained" onClick={() => navigate('/register')}>
          Back To Register Deatils Page{' '}
        </Button>
      </p>
      <p>Register user Details 2023</p>
      <EnhancedTable />
    </>
  );
}
