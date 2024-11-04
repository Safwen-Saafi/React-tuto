import { describe, it, expect } from "vitest";
import { render, screen, configure } from "@testing-library/react";
import UserDetail from "../Components/Props/UserDetail";

describe("UserDetail", () => {
  configure({ asyncUtilTimeout: 3000 }); // To make all queries take 3 second min
  it("should render user details", async () => {
    const mockProp = {
      id: 1,
      username: "testuser",
      email: "test@example.com",
    };

    render(<UserDetail prop={mockProp} />);
    expect(await screen.findByText(/Username: testuser/)).toBeInTheDocument();
  });
});
