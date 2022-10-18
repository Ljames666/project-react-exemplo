import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from './Logo';

const StyledHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: '8%',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '2px',

  '& .MuiTypography-root': {
    fontSize: '20px',
  },

  '& .MuiButtonBase-root': {
    margin: '0 16px',
  },
}));

export default function Header() {
  return (
    <StyledHeader>
      <Logo image="./assets/images/logo.png" title="logo" />
      <Typography>Planos</Typography>
      <Typography>Meus anuncios</Typography>
      <Typography>Suporte</Typography>
      <Box>
        <Button variant="outlined">Entrar</Button>
        <Button variant="contained">Vender</Button>
      </Box>
    </StyledHeader>
  );
}
