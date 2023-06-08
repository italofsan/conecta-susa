import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";

import { useStyles } from "./styles";
import { Client } from "../../types";
import { TableActions } from "../../components/TableActions";

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
            viewFunction={() =>
              navigate(`/clients/${params.row.id}`, {
                state: { client: params.row },
              })
            }
            editFunction={() =>
              navigate(`/clients/${params.row.id}/edit`, {
                state: { client: params.row },
              })
            }
            deleteFunction={() => console.log(params.row.id)}
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
                onClick={() => navigate("/animals/new")}
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

const mockedListClient: Client[] = [
  {
    id: 1,
    name: "John Doe",
    cpf: "123.456.789-01",
    phone: "(12) 34567-8901",
  },
  {
    id: 2,
    name: "Jane Smith",
    cpf: "987.654.321-02",
    phone: "(98) 76543-2102",
  },
  {
    id: 3,
    name: "Alice Johnson",
    cpf: "456.123.789-03",
    phone: "(45) 61234-7890",
  },
  {
    id: 4,
    name: "Bob Anderson",
    cpf: "789.123.456-04",
    phone: "(78) 91234-5604",
  },
  {
    id: 5,
    name: "Sarah Williams",
    cpf: "321.654.987-05",
    phone: "(32) 16549-8705",
  },
  {
    id: 6,
    name: "Michael Brown",
    cpf: "654.789.123-06",
    phone: "(65) 47891-2306",
  },
  {
    id: 7,
    name: "Emily Davis",
    cpf: "987.321.654-07",
    phone: "(98) 73216-5407",
  },
  {
    id: 8,
    name: "David Johnson",
    cpf: "456.789.123-08",
    phone: "(45) 67891-2308",
  },
  {
    id: 9,
    name: "Olivia Martinez",
    cpf: "123.987.456-09",
    phone: "(12) 39874-5609",
  },
  {
    id: 10,
    name: "Daniel Wilson",
    cpf: "789.456.123-10",
    phone: "(78) 94561-2310",
  },
];
