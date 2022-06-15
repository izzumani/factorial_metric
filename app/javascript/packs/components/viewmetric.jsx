import React from "react";
import {Container,Typography} from "@material-ui/core";
import ViewTimelines from "./viewtimelines"
// import AddNewTodo from "./Components/addnewtodo";
// import TodoList from "./Components/todolist";
// import TodoListContextProvider from "./Context/todolistcontext";


const ViewMetrics = ()=> {
  
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom>
        View Metrics
      </Typography>
      <ViewTimelines/>
     
    </Container>
  );
}

export default ViewMetrics;
