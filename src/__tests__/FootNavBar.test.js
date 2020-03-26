/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterNavBar from "../components/FooterNavBar";

test("Test that the Footer Navbar renders all of its components and elements correctly ", () => {
  const { container, getByTestId } = render(<FooterNavBar />);
  const homeLink = getByTestId("home-link");
  const termsAndConiditons = getByTestId("terms-info");
  const privacyPolicy = getByTestId("privacy-policy");
  const collectionStatement = getByTestId("collection-statement");
  const help = getByTestId("footer-help");
  const manageAccount = getByTestId("manage-account");
  expect(container).toContainElement(homeLink);
  expect(container).toContainElement(termsAndConiditons);
  expect(container).toContainElement(privacyPolicy);
  expect(container).toContainElement(collectionStatement);
  expect(container).toContainElement(help);
  expect(container).toContainElement(manageAccount);
});

test("Test that the Home link exists and is clickable", () => {
  const { getByText } = render(<FooterNavBar />);
  const home = getByText("Home");

  expect(home).toBeInTheDocument();
  fireEvent.click(home);
  expect(window.location.href).toContain("/");
});

test("Test that the Terms and Conditions link exists and is clickable", () => {
  const { getByText } = render(<FooterNavBar />);
  const tnc = getByText("Terms and Conditions");

  expect(tnc).toBeInTheDocument();
  fireEvent.click(tnc);
  expect(window.location.href).toContain("/termsandconditions");
});

test("Test that the Privacy Policy link exists and is clickable", () => {
  const { getByText } = render(<FooterNavBar />);
  const Privacy = getByText("Privacy Policy");

  expect(Privacy).toBeInTheDocument();
  fireEvent.click(Privacy);
  expect(window.location.href).toContain("/privacypolicy");
});

test("Test that the Colleciton Statement link exists and is clickable", () => {
  const { getByText } = render(<FooterNavBar />);
  const collection = getByText("Collection Statement");

  expect(collection).toBeInTheDocument();
  fireEvent.click(collection);
  expect(window.location.href).toContain("/collectionstatement");
});

test("Test that the Help link exists and is clickable", () => {
  const { getByText } = render(<FooterNavBar />);
  const help = getByText("Help");

  expect(help).toBeInTheDocument();
  fireEvent.click(help);
  expect(window.location.href).toContain("/help");
});

test("Test that the Manage Account link exists and is clickable", () => {
  const { getByText } = render(<FooterNavBar />);
  const account = getByText("Manage Account");

  expect(account).toBeInTheDocument();
  fireEvent.click(account);
  expect(window.location.href).toContain("/account");
});
