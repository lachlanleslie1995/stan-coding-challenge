/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterNavBar from "../FooterNavBar";

test("Test that the Footer renders all of its components and elements correctly ", () => {
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
