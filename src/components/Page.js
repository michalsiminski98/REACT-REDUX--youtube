import { Route, Switch } from "react-router";

import Menu from "../pages/Menu";
import Movie from "../pages/Movie";
import Profile from "../pages/Profile";


const Page = () => {
  return ( 
    <Switch>
      <Route exact path="/" component ={Menu}/>
      <Route path="/watch/:name/:author" component ={Movie}/>
      <Route path="/profile" component={Profile}/>
    </Switch>
   );
}
 
export default Page;