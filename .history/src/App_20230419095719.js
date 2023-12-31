import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { Switch, BrowserRouter as Router, useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { userRoutes, authRoutes } from "./routes/allRoutes"
import Authmiddleware from "./routes/middleware/Authmiddleware"
import VerticalLayout from "./components/VerticalLayout/"
import HorizontalLayout from "./components/HorizontalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"
import "./assets/scss/theme.scss"
import fakeBackend from "./helpers/AuthType/fakeBackend"
fakeBackend()

import AOS from "aos"
import "aos/dist/aos.css"

import useFetch from "hooks/useFecth";
import { loginUser } from "Redux/Slices/userSlice";
import { useStore1Dispatch, useStore1Selector } from 'index'

const App = props => {

  const userDet = useStore1Selector(loginUser);
  const dispatch = useStore1Dispatch();
  const token = userDet?.token;
  const history = useHistory()
  const { error } = useFetch(`${process.env.REACT_APP_BACKEND_URL}/users/logout`, token);

  useEffect(() => {
    if (error?.status === 401) {
      dispatch(Login(""));
      history.push('/login');
    }
  }, [error, history]);



  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
    AOS.refresh()
  }, [])

  function getLayout() {
    let layoutCls = VerticalLayout
    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout
        break
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }

  const Layout = getLayout()
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>
      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
