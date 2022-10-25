import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
} from 'mdb-react-ui-kit';
import "../../Assets/styles/Login.css"
import companyLogo from "../../Assets/Images/Logo/logo.png";
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm() {
    return (
        <div className='loginBody'>
            <MDBContainer className="my-5">

                <MDBCard>
                    <MDBRow className='g-0'>

                        <MDBCol md='6'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
                        </MDBCol>

                        <MDBCol md='6'>
                            <MDBCardBody className='d-flex flex-column'>

                                <div className='d-flex flex-row mt-2'>
                                    <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                    <Navbar.Brand as={Link} to="/"><img src={companyLogo} alt="iPhoneMax Inc. logo" /></Navbar.Brand>
                                </div>

                                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>

                                <MDBInput wrapperClass='mb-4' placeholder='Email address' id='formControlLg' type='email' size="lg" />
                                <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" />

                                <MDBBtn className="mb-5 px-5" color='dark' size='lg'>Login</MDBBtn>
                                <a className="small text-muted" href="#!">Forgot password?</a>
                                <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href='../SignUp' style={{ color: '#393f81' }}>Register here</a></p>

                                <div className='d-flex flex-row justify-content-start'>
                                    <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                    <a href="#!" className="small text-muted">Privacy policy</a>
                                </div>

                            </MDBCardBody>
                        </MDBCol>

                    </MDBRow>
                </MDBCard>
            </MDBContainer>
        </div >
    );
}

export default LoginForm;
