/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Series from "../Series";

test("Test that the Series renders all of its components and elements correctly ", () => {
  const { container, getByTestId } = render(<Series />);
  const SeriesContainer = getByTestId("series");
  expect(container).toContainElement(SeriesContainer);
});
