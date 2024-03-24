import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Data = styled.span`
  color: #24ae5f;
  font-size: 2.2rem;
  font-weight: bold;
`;

const SalesDetails = styled.div`
  color: #afaeac;
  font-weight: bold;
`;

const SalesMetrics = ({ metric, data }) => {
  const formattedData = data ? data.toFixed(0) : "";
  return (
    <>
      <Data>{data ? formattedData + "%" : "-"}</Data>
      <SalesDetails>{metric.toUpperCase()}</SalesDetails>
    </>
  );
};

SalesMetrics.propTypes = {
  metric: PropTypes.string,
  data: PropTypes.number,
};

export default SalesMetrics;
