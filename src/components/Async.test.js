import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("<Async />", () => {
  beforeAll(() => {
    window.fetch = jest.fn();
  });

  it("should render posts if request succeds", async () => {
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: 1,
          title: "First Post",
        },
      ],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
