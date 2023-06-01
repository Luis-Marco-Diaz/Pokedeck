const UsersList = ( { usersList } ) => {
  return (
    <div className="general-users">
      <h1>Users</h1>
      <div className="user-card">
        <ul>
          {
            usersList?.map( user => (
              <li key={user.id} >
                <h3> {user.first_name} </h3>
                <h4> {user.last_name} </h4>
                <h4> {user.birthday} </h4>
                <img src= {user.image} alt="User Image" />
                <button>Hola</button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default UsersList;