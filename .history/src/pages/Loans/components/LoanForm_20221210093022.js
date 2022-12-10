import React from 'react'
import Slider from "react-rangeslider"
import "react-rangeslider/lib/index.css"
import { Row, Col, CardBody, Card, Button } from 'reactstrap';
import { FcAddImage } from 'react-icons/fc';

function LoanForm() {

    const [amount, setAmount] = React.useState(100)
    const [days, setDays] = React.useState(5)
    const percentage = days <= 15 ? 22.5 : 40;
    const Total_pay_back = amount * percentage / 100 * 10

    const refFileUpload = React.useRef(null);
    const [profileServer, setProfileServer] = React.useState();
    const [profile, setProfile] = React.useState();

    const onThumbChangeClick = () => {
        if (refFileUpload) {
            refFileUpload.current.dispatchEvent(new MouseEvent('click'));
        }
    };
    const changeThumb = (event) => {
        if (event.target.files && event.target.files[0]) {
            setProfileServer(event.target.files[0]);

            const reader = new FileReader();
            reader.onload = (loadEvent) => {
                setProfile(loadEvent.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    return (
        <>
            <Row>
                <Col md={6}>
                    <Card>
                        <div className="p-3">
                            <h4 className="font-size-14 mb-3 mt-0">Amount</h4>
                            <span className="float-start mt-4">R100</span>
                            <span className="float-end  mt-4">R1000</span>
                            <Slider
                                value={amount}
                                min={100}
                                max={1000}
                                orientation="horizontal"
                                onChange={value => { setAmount(value) }}
                            />
                        </div>
                        <div className="p-3">
                            <h4 className="font-size-14 mb-3 mt-0">Number of days</h4>
                            <span className="float-start mt-4">5 Days </span>
                            <span className="float-end  mt-4">30 Days</span>
                            <Slider
                                value={days}
                                min={5}
                                max={30}
                                orientation="horizontal"
                                onChange={day => { setDays(day) }}
                            />
                        </div>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between p-3">
                                <p><b> 5 to 15 days = 22.5% </b></p>
                                <p><b> 16 to 31 days = 40%</b></p>
                            </div>
                            <div className="d-flex justify-content-between p-3">
                                <p><b> Total pay back </b></p>
                                <p> <b> R {Math.round(Total_pay_back)} </b>  </p>
                            </div>
                            <button className='btn text-white w-100'>Apply now</button>
                        </CardBody>
                    </Card>
                </Col>

                <Col md={6}>
                    <label>Upload your latest sleep</label>
                    <div className="d-flex justify-content-center align-items-center border">
                        <img src={profile === undefined ? Image : profile} alt="user" width={300} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClick}
                        > <FcAddImage size={60} />
                        </Button>
                        <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                    </div>
                </Col>

                <Col md={6}>
                    <label>Upload your latest sleep</label>
                    <div className="d-flex justify-content-center align-items-center border">
                        <img src={profile === undefined ? Image : profile} alt="user" width={300} height={200} />
                        <Button className="btn-icon btn-icon-only position-absolute"
                            onClick={onThumbChangeClick}
                        > <FcAddImage size={60} />
                        </Button>
                        <input type="file" ref={refFileUpload} className="file-upload d-none" accept="image/*" onChange={changeThumb} />
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default LoanForm