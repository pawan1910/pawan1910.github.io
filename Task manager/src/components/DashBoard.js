import React from "react";
import { useState, useEffect } from "react";
import "./DashBoard.css"
import List from "./api/List";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import axios from "axios";
import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";
import { getAllUsersLists } from "./api/api";

const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});


const DashBoard = () => {
  const Classes = useStyles();
  const classes = useStyles();
  const [user, setUser] = useState([]);
  const [date, setDate] = useState();
  const [status, setStatus] = useState();
  const [student, setStudent] = useState({
    message: "",
    person: [],
    priority: "",
    date: "",
  });

  function onTextFieldChange(e) {
     
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  

  // API to get Name List
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const data = await getAllUsersLists();
    // console.log(data.data.users);

    setUser(data.data.users);
  };

  // const id= (e) => {
  //   alert (e.target.value)
  // }

  // const newValue=(e) => {
  //   setDate(e.target.value);
  // }
// console.log("date value",Date)


  // API to add in list
  var FormData = require("form-data");

  const onFormSubmit = (e) => {
    e.preventDefault();
    // async () => {
    try{
  const data = new FormData();
  data.append("message", student.message);
  data.append("assigned_to", student.person);
  data.append("priority", student.priority);
  data.append("due_date", student.due_date)

  const incomingdata = axios
      .post(
        "https://devza.com/tests/tasks/create",
        data,

        {
          headers: {
            AuthToken: "UrM4YHgb1FcqEf1tuKwmAMMX5MxFZ12a",
            "Content-Type": "multipart/form-data",
          },
        }
      )

      .then(async (response) => {
        console.log(response.data);
        setStatus(true);
      })}
      catch(error) {
        console.log(error);
      }}
  
      if (status) {
        return <DashBoard />
       }
  

  return (
    <div>
      <Box textAlign="center" className={Classes.headingColor} p={2} >
        <Typography variant="h4">Task Management App</Typography>
      </Box>
      <Grid container justifyContent="center" spacing={1} id="main" >
        <Grid item md={3} xs={12} >
          <Box textAlign="center" p={2} className={classes.addStuColor} my={2}>
            <Typography variant="h5">New Task</Typography>
          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="message"
                  name="message"
                  variant="outlined"
                  required
                  fullWidth
                  id="message"
                  label="Message"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">Assign To</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    name="person"
                    label="person"
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
              <Grid item md={12} xs={12} p={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    name="date"
                    value={date}
                    onChange={(newValue) => {
                      setDate(newValue);
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid>

        <Grid item md={9} xs={12}>
          <List />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashBoard;
