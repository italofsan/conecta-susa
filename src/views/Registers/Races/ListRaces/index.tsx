import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Add as AddIcon } from "@mui/icons-material";

import { TableActions } from "../../../../components/TableActions";
import { successMessage } from "../../../../components/Messages";
import { mockedListRaces } from "../../../../database/races";

import { useStyles } from "./styles";

export const ListRaces = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const columns: GridColDef[] = useMemo(
    () => [
      { field: "id", headerName: "ID", flex: 0.1, disableColumnMenu: true },
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
        field: "status",
        headerName: "Status",
        width: 200,
        disableColumnMenu: true,
        hideSortIcons: true,
        renderCell: (params: GridRenderCellParams) => (
          <Typography
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              width: "100%",
              padding: "4px 0px",
              borderRadius: "4px",

              fontSize: 12,
              color: "#252525",
              opacity: "0.8",
              backgroundColor: params.value === "Ativo" ? "#6FED8B" : "#FF3C40",
            }}
          >
            {params.value}
          </Typography>
        ),
      },
      {
        field: "actions",
        headerName: "Ações",
        flex: 0.1,
        disableColumnMenu: true,
        hideSortIcons: true,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
          <TableActions
            params={params}
            viewFunction={() => navigate(`/registers/races/${params.row.id}`)}
            editFunction={() =>
              navigate(`/registers/races/${params.row.id}/edit`)
            }
            deleteFunction={() => successMessage("Dado excluído com sucesso!")}
          />
        ),
      },
    ],
    []
  );

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={3}>
        <Typography style={{ color: "#5A5A5A", fontSize: 24, fontWeight: 600 }}>
          Raças
        </Typography>
      </Grid>

      <Grid item xs={12} lg={12}>
        <Paper className={classes.paper}>
          <div className={classes.searchBarContainer}>
            <div className={classes.searchBarActionButtonsContainer}>
              <Button
                startIcon={<AddIcon />}
                className={classes.buttonRegister}
                onClick={() => navigate("/registers/races")}
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
            rows={mockedListRaces}
            columns={columns}
            disableRowSelectionOnClick
            hideFooterSelectedRowCount
            hideFooterPagination
          />
        </div>
      </Grid>
    </Grid>
  );
};
