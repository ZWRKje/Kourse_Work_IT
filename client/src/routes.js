import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { CostomTeaManager } from "./pages/mainPage";
import { AboutCreator } from "./pages/aPage";
import { Info } from "./pages/info";
import {SortPage} from "./pages/sortPage";
import { Change} from "./pages/change";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/AboutCreator" exact>
        <AboutCreator />
      </Route>
      <Route path="/CostomTeaManager" exact>
        <CostomTeaManager />
      </Route>
      <Route path="/Info" exact>
        <Info />
      </Route>
      <Route path="/Sortpage" exact>
        <SortPage />
      </Route>
      <Route path="/change"
        render= {
            props =>(
             <Change 
                {...props}
              />
           )}
     >  
      </Route>
      

      <Redirect to="/CostomTeaManager" />
    </Switch>
  );
};
