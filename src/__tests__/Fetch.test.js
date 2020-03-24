/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Fetch from "../Fetch";

test("Test that fetch correctly collects and returns data from a json file ", () => {
  const { container, getByTestId } = render(<Series />);
  const SeriesContainer = getByTestId("series");
  expect(container).toContainElement(SeriesContainer);
});
