/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../Footer";

test("Test that the Footer renders ", () => {
  const { container, getByTestId } = render(<Footer />);
  const pageTitle = getByTestId("page-title");
  const navBar = getByTestId("nav-bar");
  expect(container).toContainElement(pageTitle);
  expect(container).toContainElement(navBar);
});
