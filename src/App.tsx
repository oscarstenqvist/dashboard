import { styled, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const StyledGridContainer = styled(Grid)`
  height: 100vh;
  width: 100vw;
`;

const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

function App() {
  return (
    <StyledGridContainer container spacing={2} padding={2}>
      <StyledGrid size={6}>
        <Typography>Grid 1</Typography>
      </StyledGrid>
      <StyledGrid size={6}>
        <Typography>Grid 2</Typography>
      </StyledGrid>
      <StyledGrid size={6}>
        <Typography>Grid 3</Typography>
      </StyledGrid>
      <StyledGrid size={6}>
        <Typography>Grid 4</Typography>
      </StyledGrid>
    </StyledGridContainer>
  )
}
export default App