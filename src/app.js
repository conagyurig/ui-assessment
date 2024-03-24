import AccountOverview from "./account-overview";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f2f2f2;
    font-family: "Roboto", sans-serif;
  }
`;

function App() {
  const accountOverviewStub = {
    supportContact: {
      name: "John Smith",
      email: "john.smith@feefo.com",
      phone: "020 3362 4208",
    },
    salesOverview: {
      uploads: 8,
      successfulUploads: 3,
      linesAttempted: 20,
      linesSaved: 4,
    },
  };

  return (
    <>
      <GlobalStyle />
      <AccountOverview data={accountOverviewStub} />
    </>
  );
}

export default App;
