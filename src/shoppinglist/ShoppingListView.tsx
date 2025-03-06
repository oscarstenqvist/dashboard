import { Button, IconButton, styled, TextField, Typography, Stack } from "@mui/material";
import useShoppingList from "./UseShoppingList";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from '@mui/icons-material/Add';
import HeartView from "./HeartView";

const StyledStack = styled(Stack)`
  align-items: center;
  justify-content: center;
`;

function ShoppingListView() {
  const { items, addItem, removeItem, register, showHeartView, lastAddedUuid, lastTextFieldRef } = useShoppingList();

  if (showHeartView) {
    return <HeartView />
  }
  else {
    return (
      <>
        <Typography variant="h4">Inköpslista</Typography>
        {Object.keys(items).map((uuid) => (
          <StyledStack
            key={uuid}
            direction="row"
            spacing={2}
          >
            <Stack sx={{ width: '10%' }} />
            <Stack sx={{ width: '80%' }}>
              <TextField
                fullWidth
                {...register(uuid)}
                inputRef={uuid === lastAddedUuid ? lastTextFieldRef : null}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addItem();
                  }
                }}
              />
            </Stack>
            <IconButton color="secondary" onClick={() => removeItem(uuid)}>
              <DeleteIcon />
            </IconButton>
          </StyledStack>
        ))}
        <Button onClick={addItem}>
          <AddIcon />
        </Button>
      </>
    )
  }
}

export default ShoppingListView;