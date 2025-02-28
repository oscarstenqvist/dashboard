import { Button, Stack, styled } from "@mui/material";
import useCat from "./CatService";

const StyledStack = styled(Stack)`
  display: flex;
  align-items: center;
  max-width: 55vw;
  max-height: 100vh;
`;

function CatView() {
  const { catUrl, updateCatUrl } = useCat();
  return (
    <StyledStack alignContent={"center"}>
      <Button variant="contained" onClick={updateCatUrl}>Get Cat Image</Button>
      {catUrl && <img src={catUrl} />}
    </StyledStack>
  )
}
export default CatView;