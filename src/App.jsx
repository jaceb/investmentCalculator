
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import { useState } from 'react';

function App() {

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue
            }
        });
    }


    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration >= 1;


    const [initialInvestment, setInitialInvestment] = useState();
    const [annualInvestment, setAnnualInvestment] = useState();
    const [expectedReturn, setExpectedReturn] = useState();
    const [duration, setDuration] = useState();


    return (
        <>
            <Header />
            <UserInput onChangeInput={handleChange} userInput={userInput} />
            {inputIsValid ? < Results input={userInput} /> : <p className="center">Please enter a duration greater than zero.</p>}
</>
  )
}

export default App
