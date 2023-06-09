import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
		name: 'user', // nombre para identificar al slice
    initialState: "Entrenador", // Primer valor que tendrá el slice, puede ser cualquier dato
    reducers: {
      // Acciones que van a modificar el estado, podemos tener diferentes funciones = Acciones
      // Aquí va a recibir el valor del input del Home
          setname: (state , action) => {
            return action.payload
            },
      /*
        actionName : currentValueState => {
            return newValue
            }
      */
      /*
            if( state > 0 ){
                return state - 1
            }else{
                return 0
            }
      */  
    }
})

export const { setname } = usersSlice.actions;

export default usersSlice.reducer;