import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, Stack, styled, TextField } from "@mui/material";
import HeartView from "./HeartView";
import useShoppingList from "./UseShoppingList";

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