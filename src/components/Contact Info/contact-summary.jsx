import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SupportTitle = styled.span`
  color: #afaeac;
  text-transform: uppercase;
  margin: 0.5rem;
  font-weight: 500;
`;

const SupportContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SupportIconWrapper = styled.div`
  background: #ffcf24;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
  width: 3rem;
  height: 3rem;
  margin: 0.5rem;
  color: #3e3d3c;
`;

const SupportName = styled.div`
  display: flex;
  color: #626160;
  font-weight: bold;
  margin-bottom: 0.2rem;
  margin-left: 0.5rem;
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextWrapper = styled.section`
  align-items: flex-start;
  flex-direction: column;
`;

const EmailIcon = styled.span`
  margin-right: 0.5rem;
`;

const SupportDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  color: #7f7e7a;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const SupportContact = ({ email, name, phone }) => (
  <div>
    <SupportTitle>Your Feefo Support Contact</SupportTitle>
    <SupportContainer>
      <SupportIconWrapper>{name ? name[0] : "-"}</SupportIconWrapper>
      <TextWrapper>
        <SupportName>{name ? name : ""}</SupportName>
        <SupportDetails>
          {email && (
            <div>
              <EmailIcon>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="false"
                  aria-label="email"
                />
              </EmailIcon>
              {email}
            </div>
          )}
          {phone ? phone : ""}
        </SupportDetails>
      </TextWrapper>
    </SupportContainer>
  </div>
);

SupportContact.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default SupportContact;
