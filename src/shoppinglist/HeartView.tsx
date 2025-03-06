import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, styled, Typography, Zoom } from '@mui/material';
import useHeart from './HeartService';

const heartSize = "45%";
const textSize = "6rem";
const textWeight = 500;
const text = "Rasa";

const StyledFavoriteIcon = styled(FavoriteIcon)`
  color: red;
  width: ${heartSize};
  height: ${heartSize};
`;

const StyledTypography = styled(Typography)`
  font-size: ${textSize};
  color: white;
  font-weight: ${textWeight};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  pointer-events: none;
`;
const StyledOuterDiv = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

function HeartView() {
  const { showBack, handleEntered, onClickBack } = useHeart();
  return (
    <>
      <Zoom in={true} timeout={5000} onEntered={handleEntered}>
        <StyledOuterDiv>
          {showBack && <Button onClick={onClickBack}>Back</Button>}
          <StyledDiv>
            <StyledFavoriteIcon />
            <StyledTypography>{text}</StyledTypography>
          </StyledDiv>
        </StyledOuterDiv>
      </Zoom>
    </>
  )
}
export default HeartView;