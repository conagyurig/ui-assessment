import React from "react";
import PropTypes from "prop-types";
import AccountHeader from "./components/Contact Info/account-header";
import SalesCard from "./components/Sales Card/sales-overview";

export const AccountOverview = ({ data }) => {
  return (
    <div className="AccountOverview">
      <AccountHeader
        email={data?.supportContact?.email}
        name={data?.supportContact?.name}
        phone={data?.supportContact?.phone}
      />
      <SalesCard
        uploads={data?.salesOverview?.uploads}
        successfulUploads={data?.salesOverview?.successfulUploads}
        linesAttempted={data?.salesOverview?.linesAttempted}
        linesSaved={data?.salesOverview?.linesSaved}
      />
    </div>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }),
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number,
      successfulUploads: PropTypes.number,
      linesAttempted: PropTypes.number,
      linesSaved: PropTypes.number,
    }),
  }),
};

export default AccountOverview;
