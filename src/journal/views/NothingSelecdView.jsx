import { Grid } from "@mui/material";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import { Typography } from "@mui/material";

export const NothingSelecdView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: "#4a148c",
        minHeight: "calc(99vh - 110px)",
        borderRadius: 5,
      }}
    >
      <Grid item xs={12}>
        <BedtimeOutlinedIcon sx={{ fontSize: 90, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Seleccione o cree una entrada
        </Typography>
      </Grid>
    </Grid>
  );
};
