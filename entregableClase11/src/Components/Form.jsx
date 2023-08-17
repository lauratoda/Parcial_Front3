import React from 'react'

const Form = ({setUser, handleSubmit}) => {

    const handleChange = (event) => {
        setUser((prevUser) => {
            return {
                ...prevUser,
                [event.target.name]: event.target.value
            }
     })
    }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input name='name' placeholder= "Ingresa tu nombre" type="text" onChange={handleChange}/>
        <input name='animal' placeholder= "Ingresa tu animal favorito" type="text" onChange={handleChange}/>
      </div>        
        <button>Enviar</button>
    </form>
  )
}

export default Form