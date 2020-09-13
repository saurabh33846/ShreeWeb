import React from 'react';
import { width } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    unList:{
        listStyle:"disc",
        margin:".5rem 1.5rem .5rem"
    },
    container:{
        width:"60%"
    }
}))
export default function ListWithTitle(props){
    const classes = useStyles();
    let list = null;
    if(props.list.length>0){
        list = props.list.map((listitem)=>{
            return <li>{listitem}</li>
        })
    }

    return (<div className = {classes.container}>
        <h4>
            {props.title}
        </h4>
        <ul className = {classes.unList}>
            {list}
        </ul>
    </div>)
}