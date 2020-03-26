/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Movies from "../Movies";

test("Test that the Movies renders all of its components and elements correctly ", async () => {
  const { container, getByTestId } = render(<Movies />);

  const SeriesContainer = await waitFor(() => getByTestId("movies"));
  expect(container).toContainElement(SeriesContainer);
});
