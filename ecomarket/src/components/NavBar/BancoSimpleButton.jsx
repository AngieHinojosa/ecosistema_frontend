import { Button } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const BancoSimpleButton = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<AccountBalanceIcon sx={{ color: 'white' }} />}
      href="https://bancosimple.com"
      sx={{
        textTransform: 'none',
        borderRadius: 2,
        color: 'white',
        borderColor: 'white',
        '&:hover': {
          borderColor: 'white',
          backgroundColor: 'rgba(255,255,255,0.1)',
        },
      }}
    >
      Banco Simple
    </Button>
  );
};

export default BancoSimpleButton;