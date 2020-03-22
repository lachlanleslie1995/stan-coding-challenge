/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../Footer";

test("Test that the Footer renders all of its components correctly ", () => {
  const { container, getByTestId } = render(<Footer />);
  const footNavBar = getByTestId("footer-nav-bar");
  const copyrightInfo = getByTestId("copyright-info");
  const socialMedia = getByTestId("social-media");
  const appStores = getByTestId("app-stores");
  expect(container).toContainElement(footNavBar);
  expect(container).toContainElement(copyrightInfo);
  expect(container).toContainElement(socialMedia);
  expect(container).toContainElement(appStores);
});
