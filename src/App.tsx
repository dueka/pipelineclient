import React from "react";
import { Route, Switch } from "react-router-dom";
import { UserHeader, UserMenu } from "./components";
import { ApolloProjects } from "./pages/projects";
import ScrollToTop from "./ScrollToTop";

import "./scss/main.scss";

// const query = gql`
//   query Candidates {
//     candidates @rest(type: "body", path: "/") {
//       body
//     }
//   }
// `;

// client.query({ query }).then((response) => {
//   // console.log(response.data.candidates);
// });

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <ScrollToTop>
        <UserMenu />
        <UserHeader />
        <Switch>
          <Route path="/" component={ApolloProjects} />
        </Switch>
      </ScrollToTop>
    </>
  );
};

export default App;
