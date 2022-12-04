import React from 'react' 
import {Table, TableBody,TableCell, TableHead ,TableRow, Input, Paper, IconButton } from '@mui/material';

// Icons

import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';




const createData = (name, calories, fat, carbs, protein) => ({
  id: name.replace(" ", "_"),
  name,
  calories,
  fat,
  carbs,
  protein,
  isEditMode: false
});

const CustomTableCell = ({ row, name, onChange }) => {
 
  const { isEditMode } = row;
  return (
    <TableCell align="left" >
      {isEditMode ? (
        <Input
          value={row[name]}
          name={name}
          onChange={e => onChange(e, row)}
          style={{width: 130,height: 40}}
        />
      ) : (
        row[name]
      )}
    </TableCell>
  );
};

export const ViewTiffin = () => {
 
    const [rows, setRows] = React.useState([
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0)
  ]);
  const [previous, setPrevious] = React.useState({});
  

  const onToggleEditMode = id => {
    setRows(state => {
      return rows.map(row => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

  const onRevert = id => {
    const newRows = rows.map(row => {
      if (row.id === id) {
        return previous[id] ? previous[id] : row;
      }
      return row;
    });
    setRows(newRows);
    setPrevious(state => {
      delete state[id];
      return state;
    });
    onToggleEditMode(id);
  };
  return (
    <>
    <Paper  style={{    width: "100%", marginTop: '30px',overflowX: "auto"}}>
      <Table style={{minWidth: 650}} aria-label="caption table">
        <caption>A barbone structure table example with a caption</caption>
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Your Service Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Category&nbsp;</TableCell>
            <TableCell align="left">Food Items&nbsp;</TableCell>
            <TableCell align="left">Adress&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell style={{width: 60}}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      <SettingsBackupRestoreIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, name: "name", onChange }} />
              <CustomTableCell {...{ row, name: "calories", onChange }} />
              <CustomTableCell {...{ row, name: "fat", onChange }} />
              <CustomTableCell {...{ row, name: "carbs", onChange }} />
              <CustomTableCell {...{ row, name: "protein", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </>
  )
}







