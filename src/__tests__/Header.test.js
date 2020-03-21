/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";

test("Test that the Header renders both the navbar and titlebar", () => {
  const { container, getByTestId } = render(<Header />);
  const pageTitle = getByTestId("page-title");
  const navBar = getByTestId("nav-bar");
  expect(container).toContainElement(pageTitle);
  expect(container).toContainElement(navBar);
});
