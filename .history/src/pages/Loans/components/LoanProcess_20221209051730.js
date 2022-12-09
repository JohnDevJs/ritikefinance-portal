import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Pending',
    'Verification',
    'Approve',
];

const LoanProcess = () => {
    return (
        <Box sx={{ width: '100%' }} className="">
            <Stepper activeStep={0}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>  {label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
export default LoanProcess