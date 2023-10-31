import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateField } from '@mui/x-date-pickers/DateField';

const DatePicker = React.forwardRef((props, ref) => {
    const { onChange, ...otherProps } = props;
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateField']}>
                <DateField {...otherProps} ref={ref} />
            </DemoContainer>
        </LocalizationProvider>
    );
});

export default DatePicker;
