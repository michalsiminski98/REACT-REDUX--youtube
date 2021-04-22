import { Route, Switch } from "react-router";

import Menu from "../pages/Menu";
import Movie from "../pages/Movie";
import Profile from "../pages/Profile";


const Page = ({SetTheme, theme}) => {

  return ( 
    <Switch>
      <Route exact path="/">
        <Menu
        SetTheme={SetTheme}
        theme={theme}
        />
      </Route>
      <Route path="/watch/:name/:author" component={Movie}>
      </Route>
      <Route path="/profile" component={Profile}/>
    </Switch>
   );
}
 
export default Page;