import React, { useState, useEffect } from 'react';
    import { DataGrid, GridColDef } from '@mui/x-data-grid';
    import Box from '@mui/material/Box';

    interface DataGridProps<T> {
      fetchData: () => Promise<T[]>;
      columns: { field: string; headerName: string }[];
    }

    function CustomDataGrid<T extends { id: string | number }>({ fetchData, columns }: DataGridProps<T>) {
      const [rows, setRows] = useState<T[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
      const [error, setError] = useState<Error | null>(null);

      useEffect(() => {
        const loadData = async () => {
          try {
            const data = await fetchData();
            setRows(data);
          } catch (err: any) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };

        loadData();
      }, [fetchData]);

      const gridColumns: GridColDef[] = columns.map(col => ({
        field: col.field,
        headerName: col.headerName,
        width: 150,
      }));

      if (loading) {
        return <Box>Loading...</Box>; // Or a Material-UI CircularProgress
      }

      if (error) {
        return <Box>Error: {error.message}</Box>; // Or a more user-friendly error message
      }

      return (
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={gridColumns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
      );
    }

    export default CustomDataGrid;
