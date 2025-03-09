import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton, Stack, TextField } from "@mui/material";
import useShoppingList from "./UseShoppingList";

function ShoppingListView() {
  const { items, addItem, removeItem, register, lastAddedUuid, lastTextFieldRef } = useShoppingList();

  return (
    <>
      {Object.keys(items).map((uuid) => (
        <Stack
          key={uuid}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={2}
        >
          <Stack width={"10%"} />
          <Stack width={"80%"}>
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
        </Stack>
      ))}
      <Button onClick={addItem}>
        <AddIcon />
      </Button>
    </>
  )
}

export default ShoppingListView;