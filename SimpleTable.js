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
function createData(start_time, end_time, duration, type, reason) {
  id += 1;
  return { start_time, end_time, duration, type, reason };
}

const data = [
  createData(
    '05.11.2021 14:15',
    '05.11.2021 14:15',
    '145 sec.',
    'Planned',
    'Power cut'
  ),
  createData('05.11.2021 14:15', '05.11.2021 14:15', '145 sec.', '-', '-'),
  createData('05.11.2021 14:15', '05.11.2021 14:15', '145 sec.', '-', '-'),
  createData('05.11.2021 14:15', '05.11.2021 14:15', '145 sec.', '-', '-'),
  createData('05.11.2021 14:15', '05.11.2021 14:15', '145 sec.', '-', '-'),
  createData('05.11.2021 14:15', '05.11.2021 14:15', '145 sec.', '-', '-'),
  createData('05.11.2021 14:15', '05.11.2021 14:15', '145 sec.', '-', '-'),
  createData('05.11.2021 14:15', '05.11.2021 14:15', '145 sec.', '-', '-'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="right">Start Time</TableCell>
            <TableCell align="right">End Time</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Reason</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((n) => (
            <TableRow key={n.id}>
              <TableCell align="right">{n.start_time}</TableCell>
              <TableCell align="right">{n.end_time}</TableCell>
              <TableCell align="right">{n.duration}</TableCell>
              <TableCell align="right">{n.type}</TableCell>
              <TableCell align="right">{n.reason}</TableCell>
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
