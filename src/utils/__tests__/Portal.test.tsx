import React from "react";
import { cleanup, render } from "@testing-library/react";
import Portal from "../Portal";

afterEach(cleanup);

describe("Portal Component", () => {
  it("Portal renders correctly", () => {
    const { container } = render(
      <div id="portal">
        <Portal selector="#portal">Portal Content</Portal>
      </div>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
