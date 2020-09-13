import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectWrapper:{ 
    display:'inline-block'
  },
  try:{
    color:"black"
  }
}));

export default function SelectComponent(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let menuItem=null;
  menuItem = props.selectOption.map((data)=>{
      return <MenuItem value={data}>{data}</MenuItem>
  })
  return (
    <div className={classes.selectWrapper}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label" className={classes.try}>{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleChange}
          className={classes.try}
        >
          {menuItem}
        </Select>
        <FormHelperText className={classes.try}>{props.helperText} </FormHelperText>
      </FormControl>
    </div>
  );
}

