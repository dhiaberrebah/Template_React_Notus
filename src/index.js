import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "assets/styles/tailwind.css"

// layouts
import Admin from "layouts/Admin.js"
import Auth from "layouts/Auth.js"

// views without layouts
import HowItWorks from "views/HowItWorks"
import Profile from "views/Profile.js"
import Index from "views/Index.js"
import ProjectList from "views/Projectlist.js"
import ProjectDetails from "views/ProjectDetails.js"
import CreateProject from "views/CreateProject.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />

      {/* add routes without layouts */}
      <Route path="/" exact component={Index} />
      <Route path="/projects" exact component={ProjectList} />
      <Route path="/projects/:id" component={ProjectDetails} />
      <Route path="/create-project" component={CreateProject} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/how-it-works" component={HowItWorks} />

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root"),
)

