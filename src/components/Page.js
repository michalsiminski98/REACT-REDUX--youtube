import { Route, Switch } from "react-router";

import Menu from "../pages/Menu";
import Movie from "../pages/Movie";


const Page = () => {
  return ( 
      <Switch>
        <Route exact path="/" component ={Menu}/>
        <Route path="/watch/:name/:author" component ={Movie}/>
    </Switch>
   );
}
 
export default Page;