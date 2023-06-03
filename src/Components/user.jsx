import { useSelector, useDispatch } from 'react-redux';

const user = () => {
  
  const dispatch = useDispatch()

      // Accede al user del estado.
  const user = useSelector(state => state.user )

  return (
    <div>
       {/* Aquí va la acción del usuario que dispara el dispatch*/}
    </div>
  );
};

export default user;