import {render, screen} from "@testing-library/react"
import {renderSubjectBtns, StartMenu} from "../pages/startMenu/StartMenu"
import { MemoryRouter } from "react-router-dom";

function getRandomString() {
    return (Math.random() + 1).toString(36).substring(7);
}


const mockData = [
    {
        "name": getRandomString(),
        "img": "./assets/icon-html.svg"
    },
    {
        "name": getRandomString(),
        "img": "./assets/icon-css.svg"
    },
    {
        "name": getRandomString(),
        "img": "./assets/icon-javascript.svg"
    },
    {
        "name": getRandomString(),
        "img": "./assets/icon-accessibility.svg"
    }
]

describe("Testing StartMenu", () => {
    test("Title should be visible", () => {
        render(
            <MemoryRouter>
                <StartMenu />
            </MemoryRouter>
        )
        const title = screen.queryByText(/Welcome to the Frontend Quiz!/i)
        expect(title).toBeVisible()
    })

    test("Subtitle should be visible", () => {
        render(
            <MemoryRouter>
                <StartMenu />
            </MemoryRouter>
        )
        const subtitle = screen.queryByText(/Pick a subject to get started./i)
        expect(subtitle).toBeVisible()
    })

    test("Should render the correct number of SubjectChoiceBtn components", () => {
        
        const {container} = render(<MemoryRouter><section>{renderSubjectBtns(mockData)}</section></MemoryRouter>)

        const btns = container.querySelectorAll('button')
        expect(btns.length).toBe(mockData.length)
    })

    test("Should render SubjectChoiceBtn with the correct labels", () => {
        render(<MemoryRouter><section>{renderSubjectBtns(mockData)}</section></MemoryRouter>)

        mockData.forEach((subject) => {
            expect(screen.getByText(subject.name)).toBeInTheDocument()
        })
    })

}) 