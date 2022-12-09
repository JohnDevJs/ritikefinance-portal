import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    'Pending',
    'Verification',
    'Approve',
    'Decline',
];

const LoanProcess = () => {
    return (
        <Box sx={{ width: '100%' }} className="p-5">
            <Stepper activeStep={1} >
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}
export default LoanProcess