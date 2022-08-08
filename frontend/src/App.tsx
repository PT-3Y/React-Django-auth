import React from "react";
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Link} from "react-router-dom";
// import { Login, Profile } from "./pages";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Routes } from "react-router";

const Home = () => {
  return (
    <>
    <h1 className="text-pink-700">
      Hello
    </h1>
    </>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <div>
            <Switch>
              <Route path="/login">
                <Login/>
                </Route>
                <Route path="/" >
                  <Home/>
                </Route>
                <Route path="/profile">
                  <Profile/>
                </Route>
              {/* <ProtectedRoute path="/profile" element={<Profile/>}/> */}
            </Switch>
          </div>
        </Router>
          {/* <Routes>
            <Route path="/login">
              <Login />
            </Route>
          </Routes> */}
      </PersistGate>
    </Provider >
  );
}