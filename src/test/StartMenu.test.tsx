import {render, screen} from "@testing-library/react"
import {renderSubjectBtns, StartMenu} from "../pages/startMenu/StartMenu"

const mockData = [
    {
        "name": "HTML",
        "img": "./assets/icon-html.svg"
    },
    {
        "name": "CSS",
        "img": "./assets/icon-css.svg"
    },
    {
        "name": "Javascript",
        "img": "./assets/icon-javascript.svg"
    },
    {
        "name": "Accessibility",
        "img": "./assets/icon-accessibility.svg"
    }
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

    test("Should render the correct number of SubjectChoiceBtn components", () => {
        const {container} = render(<section>{renderSubjectBtns(mockData)}</section>)

        const btns = container.querySelectorAll('button')
        expect(btns.length).toBe(mockData.length)
    })

    test("Should render SubjectChoiceBtn with the correct labels", () => {
        render(<section>{renderSubjectBtns(mockData)}</section>)

        mockData.forEach((subject) => {
            expect(screen.getByText(subject.name)).toBeInTheDocument()
        })
    })

}) 