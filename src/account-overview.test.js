import React from "react";
import { render, screen } from "@testing-library/react";
import AccountOverview from "./account-overview";

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

beforeEach(() => {
  jest.spyOn(console, "error");
  console.error.mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("renders AccountOverview with props correctly", () => {
  render(<AccountOverview data={accountOverviewStub} />);
  expect(screen.getByText("Account Overview")).toBeInTheDocument();
  expect(screen.getByText("Your Feefo Support Contact")).toBeInTheDocument();
  expect(screen.getByText("John Smith")).toBeInTheDocument();
  expect(screen.getByText("john.smith@feefo.com")).toBeInTheDocument();
  expect(screen.getByText("020 3362 4208")).toBeInTheDocument();
  expect(screen.getByText("Sales")).toBeInTheDocument();
  expect(screen.getByText("8 uploads")).toBeInTheDocument();
  expect(screen.getByText("4")).toBeInTheDocument();
  expect(screen.getByText(/lines added./)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders AccountOverview with no props correctly", () => {
  render(<AccountOverview />);
  expect(screen.getByText("Account Overview")).toBeInTheDocument();
  expect(screen.getByText("Your Feefo Support Contact")).toBeInTheDocument();
  expect(screen.getAllByText("-")).toHaveLength(3);
  expect(console.error).not.toHaveBeenCalled();
});
