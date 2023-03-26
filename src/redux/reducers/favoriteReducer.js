export default function favoriteReducer(state = [], action) {
    switch(action.type) {
      case "CREATE_FAVORITE":
        // console.log("Entro al reduce", "STATE:", state, "ACTION", action);
        return [...state, { ...action.favorite }];

      case "DELETE_FAVORITE":
        // console.log("Entro al reduce", "STATE:", state, "ACTION", action);
        // console.log("action.favorite:"+action.favorite);
        return state.filter(item => item.id !== action.favorite); 

      default:
        return state;
    }
  }