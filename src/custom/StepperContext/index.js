import React, { useState, createContext } from 'react';
import ProgressBar from '../../components/ProgressBar/CreateAppForm';

export const multiStepContext = createContext();

const MultiStep = ( props) => {
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    return (
        <div>
            <multiStepContext.Provider value={{ userData, setUserData, finalData, setFinalData}} >
                <ProgressBar />

            </multiStepContext.Provider>
        </div>
    );
};
export default MultiStep;