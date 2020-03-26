/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "../components/NavBar";

test("Test that the navbar renders and contains the correct elements", () => {
  const { container, getByText } = render(<NavBar />);
  const siteName = getByText("DEMO Streaming");
  const loginButton = getByText("Log in");
  const trialButton = getByText("Start your free trial");
  expect(container).toContainElement(siteName);
  expect(container).toContainElement(loginButton);
  expect(container).toContainElement(trialButton);
});

test("Test the site name link exists and is clickable", () => {
  const { getByText } = render(<NavBar />);
  const siteName = getByText("DEMO Streaming");

  expect(siteName).toBeInTheDocument();
  fireEvent.click(siteName);
  expect(window.location.href).toContain("/");
});
test("Test the login link exists and is clickable", () => {
  const { getByText } = render(<NavBar />);
  const login = getByText("Log in");

  expect(login).toBeInTheDocument();
  fireEvent.click(login);
  expect(window.location.href).toContain("login");
});

test("Test that the trial link exists and is clickable", () => {
  const { getByText } = render(<NavBar />);
  const trial = getByText("Start your free trial");

  expect(trial).toBeInTheDocument();
  fireEvent.click(trial);
  expect(window.location.href).toContain("trial");
});
