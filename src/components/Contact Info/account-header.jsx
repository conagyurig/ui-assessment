import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SupportContact from "./contact-summary";

const AccountHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #464543;
  font-weight: 400;
`;

const AccountHeader = ({ email, name, phone }) => (
  <AccountHeaderWrapper>
    <Title>Account Overview</Title>
    <SupportContact email={email} name={name} phone={phone} />
  </AccountHeaderWrapper>
);

AccountHeader.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default AccountHeader;
