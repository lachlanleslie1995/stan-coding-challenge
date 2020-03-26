/**
 * @jest-environment jsdom
 */
import useFetch from "../components/UseFetch";
import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";

jest.mock("axios");
const url = "test/v1";

afterEach(() => {
  axios.mockReset();
});

const mockResponse = {
  total: 100,
  entries: [
    {
      title: "Blunt Talk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      programType: "series",
      images: {
        "Poster Art": {
          url:
            "https://streamcoimg-a.akamaihd.net/000/127/71/12771-PosterArt-d79951a3a8662abf816e6446c2b725e0.jpg",
          width: 1000,
          height: 1500
        }
      },
      releaseYear: 2015
    }
  ]
};

test("Test that useFetch returns the correct values if given a valid url and starts in the correct state  ", async () => {
  axios.get.mockResolvedValueOnce(mockResponse);
  const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

  expect(result.current).toStrictEqual([{ data: { entries: [] } }, true, null]);

  await waitForNextUpdate();

  expect(result.current).toStrictEqual([mockResponse, false, null]);
  expect(axios.get).toHaveBeenCalledWith(url);
  expect(axios.get).toHaveBeenCalledTimes(1);
});
