import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from '../components/Particle';
import pdf from "../assets/MyCV.pdf";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [error, setError] = useState(null);
  const [containerWidth, setContainerWidth] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      // Adjust container width based on screen size
      if (window.innerWidth < 576) {
        setContainerWidth(300);
      } else if (window.innerWidth < 768) {
        setContainerWidth(400);
      } else if (window.innerWidth < 992) {
        setContainerWidth(600);
      } else {
        setContainerWidth(800);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error) {
    console.error("Failed to load PDF:", error);
    setError("Failed to load PDF. Please try downloading instead.");
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />


        <Row className="resume">
          <Col xs={12} className="d-flex justify-content-center">
            {error ? (
              <div className="text-center text-danger">{error}</div>
            ) : (
              <div className="pdf-container" style={{ 
                maxHeight: '80vh', 
                overflowY: 'auto',
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
              }}>
                <Document
                  file={pdf}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  className="d-flex flex-column align-items-center"
                  loading={<div className="text-center">Loading PDF...</div>}
                >
                  {Array.from(new Array(numPages), (el, index) => (
                    <Page
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                      width={containerWidth}
                      renderTextLayer={true}
                      renderAnnotationLayer={true}
                      className="mb-3 pdf-page"
                      loading={<div className="text-center">Loading page {index + 1}...</div>}
                    />
                  ))}
                </Document>
              </div>
            )}
          </Col>
        </Row>

        {numPages > 1 && !error && (
          <Row style={{ justifyContent: "center", marginTop: "20px" }}>
            <Col xs={12} className="text-center">
              <p style={{ color: "#fff" }}>
                Showing {numPages} pages • Scroll to view all
              </p>
            </Col>
          </Row>
        )}

        {/* Optional: Add page navigation buttons */}
        <Row style={{ justifyContent: "center", marginTop: "10px" }}>
          <Col xs={12} className="text-center">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "200px", marginBottom: "20px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download PDF
            </Button>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .pdf-container {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        
        .pdf-container::-webkit-scrollbar {
          width: 10px;
        }
        
        .pdf-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .pdf-container::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        
        .pdf-container::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .pdf-page {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Resume;