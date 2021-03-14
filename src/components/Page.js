import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../pages/Menu";
import Movie from "../pages/Movie";


const Page = () => {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route path="/movie">
          <Movie />
        </Route>
    </Switch>
  </Router>
   );
}
 
export default Page;