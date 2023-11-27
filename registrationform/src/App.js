import * as React from 'react';

// import TextField from '@mui/material/TextField';
import './App.css';

import Regform from './Components/Regform';

function App() {
  return (
    <div>

      {/* <div sx={{ margin: 2, backgroundColor: 'red', color: 'aqua' }} align='center' >
        <h2 sx={{ backgroundColor: 'red', color: 'aqua' }}>Registration Form</h2>
        <div >
          <TextField type='text' id="outlined-basic" label="username" variant="outlined" sx={{ margin: 2 }} />
        </div>
        <div>
          <TextField type='text' id="outlined-basic" label="age" variant="outlined" sx={{ margin: 2 }} />
        </div>
      </div>

      <form>
        <h4>Registration Form</h4>
        <div>
          <label >Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label >Age</label>
          <input type="text" name="age" />
        </div>
        <div>
          <label >Email Id</label>
          <input type="email" name="emailid" />
        </div>
        <div>
          <label >Password</label>
          <input type="password" name="password" />
        </div>
      </form> */}
    
      
      <Regform/>

    </div>
  );
}

export default App;
