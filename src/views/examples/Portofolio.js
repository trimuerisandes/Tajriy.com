import React from "react";

// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import MainSprint from "../index-sections/MainSprint";
import OurSercives from "../index-sections/OurSercives";
import MulaiBersama from "../index-sections/MulaiBersama";
import OurTechnologies from "../index-sections/OurTechnologies";
import OurClients from "../index-sections/OurClients";
import Bantuan from "../index-sections/Bantuan";
import Footer from "../index-sections/Footer";
import MainSprintWeb from "../index-sections/MainSprintWeb";
import MainWeb from "../index-sections/MainWeb";
import WhyUs from "../index-sections/WhyUs";
import PaketWeb from "../index-sections/PaketWeb";
import DarkFooter from "../../components/Footers/DarkFooter";
import TestimonialWeb from "../index-sections/TestimonialWeb";
import MainMobile from "../index-sections/MainMobile";
import AndroidIos from "../index-sections/AndroidIos";
import PaketMobile from "../index-sections/PaketMobile";
import PortofolioMobile from "../index-sections/PortofolioMobile";
import MainSprintPorto from "../index-sections/MainSprintPorto";
import CustomerSatisfaction from "../index-sections/CustomerSatisfaction";
import Testimonials from "../index-sections/Testimonials";

function Portofolio() {
    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
        document.body.classList.add("portofolio");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("portofolio");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);
    return (
        <>
            <ExamplesNavbar/>
            <div className="wrapper">
                <div className="main">
                    <MainSprintPorto/>
                    <CustomerSatisfaction/>
                    <Testimonials/>
                    <OurClients/>
                    <TestimonialWeb/>
                    <Footer/>
                </div>

                <DarkFooter/>
            </div>
        </>
    );
}

export default Portofolio;
