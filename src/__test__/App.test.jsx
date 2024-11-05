import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("Should render Users", () => {
  it("should make a snapshot of the component", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
  describe("Edit button is clicked", () => {
    it("should render save button", async () => {
      const user = userEvent.setup();
      render(<App />);

      const editButtons = screen.getAllByRole("button", { name: "Edit" });

      // Test each edit button
      for (let i = 0; i < editButtons.length; i++) {
        await user.click(editButtons[i]);
        const saveButton = screen.getAllByRole("button", { name: "Save" })[i];
        expect(saveButton).toBeInTheDocument();
      }
    });

    it("should display username & email input fields", async () => {
      const user = userEvent.setup();
      render(<App />);

      const editButtons = screen.getAllByRole("button", { name: "Edit" });
      console.log(editButtons);
      for (let i = 0; i < editButtons.length; i++) {
        await user.click(editButtons[i]);

        // Check that both username and email input fields appear for each edited user
        const usernameInput = screen.getAllByRole("textbox", {
          name: "username",
        })[i];
        const emailInput = screen.getAllByRole("textbox", { name: "email" })[i];

        expect(usernameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
      }
    });
  });
});
