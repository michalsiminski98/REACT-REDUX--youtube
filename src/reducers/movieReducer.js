import * as ActionTypes from "../actions/moviesTypes";

const INITIAL_STATE = {
  movies: [

      {id: 1,
        name: 'Capybara Island!',
        author:"Jarvan Darius",
        img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0",
        views: 133333,
        movie: "https://www.youtube.com/embed/wE6pEsjgdHo",
        comments:[
          {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
          {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
          {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],
      },

      {id: 2, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 3, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 4, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 5, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 6, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 7, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 8, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 9, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 10, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 11, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 12, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 13, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 14, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 15, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 16, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 17, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 18, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 19, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 20, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 21, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 22, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
      {id: 23, name: 'Capybara Island!', author:"Jarvan Darius", img: "https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEwMDk2Mn0", views: 133333 , movie: "https://www.youtube.com/embed/wE6pEsjgdHo", comments:[
        {id: 1, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "Cool"},
        {id: 2, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png", comment: "lorem"},
        {id: 3, picture: "https://www.pavilionweb.com/wp-content/uploads/2017/03/user-300x300.png", comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem adipisci laudantium neque nisi distinctio reprehenderit nemo dolorem quod aliquam. Nihil, repellat adipisci. Natus voluptates autem harum officia, minus sapiente quaerat?"},
        ],},
  ]
}
const movieReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case ActionTypes.ADD_COMMENT:
    // check movie that we're in
    const movie = state.movies.find(movie => movie.id === action.payload.id)
      return{
        // ...state,
        // movies: movie 
      }
      default:
        return state;
    }
}

export default movieReducer;