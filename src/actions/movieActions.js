import * as ActionTypes from './moviesTypes';

export const addComment = (text, profilePicture) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    text: text,
    picture: profilePicture,
  }
})