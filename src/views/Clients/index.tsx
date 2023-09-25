import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Add as AddIcon } from "@mui/icons-material";

import { TableActions } from "../../components/TableActions";
import { successMessage } from "../../components/Messages";
import { mockedListClient } from "../../database/clients";

import { useStyles } from "./styles";
import { Container } from "../../components/Screen/Container";

export const Clients = () => {
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
        field: "cpf",
        headerName: "CPF",
        flex: 1,
        disableColumnMenu: true,
      },
      {
        field: "phone",
        headerName: "Telefone",
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
            viewFunction={() => navigate(`/clients/${params.row.id}`)}
            editFunction={() => navigate(`/clients/${params.row.id}/edit`)}
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
          Clientes
        </Typography>
      </Grid>

      <Grid item xs={12} lg={12}>
        <Paper className={classes.paper}>
          <div className={classes.searchBarContainer}>
            <div className={classes.searchBarActionButtonsContainer}>
              <Button
                startIcon={<AddIcon />}
                className={classes.buttonRegister}
                onClick={() => navigate("/clients/new")}
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
            rows={mockedListClient}
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
