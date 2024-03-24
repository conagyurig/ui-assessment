import PropTypes from "prop-types";
import styled from "styled-components";
import SalesUploads from "./sales-description";
import SalesMetrics from "./sales-metrics";

const CardOverView = styled.div`
  background: white;
  border-radius: 4px 4px 0 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  margin-right: 2rem;
  margin-left: 2rem;
  margin-bottom: 0.08rem;
  display: flex;
  flex-direction: column;
`;

const MetricsContainer = styled.div`
  display: flex;
  margin-right: 2rem;
  margin-left: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const CardMetricsLeft = styled.div`
  padding: 1rem;
  background: white;
  margin-right: 0.05rem;
  flex-basis: calc(50% - 2rem);
  border-radius: 0 0 0px 4px;
`;

const CardMetricsRight = styled.div`
  padding: 1rem;
  background: white;
  margin-left: 0.05rem;
  flex-basis: calc(50% - 2rem);
  border-radius: 0 0 4px 0px;
`;

const SalesCard = ({
  uploads,
  successfulUploads,
  linesAttempted,
  linesSaved,
}) => {
  return (
    <>
      <CardOverView>
        <SalesUploads uploads={uploads} linesAdded={linesSaved} />
      </CardOverView>
      <MetricsContainer>
        <CardMetricsLeft>
          <SalesMetrics
            metric="upload success"
            data={uploads > 0 ? (successfulUploads / uploads) * 100 : 0}
          />
        </CardMetricsLeft>
        <CardMetricsRight>
          <SalesMetrics
            metric="lines saved"
            data={linesSaved > 0 ? (linesSaved / linesAttempted) * 100 : 0}
          />
        </CardMetricsRight>
      </MetricsContainer>
    </>
  );
};

SalesCard.propTypes = {
  uploads: PropTypes.number,
  successfulUploads: PropTypes.number,
  linesAttempted: PropTypes.number,
  linesSaved: PropTypes.number,
};

export default SalesCard;
