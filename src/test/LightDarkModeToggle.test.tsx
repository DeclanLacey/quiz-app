import {render, screen} from "@testing-library/react"
import LightDarkModeToggle from "../components/lightDarkModeToggle/LightDarkModeToggle"

describe("Testing LightDarkModeToggle component", () => {
    test("Checkbox should be visible", () => {
        render(<LightDarkModeToggle />)
        const checkbox = screen.queryByRole("checkbox")
        expect(checkbox).toBeVisible()
    })
})