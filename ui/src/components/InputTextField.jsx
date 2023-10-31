import React from 'react';
import TextField from '@mui/material/TextField';

const InputTextField = React.forwardRef((props, ref) => {
    return <TextField id="outlined-basic" variant="outlined" ref={ref} {...props} />
});

export default InputTextField;
