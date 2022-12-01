import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "reactstrap";
import {
  registerUser,
  apiError,
  registerUserFailed,
} from "../../store/actions";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { connect } from "react-redux";
import MetaTagComp from "../../components/Common/MetaTags";
import Individual from "./Individual/Index";
import Company from "./Company/Company";

const PropertyManagement = () => {
  const [toggle, setToggle] = useState("");

  const Individual_toggleFunc = (e, v) => {
    setToggle(v);
  };

  return (
    <React.Fragment>
      <MetaTagComp meta_tags="FASPRO 24 | Property Manager" />
      <div className="account-pages">
        <Row className="justify-content-center">
          <Col md={12} lg={12} xl={12}>
            <div className="property-content-container mt-3">
              <Card className="overflow-hidden">

                {/* <div className="d-md-flex">
                  <FormControlLabel
                    control={<Switch />}
                    label={toggle ? "Company" : "Switch to Company Option"}
                    color="#67b32e"
                    size="large"
                    style={{ marginLeft: "10em" }}
                    onChange={Individual_toggleFunc}
                  />
                </div>

                {toggle ? <Company /> : <Individual />} */}
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

PropertyManagement.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
};

const mapStatetoProps = (state) => {
  const { user, registrationError, loading } = state.Account;
  return { user, registrationError, loading };
};

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(PropertyManagement);
