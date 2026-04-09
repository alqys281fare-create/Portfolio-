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
import pg8 from "../assets/projects/p8.png";
import pg9 from "../assets/projects/p9.png";
import pg12 from "../assets/projects/p12.png";
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
          
          <Col xl ={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg8}
              isBlog={false}
              title="Malaria Detection Using CNN"
              description="A Convolutional Neural Network (CNN) model that classifies blood cell images as infected or uninfected with malaria, enabling faster and automated diagnosis."
               ghLink="https://github.com/alqys281fare-create/Malaria-CNN/blob/main/MalariaCNN.ipynb"
            />
          </Col>

          <Col xl={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg9}
              isBlog={false}
              title="U_Net-For-Breast-Cancer-Segmentation"
              description={`This project develops a deep learning model for multi-class segmentation of breast ultrasound images into normal, benign, and malignant regions. Images are preprocessed and augmented to improve model robustness and generalization.
          
          An improved U-Net architecture with batch normalization and dropout is used to accurately capture spatial features.
          
          The model is trained using the Adam optimizer and evaluated using metrics such as Dice score and Mean IoU. The system can predict and visualize segmentation masks, helping analyze results and support medical diagnosis.`}
              ghLink="https://github.com/alqys281fare-create/U_Net-For-Breast-Cancer-Segmentation/blob/main/notebook36ad57c864.ipynb"
            />
          </Col>

           <Col xl={4} md={6} sm={6} className="project-card">
            <ProjectCard
              imgPath={pg12}
              isBlog={false}
              title="Custom U_Net For Tumor Brain Segmentation"
              description={`This project focuses on developing a deep learning model for brain tumor segmentation from 2D CT/MRI scans. The dataset is carefully preprocessed and enhanced using advanced data augmentation techniques to improve generalization and robustness.
              A customized U-Net architecture is implemented, incorporating Batch Normalization and Dropout layers to enhance feature extraction and reduce overfitting.
              The model is trained using the Adam optimizer and evaluated with segmentation metrics such as Dice Coefficient and Mean IoU to ensure high performance.
              The system is capable of generating accurate segmentation masks, enabling clear visualization of tumor regions and supporting medical image analysis.`}
              ghLink="https://github.com/alqys281fare-create/U_Net-For-Brain-Tumor-Segmentation/blob/main/BrainTumor_CAR_Attentication_U_Net.ipynb"
            />
          </Col>
          

          



         

        </Row>
      </Container>
    </Container>
  )
}

export default Projects
