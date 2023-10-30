import Button from '@mui/material/Button';

const BasicButton = ({ variant = 'outlined', label, ...otherProps }) => {
    return <Button variant={variant} {...otherProps}>{label}</Button>
}

export default BasicButton;
