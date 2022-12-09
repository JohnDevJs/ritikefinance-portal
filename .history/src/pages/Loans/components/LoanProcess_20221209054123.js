// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';

// const steps = [
//     'Pending',
//     'Verification',
//     'Approve',
// ];

// const LoanProcess = () => {
//     return (
//         <Box sx={{ width: '100%' }} className="my-5">
//             <Stepper activeStep={0}>
//                 {steps.map((label) => (
//                     <Step key={label}>
//                         <StepLabel>  {label}</StepLabel>
//                     </Step>
//                 ))}
//             </Stepper>
//         </Box>
//     );
// }
// export default LoanProcess


import {
    Stepper,
    Step,
    StepLabel,
    StepButton,
    makeStyles
} from "@material-ui/core";

function App() {
    const useStyles = makeStyles(() => ({
        root: {
            "& .MuiStepIcon-active": { color: "red" },
            "& .MuiStepIcon-completed": { color: "green" },
            "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
        }
    }));

    const c = useStyles();

    return (
        <div className="my-4">
            <Stepper className={`${c.root}  card-border-radius`} activeStep={1} >
                <Step>
                    <StepButton>Register your name</StepButton>
                </Step>
                <Step>
                    <StepLabel>Register your email</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Click on Finish</StepLabel>
                </Step>
            </Stepper>
        </div>
    );
}

export default App;