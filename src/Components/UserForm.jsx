import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

function UserForm( {} ) {
  
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div className="modal-body">
        <h5>Popover in a modal</h5>
          <p>This <a href="#" role="button" className="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
          <hr/>
      <h5>Tooltips in a modal</h5>
    <p><a href="#" className="tooltip-test" title="Tooltip">This link</a> and <a href="#" className="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
    </div>
  )
}

export default UserForm;