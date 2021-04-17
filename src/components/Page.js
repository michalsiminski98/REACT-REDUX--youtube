import { Route, Switch } from "react-router";

import Menu from "../pages/Menu";
import Movie from "../pages/Movie";
import Profile from "../pages/Profile";


const Page = ({SetIsLightMode, isLightMode}) => {

  return ( 
    <Switch>
      <Route exact path="/">
        <Menu
        SetIsLightMode={SetIsLightMode}
        isLightMode={isLightMode}
        />
      </Route>
      <Route path="/watch/:name/:author&output=embed">
        <Movie/>
      </Route>
      <Route path="/profile" component={Profile}/>
    </Switch>
   );
}
 
export default Page;