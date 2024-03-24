import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SupportContact from "./contact-summary";

const AccountTopBarWrapper = styled.div`
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

const AccountTopBar = ({ email, name, phone }) => (
  <AccountTopBarWrapper>
    <Title>Account Overview</Title>
    <SupportContact email={email} name={name} phone={phone} />
  </AccountTopBarWrapper>
);

AccountTopBar.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
};

export default AccountTopBar;
