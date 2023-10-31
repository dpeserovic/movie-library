import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';

const MultipleSelect = React.forwardRef((props, ref) => {
    const { label, options, valueField, nameField, onChange: formOnChange, ...otherProps } = props;
    const [value, setValue] = useState([]);
    const onChange = event => setValue(event.target.value);
    return (
        <>
            <Select
                input={<OutlinedInput label={label} />}
                multiple
                onChange={onChange}
                ref={ref}
                value={value}
                {...otherProps}
            >
                {options.map(i => <MenuItem key={i[valueField]} value={i[valueField]}>{i[nameField]}</MenuItem>)}
            </Select>
        </>
    );
});

export default MultipleSelect;
