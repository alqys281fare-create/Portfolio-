import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg1 from "../assets/projects/p1.png";
import pg2 from "../assets/projects/p2.png";
import pg3 from "../assets/projects/p3.png";
import pg4 from "../assets/projects/p4.png";
import pg5 from "../assets/projects/p5.png";
import pg6 from "../assets/projects/p6.png";
import pg7 from "../assets/projects/p7.png";
import { SiMaterialdesign } from "react-icons/si";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col xl ={4} md={6} sm={6}  className="project-card">
            <ProjectCard
              imgPath={pg1}
              isBlog={false}
              title="ITI Portal"
              description="An interactive platform designed to connect ITI students and alumni, enabling them to highlight their skills, build professional networks, and explore career opportunities. Technologies Used: Laravel, React.js, ShadCN UI components, MySQL"
              ghLink="https://github.com/iti-portal"
            />
          </Col>
           <Col xl ={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg2}
              isBlog={false}
              title="Health Tracking System"
              description="A comprehensive platform that enables users to log and monitor their health
                information, such as symptoms, medical checkups, and prescriptions.
                Supports secure and temporary data sharing with healthcare providers, with
                real-time access control and the ability to revoke permissions instantly.
                Technologies Used: Node.js, Angular, PrimeNG, MongoDB"
              ghLink="https://github.com/IbrahimSalama01/Health_Tracking_System"
            />
          </Col>



           <Col xl ={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg3}
              isBlog={false}
              title="Hotel Management System"
              description="
                Streamlines hotel operations with full control over rooms, floors, bookings, and
                role-specific access for Admins, Managers, Receptionists, and Clients.Includes
                advanced capabilities such as personalized dashboards per user role, real-time
                CRUD operations, integrated Stripe payments, and automated email
                notifications"
              ghLink="https://github.com/Ahmed-Elimam/hotel-system"
            />
          </Col>

          <Col xl ={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg4}
              isBlog={false}
              title="Crowdfunding Platform"
              description="
                A dedicated platform for users in Egypt to create, manage, and support
                fundraising campaigns.including email-based user authentication, project setup
                and management,campaign ratings, user comments, and an engaging homepage
                that highlights top-performing projects.Inspired by the GoFundMe model.
                Technologies: Python and Django"
              ghLink="https://github.com/AhmedZahran15/crowd-funding"
            />
          </Col>

          <Col xl ={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg5}
              isBlog={false}
              title="Database Managment System (bash)"
              description="
                Designed and implemented a DBMS Command-Line Interface for streamlined
                database management with customizable settings.
                Supported record insertion, updates, and deletions, with seamless integration
                into the file system to ensure easy access and portability"
              ghLink=""
            />
          </Col>

          <Col xl ={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg6}
              isBlog={false}
              title="Landing Page"
              description="simple landing page for MeetUS AR company for testing"
              ghLink="https://github.com/mohamedragab2000/MeetUSAR-LoginPageTest"
            />
          </Col>

          <Col xl ={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg7}
              isBlog={false}
              title="E-commerce"
              description="This project is a RESTful e-commerce API built with Laravel, using Laravel Sanctum for authentication, Spatie Media Library for product image management, and Spatie Translatable to support Arabic and English content. The API provides core features including user authentication, product listing with multilingual data, cart management, and order creation from cart items with automatic checkout processing"
              ghLink="https://github.com/mohammedragabali5-blip/Ecommerce-Project"
            />
          </Col>

          



         

        </Row>
      </Container>
    </Container>
  )
}

export default Projects