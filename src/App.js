import React from 'react';
import RegistrationForm from './components/Features/Registration_form/RegistrationForm';
import './App.css';

const details ={
  firstName: "shuanesh",
  lastName: "ababa",
  phonNumber:"054-876985",
  age:25

}
function App() {
  return (
    <div className="App">
    <RegistrationForm user={details}/>
    </div>
  );
}

export default App;
