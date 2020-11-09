import uuid from 'uuid'
export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
  console.log(`actionnnn`,action)
      //let band={
        ///id: uuid(),
      //  bandName: action.name
      //}
      const band ={
         id: uuid() ,
         name: action.name

       }

      //return { bands: state.bands.concat(band) };
      
      //const band = Object.assign({}, action.name, { id:  uuid() });
      //return { bands: state.bands.concat(band) };


      return { ...state, bands: [...state.bands, band] };
   
      case 'DELETE_BAND':
       
        return { ...state,bands:[ ...state.bands.filter(band=> band.id !== action.id)]}

    default:
      return state;
  }
};
