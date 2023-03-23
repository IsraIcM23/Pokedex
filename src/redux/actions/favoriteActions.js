export function AddFavorite(favorite) {
    // console.log("Entro al Action", favorite)
    return  { type: "CREATE_FAVORITE", favorite };
  }
  
  export function DeleteFavorite(favorite) {
    return  { type: "DELETE_FAVORITE", favorite };
  }
  