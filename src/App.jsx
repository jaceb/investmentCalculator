import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';

function App() {

    const [initialInvestment, setInitialInvestment] = useState();
    const [annualInvestment, setAnnualInvestment] = useState();
    const [expectedReturn, setExpectedReturn] = useState();
    const [duration, setDuration] = useState();


    return (
        <>
            <Header />
            <UserInput />
            {/* Results go here*/ }
</>
  )
}

export default App
