import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserForm from './Components/UserForm';
import UsersList from './Components/UsersList';

function App() {
  
  const [ usersList, setUserList ] = useState( [] );

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://users-crud.academlo.tech/users/3328/")
      .then((resp) => setUserList(resp.data)) 
      .catch((error) => console.error(error));
  };
 
  return (
    <div className="App">
     <h1>Users CRUD</h1>
     <UsersList 
      userList = {usersList}
      />
    </div>
  );
}

export default App;
