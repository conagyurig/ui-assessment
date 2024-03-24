import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faUpload } from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const UploadIconWrapper = styled.div`
  color: #66cdf0;
`;

const Content = styled.div`
  display: flex;
`;

const SubTitle = styled.span`
  margin-left: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: #3e3d3c;
`;

const SalesDetails = styled.section`
  margin-top: 0.9rem;
  margin-bottom: 0.3rem;
  color: #7f7e7a;
  font-size: 0.9rem;
`;

const BoldText = styled.span`
  font-weight: 700;
  color: #626160;
`;

const SalesUploads = ({ uploads, linesAdded }) => {
  const uploadLabel = ` ${uploads} ${uploads === 1 ? "upload" : "uploads"} `;
  const lineLabel = ` ${linesAdded === 1 ? "line" : "lines"}`;
  return (
    <>
      <CardContainer>
        <Content>
          <UploadIconWrapper>
            <FontAwesomeIcon icon={faUpload} />
          </UploadIconWrapper>
          <SubTitle>Sales</SubTitle>
        </Content>
        <FontAwesomeIcon
          icon={faInfoCircle}
          color="#afaeac"
          aria-hidden="false"
          aria-label="info"
        />
      </CardContainer>
      {uploads !== undefined && linesAdded !== undefined && (
        <SalesDetails>
          You had
          <BoldText>{uploadLabel}</BoldText>
          and <BoldText>{linesAdded}</BoldText>
          {lineLabel} added.
        </SalesDetails>
      )}
    </>
  );
};

SalesUploads.propTypes = {
  uploads: PropTypes.number,
  linesAdded: PropTypes.number,
};

export default SalesUploads;
