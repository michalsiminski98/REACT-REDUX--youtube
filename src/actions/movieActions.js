import * as ActionTypes from './moviesTypes';

export const addComment = (MovieId, commentText, profilePicture) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    id: MovieId,
    text: commentText,
    picture: profilePicture,
  }
})