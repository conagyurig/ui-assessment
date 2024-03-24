import React from "react";
import { render, screen } from "@testing-library/react";
import SalesUploads from "./sales-description";

beforeEach(() => {
  jest.spyOn(console, "error");
  console.error.mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("renders SalesUploads with plural uploads and lines correctly", () => {
  render(<SalesUploads uploads={2} linesAdded={2} />);
  expect(screen.getByText("Sales")).toBeInTheDocument();
  expect(screen.getByText("2 uploads")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.getByText(/lines added./)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SalesUploads with singular uploads and lines correctly", () => {
  render(<SalesUploads uploads={1} linesAdded={1} />);
  expect(screen.getByText("Sales")).toBeInTheDocument();
  expect(screen.getByText("1 upload")).toBeInTheDocument();
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText(/line added./)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SalesUploads with no uploads and lines correctly", () => {
  render(<SalesUploads uploads={0} linesAdded={0} />);
  expect(screen.getByText("Sales")).toBeInTheDocument();
  expect(screen.getByText("0 uploads")).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();
  expect(screen.getByText(/lines added./)).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SalesUploads with no props correctly", () => {
  render(<SalesUploads />);
  expect(screen.getByText("Sales")).toBeInTheDocument();
  const sentenceNotFound = screen.queryByText(/added/);
  expect(sentenceNotFound).not.toBeInTheDocument();
});
