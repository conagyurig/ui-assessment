import React from "react";
import { render, screen } from "@testing-library/react";
import SupportContact from "./contact-summary";

beforeEach(() => {
  jest.spyOn(console, "error");
  console.error.mockImplementation(() => {});
});

afterEach(() => {
  console.error.mockRestore();
});

test("renders SupportContact with all contact details correctly", () => {
  const { container } = render(
    <SupportContact email={"email"} name={"name"} phone={"000 000 000"} />
  );
  expect(screen.getByText("Your Feefo Support Contact")).toBeInTheDocument();
  expect(screen.getByText("email")).toBeInTheDocument();
  expect(screen.getByText("name")).toBeInTheDocument();
  expect(screen.getByText("000 000 000")).toBeInTheDocument();
  const svgs = container.querySelectorAll("svg");
  expect(svgs.length).toBe(1);
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SupportContact with no email correctly", () => {
  const { container } = render(
    <SupportContact name={"name"} phone={"000 000 000"} />
  );
  expect(screen.getByText("Your Feefo Support Contact")).toBeInTheDocument();
  expect(screen.getByText("name")).toBeInTheDocument();
  expect(screen.getByText("000 000 000")).toBeInTheDocument();
  const svgs = container.querySelectorAll("svg");
  expect(svgs.length).toBe(0);
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SupportContact with no phone number correctly", () => {
  render(<SupportContact email={"email"} name={"name"} />);
  expect(screen.getByText("Your Feefo Support Contact")).toBeInTheDocument();
  expect(screen.getByText("email")).toBeInTheDocument();
  expect(screen.getByText("name")).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SupportContact with no name correctly", () => {
  render(<SupportContact email={"email"} phone={"000 000 000"} />);
  expect(screen.getByText("Your Feefo Support Contact")).toBeInTheDocument();
  expect(screen.getByText("email")).toBeInTheDocument();
  expect(screen.getByText("000 000 000")).toBeInTheDocument();
  expect(console.error).not.toHaveBeenCalled();
});

test("renders SupportContact with no props correctly", () => {
  const { container } = render(<SupportContact />);
  expect(screen.getByText("Your Feefo Support Contact")).toBeInTheDocument();
  const svgs = container.querySelectorAll("svg");
  expect(svgs.length).toBe(0);
});
