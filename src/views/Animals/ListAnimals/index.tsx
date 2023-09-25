import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Add as AddIcon } from "@mui/icons-material";

import { TableActions } from "../../../components/TableActions";
import { successMessage } from "../../../components/Messages";
import { mockedListAnimal } from "../../../database/animals";

import { useStyles } from "./styles";
import { Container } from "../../../components/Screen/Container";

export const ListAnimals = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", headerName: "ID", flex: 0.2, disableColumnMenu: true },
      {
        field: "name",
        headerName: "Nome",
        flex: 1,
        disableColumnMenu: true,
      },
      {
        field: "species",
        headerName: "Espécie",
        flex: 1,
        disableColumnMenu: true,
      },
      {
        field: "race",
        headerName: "Raça",
        flex: 1,
        disableColumnMenu: true,
      },
      {
        field: "owner",
        headerName: "Proprietário",
        flex: 1,
        disableColumnMenu: true,
      },
      {
        field: "actions",
        headerName: "Ações",
        flex: 0.4,
        disableColumnMenu: true,
        hideSortIcons: true,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <TableActions
            params={params}
            viewFunction={() => navigate(`/animals/${params.row.id}`)}
            editFunction={() => navigate(`/animals/${params.row.id}/edit`)}
            deleteFunction={() => successMessage("Dado excluído com sucesso!")}
          />
        ),
      },
    ],
    []
  );

  return (
    <Container>
      <Grid item xs={12} lg={3}>
        <Typography style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}>
          Animais
        </Typography>
      </Grid>

      <Grid item xs={12} lg={12}>
        <Paper className={classes.paper}>
          <div className={classes.searchBarContainer}>
            <div className={classes.searchBarActionButtonsContainer}>
              <Button
                startIcon={<AddIcon />}
                className={classes.buttonRegister}
                onClick={() => navigate("/animals/new")}
              >
                Cadastrar
              </Button>
            </div>
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} lg={12}>
        <div style={{ height: 630, width: "100%" }}>
          <DataGrid
            rows={mockedListAnimal}
            columns={columns}
            disableRowSelectionOnClick
            hideFooterSelectedRowCount
            hideFooterPagination
          />
        </div>
      </Grid>
    </Container>
  );
};
