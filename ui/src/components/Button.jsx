import Button from '@mui/material/Button';

const BasicButton = ({ label, ...otherProps }) => {
    return <Button variant='outlined' {...otherProps}>{label}</Button>
}

export default BasicButton;
