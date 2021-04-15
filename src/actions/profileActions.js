import * as ActionTypes from './profileTypes';

export const addToCart = (profileName, profilePicture) => ({
  type: ActionTypes.ADD,
  payload: {
    name: profileName,
    picture: profilePicture,
  }
})