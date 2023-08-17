import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";
import './App.css'

function App() {

  const [user, setUser] = useState({
    name: '',
    animal: ''
  })

  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.trim().length > 3 && user.animal.length > 6){
      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <div className="App">
      <h2>Elige tu animal favorito</h2>
      <Form setUser={setUser} handleSubmit={handleSubmit}/>
      {error && <p className="error">Por favor chequea que la información sea correcta</p> }
      {show && <Card user={user}/> }
    </div>
  );
}

export default App;