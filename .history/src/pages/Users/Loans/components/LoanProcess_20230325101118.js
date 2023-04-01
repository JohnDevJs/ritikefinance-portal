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


import { Stepper, Step, StepLabel, StepButton, makeStyles, useMediaQuery } from "@material-ui/core";

function LoanProcess({ lastElement }) {
    const useStyles = makeStyles(() => ({
        root: {
            "& .MuiStepIcon-active": { color: "#2A4C7E" },
            "& .MuiStepIcon-completed": { color: "green" },
            // "& .Mui-disabled .MuiStepIcon-root": { color: "#2A4C7E" }
        }
    }));

    const c = useStyles();

    const isMobile = useMediaQuery('(max-width:600px)'); // Check if screen size is mobile (less than 600px)

    return (
        <div className="mb-4">
            <Stepper className={`${c.root}  card-border-radius`} activeStep={lastElement?.status === "pending" ? 1 : lastElement?.status === "verification" ? 2 : lastElement?.status === "approve" ? 3 : 0}>
                <Step>
                    <StepButton>{isMobile ? 'Pend' : 'Pending'}</StepButton>
                </Step>
                <Step>
                    <StepLabel>{isMobile ? 'Verify' : 'Verified'}</StepLabel>
                </Step>
                <Step>
                    <StepLabel>{isMobile ? 'Appr' : 'Approved'}</StepLabel>
                </Step>
            </Stepper>
        </div>
    );
}

export default LoanProcess;