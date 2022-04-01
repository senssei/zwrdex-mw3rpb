import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(country, plantno, plant, line, station, product) {
  id += 1;
  return { id, country, plantno, plant, line, station, product };
}

const data = [
  createData('TR', 9002, 'CORLU', 'PRD-01', 'Filler', '118-300'),
  createData('TR', 9002, 'CORLU', 'PRD-01', 'Filler', '118-300'),
  createData('TR', 9002, 'CORLU', 'PRD-01', 'Filler', '118-300'),
  createData('TR', 9002, 'CORLU', 'PRD-01', 'Filler', '118-300'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Plant No</TableCell>
            <TableCell align="right">Plant</TableCell>
            <TableCell align="right">Line</TableCell>
            <TableCell align="right">Station</TableCell>
            <TableCell align="right">Product No</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n) => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.country}</TableCell>
              <TableCell align="right">{n.plantno}</TableCell>
              <TableCell align="right">{n.plant}</TableCell>
              <TableCell align="right">{n.line}</TableCell>
              <TableCell align="right">{n.station}</TableCell>
              <TableCell align="right">{n.product}</TableCell>
              <TableCell align="right">{n.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
