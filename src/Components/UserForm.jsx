import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function UserForm( {addUser, editUser} ) {
  
  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
		console.log(data)
    reset(defaultValues); 
    }
  const defaultValues = {email: "", password: ""}

  return (
    <div>
      <div className="modal-body">
        <h5>Popover in a modal</h5>
         <form onSubmit={handleSubmit(submit)}>
          <div>
            <label htmlFor="name">Nombre</label>
              <input 
              type="text" 
              id="name" 
                { ...register( "name" ) }
                />
          </div>
          <div>
						<label htmlFor='email-input'>Email</label>
						<input 
            type='email' 
            id='email-input' {...register("email")} 
            />
				  </div>
			  	<div>
						<label htmlFor='password-input'>Password</label>
						<input 
            type='password' 
            id='password-input' {...register("password")}
            />
				  </div>

		     </form>
          <p>This <a href="#" role="button" className="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
          <hr/>
      <h5>Tooltips in a modal</h5>
    <p><a href="#" className="tooltip-test" title="Tooltip">This link</a> and <a href="#" className="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
    </div>
  )
}

export default UserForm;