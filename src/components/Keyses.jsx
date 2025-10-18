import React from "react";
import { manualProjects } from "../keyses";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";

const Keyses = () => {
  const projects = manualProjects;

  return (
    <Element name="Projects" id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size="h2" text="Проекты" />
          </Container>

          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            {projects.map((p) => (
              <Col key={p.id}>
                <ProjectCard
                  image={p.image}
                  name={p.name}
                  description={p.description}
                  url={p.url}
                  demo={p.demo}
                />
              </Col>
            ))}
          </Row>
           {projects.length > 3 && (
              <Container className="text-center mt-5">
                <Link to="/All-Projects">
                  <Button
                    size="lg"
                    variant={
                      theme === "light" ? "outline-dark" : "outline-light"
                    }
                  >
                    All <Icon icon="icomoon-free:github" /> Projects
                  </Button>
                </Link>
              </Container>
            )}
        </Container>
      </section>
    </Element>
  );
};

export default Keyses;
