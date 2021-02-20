import React from "react";
// reactstrap components
import {Button, Container, Row, Col} from "reactstrap";

// core components

function Footer() {
    return (
        <>
            <div className=" section-story-overview bg-dark">
                <Container className="">
                    <div className="">
                        <Row className="section-well mt-5 bg-dark col-lg-12 ">
                            <Col className="col-lg-4 pr-5">
                                <div className="text-white">
                                        <Row>
                                            <div>
                                            <img
                                                className="img-fluid"
                                                src={require("assets/img/logo-white.png")}
                                                width="60"
                                            ></img>
                                            </div>
                                            <h2 className="font-weight-bold ml-3">Tajriy</h2>
                                        </Row>

                                    <h5 className="mt-3">Kota Pekanbaru <br/>
                                        Indonesia, 551525</h5>
                                    <h5>Senin - Jum'at (08:00-17:00 WIB)</h5>
                                </div>
                            </Col>
                            <Col className=" text-left">
                                <div>
                                    <h5 className="text-white font-weight-bold">Tentang Kami</h5>
                                    <div className="">
                                        <h5 className="text-white text-capitalize mt-4">Portofolio</h5>
                                        <h5 className="text-white text-capitalize">Blog</h5>
                                        <h5 className="text-capitalize text-white">Syarat dan Ketentuan</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col className="text-left ml-5">
                                <div>
                                    <h5 className="text-white font-weight-bold">Layanan</h5>
                                    <div className="text-justify">
                                        <h5 className="text-white mt-4">Sistem Informasi</h5>
                                        <h5 className="text-white">Aplikasi Mobile</h5>
                                        <h5 className="text-white">ERP</h5>
                                        <h5 className="text-white">Company Profile</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col className="text-left">
                                <div>
                                    <h5 className="text-white font-weight-bold">Marketing Info</h5>
                                    <h5 className="text-white mt-4">081314721408 (Tri)</h5>
                                    <h5 className="text-white">081314721408 (Aufa)</h5>
                                    <h5 className="text-white">081314721408 (Tama)</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

        </>
    );
}

export default Footer;
