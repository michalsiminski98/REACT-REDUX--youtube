import * as ActionTypes from "../actions/profileTypes";

const INITIAL_STATE = {
  profile:{
      name: "",
      picture: "https://esportnow.pl/wp-content/uploads/2017/09/profile.png",
    },
}

const profileReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ActionTypes.ADD:
      return{
        profile:  
        {name: action.payload.name,
        picture: action.payload.picture}
      }
      default:
        return state;
    }
}

export default profileReducer;