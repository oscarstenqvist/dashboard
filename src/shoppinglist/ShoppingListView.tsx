import { Button, IconButton, styled, TextField, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import useShoppingList from "./ShoppingListService";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import HeartView from "./HeartView";
import { useEffect, useRef } from "react";

const StyledGrid = styled(Grid)`
  align-items: center;
  justify-content: center;
`;

function ShoppingListView() {
  const { items, addItem, removeItem, register, showHeartView, lastAddedUuid } = useShoppingList();
  const lastTextFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (lastAddedUuid && lastTextFieldRef.current) {
      lastTextFieldRef.current.focus();
    }
  }, [lastAddedUuid]);

  if (showHeartView) {
    return <HeartView />
  }

  return (
    <>
      <Typography variant="h6">Inköpslista</Typography>
      {Object.keys(items).map((uuid) => (
        <StyledGrid container key={uuid} direction="row">
          <Grid size={1} />
          <Grid size={10}>
            <TextField {...register(uuid)} inputRef={uuid === lastAddedUuid ? lastTextFieldRef : null} onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addItem();
              }
            }} />
          </Grid>
          <Grid size={1}>
            <IconButton color="secondary" onClick={() => removeItem(uuid)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </StyledGrid>
      ))}
      <Button onClick={addItem}>
        <AddIcon />
      </Button>
    </>
  )
}
export default ShoppingListView;