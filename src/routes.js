import React, { Suspense } from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

import { LoginContainer } from "./container/LoginContext";
import PageLayout from "./pages/PageLayout";
import Loading from "./components/Loading";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (auth ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

function RouteProtected({ children, ...props }) {
  const { token } = LoginContainer.useContainer();

  return (
    <Route
      {...props}
      render={() => {
        if (token) {
          return children;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}

const HomeLazy = React.lazy(() => import("./pages/Home"));
const CustomersLazy = React.lazy(() => import("./pages/Customers"));
const ChargesLazy = React.lazy(() => import("./pages/Charges"));
const AddCustomerLazy = React.lazy(() => import("./pages/AddCustomer"));
const AddChargeLazy = React.lazy(() => import("./pages/AddCharge"));
const EditCustomerLazy = React.lazy(() => import("./pages/EditCustomer"));

export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <RouteProtected>
          <Route exact path="/home" component={HomeLazy} />
          <Route exact path="/customers" component={CustomersLazy} />
          <Route path={"/customers/:id(\\d+)"} component={EditCustomerLazy} />
          <Route path="/customers/add" component={AddCustomerLazy} />
          <Route exact path="/charges" component={ChargesLazy} />
          <Route path="/charges/add" component={AddChargeLazy} />
        </RouteProtected>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}
