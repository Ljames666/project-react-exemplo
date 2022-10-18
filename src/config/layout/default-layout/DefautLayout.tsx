import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Header from '../components/header/Header';

interface DefaultLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const StyledBody = styled('div')(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  main: {
    width: '100%',
    height: '80%',
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <StyledBody>
      <Header />
      <Divider sx={{ margin: '15px 0' }} />
      <main>{props.children}</main>
    </StyledBody>
  );
}
