import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => (
    <InputBase
        placeholder='Buscar productos...'
        startAdornment={<SearchIcon />}
        sx={{
            backgroundColor: 'white',
            padding: '2px 15px',
            borderRadius: 1,
            display: { xs: 'none', sm: 'inline-flex'},
            width: '100%',
            maxWidth: 500,
            minWidth: 300
        }}
      />
);

export default SearchBar;