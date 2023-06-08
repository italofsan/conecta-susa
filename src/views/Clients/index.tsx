import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";

import { useStyles } from "./styles";
import { Client } from "../../types";
import { TableActions } from "../../components/TableActions";
import { mockedListClient } from "../../database";
import { successMessage } from "../../components/Messages";

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

      // {
      //   field: "status",
      //   headerName: "Status",
      //   width: 200,
      //   disableColumnMenu: true,
      //   hideSortIcons: true,
      //   renderCell: (params: GridRenderCellParams) => (
      //     <Typography
      //       style={{
      //         display: "flex",
      //         flexDirection: "row",
      //         justifyContent: "center",
      //         alignItems: "center",

      //         width: "100%",
      //         padding: "4px 0px",
      //         borderRadius: "4px",

      //         fontSize: 12,
      //         color: "#252525",
      //         opacity: "0.8",
      //         backgroundColor: (params.value as Boolean)
      //           ? "#6FED8B"
      //           : "#FF3C40",
      //       }}
      //     >
      //       {(params.value as Boolean) ? "Ativo" : "Inativo"}
      //     </Typography>
      //   ),
      // },
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
    <Grid container spacing={2}>
      <Grid item lg={3}>
        <Typography style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}>
          Clientes
        </Typography>
      </Grid>

      <Grid item lg={12}>
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

      <Grid item lg={12}>
        <div style={{ height: 630, width: "100%" }}>
          <DataGrid
            rows={mockedListClient}
            columns={columns}
            disableRowSelectionOnClick
            hideFooterSelectedRowCount
            // components={{
            //   Pagination: () => (
            //     <TablePagination
            //       count={pagination.pageQuantity}
            //       page={pagination.currentPage}
            //       onChange={handleChangePagination}
            //     />
            //   ),
            // }}
          />
        </div>
      </Grid>
    </Grid>
  );
};
