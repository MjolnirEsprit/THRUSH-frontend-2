import React from 'react';
import {List, Checkbox,FormGroup, FormControlLabel} from '@material-ui/core'

export default function CheckboxList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Guitars" />
            <FormControlLabel control={<Checkbox />} label="Keyboards" />
            <FormControlLabel control={<Checkbox />} label="Drums" />
            <FormControlLabel control={<Checkbox />} label="Pedals" />
        </FormGroup>
    </List>
  );
}