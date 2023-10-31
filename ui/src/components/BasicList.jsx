import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const BasicList = ({ items }) => {
    return (
        <List>
            {items.map((i, idx) => <ListItem key={`${i}-${idx}`}>{i}</ListItem>)}
        </List>
    );
}

export default BasicList;
