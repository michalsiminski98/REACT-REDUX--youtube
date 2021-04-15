import * as ActionTypes from "../actions/profileTypes";

const INITIAL_STATE = {
  profile:{
      name: "",
      picture: "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
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