/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Tile from "../components/Tile";

test("Test that the Tile renders all of its components and elements correctly ", () => {
  const { container, getByTestId } = render(<Tile props={{}} />);
  const tile = getByTestId("tile");
  const tileImage = getByTestId("tile-img");
  const imageText = getByTestId("img-text");
  const tileTitle = getByTestId("tile-title");
  expect(container).toContainElement(tile);
  expect(container).toContainElement(tileImage);
  expect(container).toContainElement(imageText);
  expect(container).toContainElement(tileTitle);
});

test("Test that the Tile correctly displays it's values from props", () => {
  const { container } = render(
    <Tile props={{ title: "title" }} altText="altText" />
  );
  expect(container.textContent).toMatch("title");
  expect(container.textContent).toMatch("altText");
});
