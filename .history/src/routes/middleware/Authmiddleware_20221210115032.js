import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { useStore1Selector } from "./../../index";
import { loginUser } from "../../Redux/Slices/userSlice";

const Authmiddleware = ({ component: Component, layout: Layout, isAuthProtected, ...rest }) => {

  const userDet = useStore1Selector(loginUser)
  const token = userDet?.status === 'success' ? true : false
  console.log(token)

  return (
    <Route {...rest}
      render={props => {
        if (isAuthProtected && !token) {
          return (
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
        }

        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      }}
    />
  )
}

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
}

export default Authmiddleware
