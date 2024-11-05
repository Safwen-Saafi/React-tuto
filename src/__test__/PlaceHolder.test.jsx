import { expect, it} from "vitest";
import { render, screen } from "@testing-library/react";
import { PlaceHolder } from "../Components/Test/PlaceHolder";

it("should find input by placeholder value", () => {
    render(<PlaceHolder />);
    expect(screen.getByPlaceholderText(/enter data/)).toBeInTheDocument();
});
