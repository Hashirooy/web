import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { withTranslation } from "react-i18next";
import { SideBar } from "widgets/SideBar/ui/SideBar/SideBar";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("SideBar", () => {
  test("test render", () => {
    const SideBarWithTransalation = withTranslation()(SideBar);
    renderWithTranslation(<SideBarWithTransalation />);
    expect(screen.getByTestId("side-bar")).toBeInTheDocument();
  });

  test("test render toggle", () => {
    renderWithTranslation(<SideBar />);
    const toggleButton = screen.getByTestId("side-bar-toggleId");
    expect(screen.getByTestId("side-bar-toggleId")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("side-bar")).toHaveClass("collapsed");
  });
});
