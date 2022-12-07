import React from "react"
import "./Style.scss";
import { Row } from "reactstrap";
import { Link } from "react-router-dom";
import { AvForm } from "availity-reactstrap-validation"
import FormInput1 from "./components/FormInput1";
import FormInput2 from "./components/FormInput2";
import FormInput3 from "./components/FormInput3";
import MetaTagComp from "components/MetaTag";
import { RegisterPage } from "components/SCO_Name";
import LoginRightLabel from "./components/LoginRightLabel";
import FromWraper from "./components/FromWraper";
import usePost from "hooks/usePost";
import CustomBtn from "components/CustomBtn";
import { RegisterMsg } from "components/NotifyMessage";

const Register = () => {

  const [profilePic, setProfilePic] = React.useState(null);
  const { execute, pending, data } = usePost()

  console.log("selectedFile : ", profilePic)

  const handleValidSubmit = (e, values) => {
    e.preventDefault();
    const Method = 'POST', endPoint = 'users/signUp';

    const raw = JSON.stringify({
      "firstName": values.firstName,
      "lastName": values.lastName,
      "phoneNumber": values.phoneNumber,
      "agreed": values.agreed[0],
      "email": values.email,
      "address": values.address,
      "areaCode": values.areaCode,
      "companyName": values.companyName,
      "jobTitle": values.jobTitle,
      "city": values.city,
      "province": values.province,
      "postalCode": values.postalCode,
      "referralCode": values.referralCode,
      "accountNumber": values.accountNumber,
      "bankName": values.bankName,
      "accountType": values.accountType,
      "blackListed": values.blackListed[0],
      "passportPhoto": "",
      "photoProfile": "",
      "password": values.password,
      "passwordConfirm": values.passwordConfirm,
      "role": "user",
    });

    execute(endPoint, raw, Method, RegisterMsg)
  }

  return (
    <React.Fragment>
      <MetaTagComp title_sco={RegisterPage} />

      <Row className="">
        {/* <LoginRightLabel text="" size={4} /> */}
        {
          data?.status === 'success' ?
            (<FromWraper>
              <p className="text-primary">  We sent you a link to your mailbox, verify your email to continue </p>
              You did not received it ? <Link onClick={() => location.reload()} className='text-primary'> Try again </Link>
            </FromWraper>)
            :
            (<FromWraper title="SignUp" size={12} >
              <AvForm className="mt-4" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
                <FormInput1 />
                <FormInput3 />
                <FormInput2 setProfilePic={setProfilePic} />

                <CustomBtn Pending={pending} btnName="Submit" />
              </AvForm>

              <div className="col-12 mt-5">
                Already have an account ? <Link to="/login" className='text-primary'> Login </Link>
              </div>
            </FromWraper>)
        }
      </Row>

    </React.Fragment>
  )
}

export default Register