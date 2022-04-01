import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import HighlightIcon from '@material-ui/icons/Highlight';
import AssessmentIcon from '@material-ui/icons/Assessment';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import BarChartIcon from '@material-ui/icons/BarChart';
import Search from '@material-ui/icons/Search';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Search />
      </ListItemIcon>
      <ListItemText primary="TwinWatch" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssessmentIcon />
      </ListItemIcon>
      <ListItemText primary="TwinSense" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HighlightIcon />
      </ListItemIcon>
      <ListItemText primary="TwInsight" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TouchAppIcon />
      </ListItemIcon>
      <ListItemText primary="Operation" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>
      Stoppages
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Stoppage Code Managment" />
      </ListItem>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Define Machine Stoppage" />
      </ListItem>
      <ListItem button>
        <ListItemIcon></ListItemIcon>
        <ListItemText primary="Define line stoppagge" />
      </ListItem>
    </ListSubheader>
  </div>
);
