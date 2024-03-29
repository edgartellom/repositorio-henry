import React from 'react';
import { render } from 'react-dom';
import Form from './src/components/Controlled.jsx';
import Uncontrolled from './src/components/Uncontrolled.jsx';
import Ejemplo from './src/components/Ejemplo.jsx';
import DynamicInputs from './src/components/DynamicInputs.jsx';

render(
  <div>
    <h2>Controlled</h2>
    <Form />
    <hr />
    <h2>Dinamic Inputs</h2>
    <DynamicInputs />
    <hr />
    <h2>Ejemplo</h2>
    <Ejemplo lang='hun'/>
    <hr />
    <h2>Uncontrolled</h2>
    <Uncontrolled />
    <hr />
  </div>, 
  document.getElementById('app'));
