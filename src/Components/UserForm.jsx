
import { useForm }from 'react-hook-form'

function UserForm({ addUser }) {

    const { register, handleSubmit } = useForm()

    const submit = data => {
        addUser( data )
        console.log(data())
    }

    return (
        <form onSubmit={ handleSubmit( submit ) } >
            <h2>New User</h2>
            <div className="input-wrapper">
                <label htmlFor="name">First Name</label>
                <input 
                type="text" 
                id="first_name" 
                { ...register( "first_name" ) }
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="LastName">Last Name</label>
                <input 
                type="text" 
                id="last_name" 
                { ...register( "last_name" ) }
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                { ...register( "email" ) }
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                { ...register( "password" ) }
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="birthday">Birthday</label>
                <input 
                type="date" 
                id="birthday" 
                { ...register( "birthday" ) }
                />
            </div>

            <button type="submit"> Create new user </button>
        </form>
    );
}

export default UserForm;