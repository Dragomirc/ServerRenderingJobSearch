import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import { renderRoutes } from "react-router-config";
import routes from "../../client/routes";

export default (req, store, context) => {
  console.log("Routes", renderRoutes(routes));
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        {renderRoutes(routes)}
        {/* <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <C {...props} {...rest} />}
            />
          ))}
        </Switch> */}
      </StaticRouter>
    </Provider>
  );

  return `
   <html>
        <head>
        </head>
        <body>
          <div id="root">${content}</div>
         <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
          <script src="bundle.js"></script>
        </body>
    </html>     
  `;
};
