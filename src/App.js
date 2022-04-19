import { Fragment, useState } from 'react';
import './App.css';
import Card from './components/Card/Card'
import Header from './components/Header/Header';
import Dogs from './components/Dogs/Dogs';

function App() {
  const [newName, setNewName] = useState('Barkavelli');
  const [newStatus, setNewStatus] = useState('The best dog walks are in the mornings along the beach. I just love the sand beneath my paws.');
 
  const editNameHandler = (dogData) => {
    const nameData = {
      ...dogData
    };
    console.log(nameData);
    if(nameData.name.trim().length === 0){
      setNewStatus(nameData.status);
      return;
    }

    if(nameData.status.trim().length === 0){
      setNewName(nameData.name);
      return;
    }
  }
  return (
    <Card>
      <Header onEditName={editNameHandler} 
      pname={newName}
      sstatus={newStatus}
      />
     <Dogs />
    </Card>
  );
}

export default App;
