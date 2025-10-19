import React from "react";
import { manualProjects } from "../keyses";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useGetProjectsQuery } from "../app/apiSlice";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import Loading from "./Loading";

const Keyses = () => {
  const theme = useSelector(selectMode);
  const projects = manualProjects;
  const { isLoading, isSuccess, isError, error } = useGetProjectsQuery();
  let content;

  if (isLoading) {
    content = (
      <Container className="d-flex">
        <Loading />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        {projects.length === 0 && (
          <h2 className="text-center">
            Oops, you do not have any GitHub projects yet...
          </h2>
        )}

        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {projects.slice(0, 3).map((p) => (
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
                All Projects
              </Button>
            </Link>
          </Container>
        )}
      </>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex align-items-center justify-content-center">
        <h2>{`${error.status} - check getProjects query in src/app/apiSlice.js`}</h2>
      </Container>
    );
  }

  return (
    <Element name="Projects" id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size="h2" text="Проекты" />
          </Container>
          {content}
        </Container>
      </section>
    </Element>
  );
};

export default Keyses;
