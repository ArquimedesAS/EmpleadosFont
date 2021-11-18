import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../auth/privateroute";
import Login from "../login/login";
import Empleados from "../empleados/empleados.buscar";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route exact path={["/empleados"]} component={Empleados} />
        {/* Ruta de páginas que no existen, error 404 */}
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Pagina no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
