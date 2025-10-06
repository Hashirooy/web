import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui/Button/ui/Button";
import React from "react";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("button test", () => {
  test("test button", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("test clear theme", () => {
    renderWithTranslation(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
  });
});
