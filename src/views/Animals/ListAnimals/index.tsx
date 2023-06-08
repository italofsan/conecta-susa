import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Add as AddIcon, Delete as DeleteIcon } from "@mui/icons-material";

import { useStyles } from "./styles";
import { Animal } from "../../../types";
import { TableActions } from "../../../components/TableActions";

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
        field: "breed",
        headerName: "Raça",
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
        field: "owner",
        headerName: "Proprietário",
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
            viewFunction={() => navigate(`/animals/${params.row.id}`)}
            editFunction={() => navigate(`/animals/${params.row.id}/edit`)}
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
          Animais
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
            rows={mockedListAnimal}
            columns={columns}
            // loading={loading}
            // checkboxSelection
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

const mockedListAnimal: Animal[] = [
  {
    id: 1,
    name: "Bella",
    breed: "Labrador Retriever",
    species: "Cachorro",
    owner: "João Silva",
  },
  {
    id: 2,
    name: "Simba",
    breed: "Persa",
    species: "Gato",
    owner: "Maria Souza",
  },
  {
    id: 3,
    name: "Rocky",
    breed: "Golden Retriever",
    species: "Cachorro",
    owner: "Miguel Ferreira",
  },
  {
    id: 4,
    name: "Luna",
    breed: "Siamês",
    species: "Gato",
    owner: "Ana Rodrigues",
  },
  {
    id: 5,
    name: "Max",
    breed: "Pastor Alemão",
    species: "Cachorro",
    owner: "Pedro Almeida",
  },
  {
    id: 6,
    name: "Coco",
    breed: "Maine Coon",
    species: "Gato",
    owner: "Isabela Oliveira",
  },
  {
    id: 7,
    name: "Charlie",
    breed: "Bulldog",
    species: "Cachorro",
    owner: "Laura Santos",
  },
  {
    id: 8,
    name: "Milo",
    breed: "Ragdoll",
    species: "Gato",
    owner: "Gabriel Costa",
  },
  {
    id: 9,
    name: "Bailey",
    breed: "Beagle",
    species: "Cachorro",
    owner: "Sophia Rocha",
  },
  {
    id: 10,
    name: "Kitty",
    breed: "Scottish Fold",
    species: "Gato",
    owner: "Daniel Santos",
  },
];
