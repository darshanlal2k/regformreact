import * as React from 'react';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div>
      Hello React
      <TextField label="Outlined" variant="outlined"/>
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
      </form>

    </div>
  );
}

export default App;
