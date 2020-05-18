import React from 'react';
import {View, Button, Text, ScrollView,StyleSheet,  ImagePropTypes} from 'react-native';
import { TextInput, Input, CheckBox,ListItem} from 'react-native';

// let id = 0
const styles = StyleSheet.create({
  todo:{
    flexDirection:'row',
    alignItems:'center',
  },
  title: {
    paddingTop:20,
    marginTop: 50,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  margin:{
    paddingTop:20,
    marginTop: 50,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
  }
})
function Task(props) {
  
  console.log(props);
  console.log(props.status);
  return (
    <View style = {styles.todo}>
    <Text> {props.name}, {props.dueDate.toLocaleDateString()},{props.endDate.toLocaleDateString()}  </Text>
    <CheckBox title = 'ClickHere' value = {props.status}  onValueChange = {() => props.onChange()}/> 
   <Button value = "Delete" title="Delete" onPress = {() =>
      props.onDelete()}/>
 
 </View>
  )
}




export default class TodoList extends React.Component{

  constructor(){
    super();
    this.state = {list: [] };
    

    this.handleAddTask = this.handleAddTask.bind(this);
    // this.handleDeleteTask = this.handleDeleteTask.bind(this);
    // this.handleCheck = this.handleCheck.bind(this);
  }
    handleAddTask(task) {
    console.log("add task clicked");
    this.state.list.push(task);
    this.setState({list: this.state.list})
    
  }
  handleDeleteTask = (taskId) => {
  console.log('delete button clicked');
  const list = this.state.list.filter((t) => t.id !== taskId);
  this.setState({ list: list });
  
  };

  handleCheck = (taskId) => {
  console.log('checkbox clicked');
  console.log(taskId);
  let tmp = this.state.list;
  tmp[taskId].status = !tmp[taskId].status
  console.log(tmp)
  this.setState({
    list: tmp
  });
  //   list: this.state.list.map((task) => {
  //     if (task.id === taskId) {
  //       return {
  //         ...task,
  //         status: !task.status
  //       };
  //     } 
  //     return task;
      
  //   })
  // });
  
  };
  render() {
    return (
        <View>
            <Text style = {styles.title}>TODO List</Text>
            <ScrollView>
                {
                    this.state.list.map((t,index) =>
                        <Task key={t.id} name={t.name} dueDate={t.dueDate} endDate={t.endDate}                    
               onChange={() => this.handleCheck(index)}
              onDelete={() => this.handleDeleteTask(t.id)}
              status = {t.status} index ={index}
            />
                    )}

            </ScrollView>
            

            <TaskNameForm onAddTask={this.handleAddTask} />
        </View>
    );
}
}
class TaskNameForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      // create a task object
      event.preventDefault();
      const task = {id:Date.now(), name: this.state.value, 
      dueDate: new Date(Date.now()), endDate : new Date(Date.now()+(60*60*24*1000)),status : false};
      // add the task object to the task list
      this.props.onAddTask(task);
  }
  handleChange = (text) => {
    this.setState({ value: text })
  }

  

  render() {
      return(
          <View style={styles.margin}>
              <TextInput type="text" value={this.state.value}
          onChangeText={this.handleChange} placeholder="Write the task here.." />
        <Button  type="submit" title="Add Task" onPress={this.handleSubmit} />
      </View>
      );
  }
}