import { configureStore } from '@reduxjs/toolkit';
import user from './slices/usersSlice.slice';

export default configureStore({
  reducer: {
  // Esta propiedad se puede llamar distinto, la variable es la que importe de slices.
  // Todos los slices que se generen van dentro de este reducer.
    user : user, // Objeto literal: podemos acortar esta propiedad sólo con: { user }
	}
})