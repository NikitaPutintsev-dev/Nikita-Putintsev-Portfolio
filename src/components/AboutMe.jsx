import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { mainInfo } from "../config";

// #region styled-components
const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;
// #endregion

// #region component
const propTypes = {
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  moreInfo: PropTypes.string,
};

const AboutMe = ({ avatar_url, bio, moreInfo }) => {
  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Обо мне"} />
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-left">
              <Container>
                {mainInfo && <p>{mainInfo}</p>}
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <Container>
                <img
                  src={avatar_url}
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle border border-primary-subtle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                {bio && <p className="mt-3">{bio}</p>}
              </Container>
            </Col>
          </Row>
        </Container>
      </StyledAboutMe>
    </Element>
  );
};

AboutMe.propTypes = propTypes;
// #endregion

export default AboutMe;
