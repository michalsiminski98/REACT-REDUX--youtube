import * as ActionTypes from './profileTypes';

export const addProfile = (profileName, profilePicture) => ({
  type: ActionTypes.ADD,
  payload: {
    name: profileName,
    picture: profilePicture,
  }
})