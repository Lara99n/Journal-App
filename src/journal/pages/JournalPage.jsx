import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelecdView, NoteView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      <NothingSelecdView />

      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
