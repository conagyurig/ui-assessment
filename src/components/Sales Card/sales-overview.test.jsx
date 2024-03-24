import React from "react";
import { render, screen } from "@testing-library/react";
import SalesCard from "./sales-overview";

beforeEach(() => {
  jest.spyOn(console, "error");
  console.error.mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("renders SalesCard with props correctly", () => {
  render(
    <SalesCard
      uploads={2}
      successfulUploads={2}
      linesAttempted={4}
      linesSaved={2}
    />
  );
  expect(screen.getByText("UPLOAD SUCCESS")).toBeInTheDocument();
  expect(screen.getByText("LINES SAVED")).toBeInTheDocument();
  expect(screen.getByText(/100%/)).toBeInTheDocument();
  expect(screen.getByText(/50%/)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SalesCard with 0 uploads and lines correctly", () => {
  render(
    <SalesCard
      uploads={0}
      successfulUploads={2}
      linesAttempted={2}
      linesSaved={0}
    />
  );
  expect(screen.getByText("UPLOAD SUCCESS")).toBeInTheDocument();
  expect(screen.getByText("LINES SAVED")).toBeInTheDocument();
  expect(screen.getAllByText("-")).toHaveLength(2);
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SalesCard with rounded percentages correctly", () => {
  render(
    <SalesCard
      uploads={3}
      successfulUploads={1}
      linesAttempted={3}
      linesSaved={2}
    />
  );
  expect(screen.getByText("UPLOAD SUCCESS")).toBeInTheDocument();
  expect(screen.getByText("LINES SAVED")).toBeInTheDocument();
  expect(screen.getByText(/67%/)).toBeInTheDocument();
  expect(screen.getByText(/33%/)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SalesCard with no props correctly", () => {
  render(<SalesCard />);
  expect(screen.getByText("UPLOAD SUCCESS")).toBeInTheDocument();
  expect(screen.getByText("LINES SAVED")).toBeInTheDocument();
  const sentenceNotFound = screen.queryByText(/%/);
  expect(sentenceNotFound).not.toBeInTheDocument();
});
