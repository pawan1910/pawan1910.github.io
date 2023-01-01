import React,{useState, useEffect} from "react";
import { getAllUsersLists } from "./api/api";
import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { deepPurple, green } from '@material-ui/core/colors';
import { useNavigate, useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import axios from "axios";


const useStyles = makeStyles({
 headingColor: {
  backgroundColor: deepPurple[400],
  color: "white"
 },
 addStuColor: {
  backgroundColor: green[400],
  color: "white"
 },

});

const Edit = (props) => {
 const classes = useStyles();
 const { id } = useParams();
 const [value, setValue] = useState();

 let navigate = useNavigate();

 


 const [user, setUser] = useState([]);
 const [students, setStudents] = useState({
  message: "",
  person: [],
  priority: "",
  date: "",
});

// API for Names
useEffect(() => {
  apiCall();
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
    setStudents(response.data.tasks.find(x => x.id == id));
  })
  .catch(function (error) {
    console.log(error);
  });
}, []);

const apiCall = async () => {
  const data = await getAllUsersLists();
  console.log(data.data.users);

  setUser(data.data.users);
};

function onTextFieldChange(e) {
  setStudents({
   ...students,
   [e.target.name]: e.target.value
  })
 }
   
    
const onFormSubmit = (e) => {
  e.preventDefault();
  // async () => {
  try{
const data = new FormData();
data.append("message", "");
data.append("assigned_to", "");
data.append("priority", "");
data.append("due_date", "2020-09-18 12:12:12")

const incomingdata = axios
    .post(
      "https://devza.com/tests/tasks/create",
      students,

      {
        headers: {
          AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
          "Content-Type": "multipart/form-data",
        },
      }
    )

    .then(async (response) => {
      console.log(response.data);
      
    })}
    catch(error) {
      console.log(error);
    }}
    



 
 function handleClick() {
    navigate(`/`);
 }
 return (
  <>
   <Box textAlign="center" p={2} className={classes.headingColor} mb={2}>
    <Typography variant="h4">Task Manager</Typography>
   </Box>

   <Grid container justifyContent="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
      <Typography variant="h5">Edit Task</Typography>
     </Box>
     {students.assigned_name}
     <form>
      <Grid container spacing={2}>
       <Grid item xs={12} sm={2}>
        <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="ID" autoFocus value={id} disabled />
       </Grid>
       <Grid item xs={12} sm={10}>
        <TextField autoComplete="message" name="message" variant="outlined" required fullWidth id="message" label="Message" value={students.message} onChange={(e) => onTextFieldChange(e)} />
       </Grid>
       <Grid item xs={6}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Assign To</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    name="assigned_name"
                    label="person"
                    value={students.assigned_name}
                    onChange={(e) => onTextFieldChange(e)}
                    >
                    <MenuItem value="0">Select</MenuItem>
                    {user.map((data) => (
                      <MenuItem key={data.id} value={data.id}>
                        {data.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Priority</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    name="priority"
                    value={students.priority}
                    label="Priority"
                    onChange={(e) => onTextFieldChange(e)}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={1}>Low</MenuItem>
                    <MenuItem value={2}>Medium</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={12} xs={12} justifyContent="center">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    name="date"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                  />
                </LocalizationProvider>
              </Grid>
      </Grid>
      <Box m={3}>
       <Button type="button" variant="contained" color="primary" fullWidth onClick={(e) => onFormSubmit(e)} > Update </Button>
      </Box>
     </form>
     <Box m={3} textAlign="center">
      <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
     </Box>
    </Grid>
   </Grid >
  </>
 )
}

export default Edit;