import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: orange[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

const List = () => {
    const classes = useStyles();
    const [students, setStudents] = useState([]);
    const [posts, setPosts] = useState([]);


    useEffect(() => {
    //Api List
    let config = {
      method: 'get',
      url: 'https://devza.com/tests/tasks/list',students,
      headers: { 
        'AuthToken': 'UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a'
      }
    };
    
    let api= axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setStudents(response.data.tasks);
    })
    .catch(function (error) {
      console.log(error);
    });
    },[])
    
    //  Delete Button
    const handleDelete = id => {
      var myHeaders = new Headers();
myHeaders.append("AuthToken", "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a");

var formdata = new FormData();
formdata.append("taskid", "1");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://devza.com/tests/tasks/delete", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result.status))
  .catch(error => console.log('error', error));
    }
    
    
    


    return (
        <>
         <Box textAlign="center"  p={2} my={2}className={classes.stuListColor}>
          <Typography variant="h5">Task List</Typography>
         </Box>
         <TableContainer component={Paper}>
          <Table>
           <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
             <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
             <TableCell align="center" className={classes.tableHeadCell}>Message</TableCell>
             <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
             <TableCell align="center" className={classes.tableHeadCell}>Priority</TableCell>
             <TableCell align="center" className={classes.tableHeadCell}>Due Date</TableCell>
             <TableCell align="center" className={classes.tableHeadCell}>Edit/Delete</TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
            {students.map((data,i) => (
                
                    <TableRow key={i}>
                       <TableCell align="center">{data.id}</TableCell>
                       <TableCell align="center">{data.message}</TableCell>
                       <TableCell align="center">{data.assigned_name}</TableCell>
                       <TableCell align="center">{data.priority}</TableCell>
                       <TableCell align="center">{data.created_on}</TableCell>
                       <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${data.id}`}><EditIcon /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(data.id)} ><DeleteIcon color="secondary" /></IconButton>
           </Tooltip>
                    </TableRow>
                ))
            }
           </TableBody>
           </Table>
           </TableContainer>
           
           </>
           )
}

export default List;