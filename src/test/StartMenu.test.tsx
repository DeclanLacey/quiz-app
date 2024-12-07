import {render, screen} from "@testing-library/react"
import StartMenu from "../pages/startMenu/StartMenu"

const mockData = [
    
]

describe("Testing StartMenu", () => {
    test("Title should be visible", () => {
        render(<StartMenu />)
        const title = screen.queryByText(/Welcome to the Frontend Quiz!/i)
        expect(title).toBeVisible()
    })

    test("Subtitle should be visible", () => {
        render(<StartMenu />)
        const subtitle = screen.queryByText(/Pick a subject to get started./i)
        expect(subtitle).toBeVisible()
    })

    test("Renders the correct elements", () => {
        expect()
    })
}) 