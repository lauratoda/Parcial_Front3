function Card({user}) {
  
    return (
      <div className="card">
        <h2>Hola {user.name}</h2>
        <h4>Tu animal favorito es: </h4>
        <h3 className="favorite">{user.animal}</h3>
      </div>
    );
  }
  
  export default Card;
  