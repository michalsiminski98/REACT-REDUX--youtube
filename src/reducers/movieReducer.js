import * as ActionTypes from "../actions/moviesTypes";

const INITIAL_STATE = {
  movies: [

      {id: 1,
        name: 'Capybara Island!',
        author:"Jarvan Darius",
        img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 ,
        movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},

      {id: 2, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 3, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 4, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 5, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 6, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 7, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 8, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 9, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 10, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 11, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 12, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 13, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 14, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 15, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 16, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 17, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 18, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 19, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 20, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 21, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 22, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
      {id: 23, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo",},
  ]
}
const movieReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ActionTypes.ADD_COMMENT:
      return{
        movie:  
        {text: action.payload.text,
        picture: action.payload.picture}
      }
      default:
        return state;
    }
}

export default movieReducer;