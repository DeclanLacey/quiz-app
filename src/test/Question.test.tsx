import { MemoryRouter } from "react-router-dom"
import { Question } from "../pages/question/Question"
import { render, screen } from "@testing-library/react"
import { SubjectChoiceBtn } from "../components/subjectChoiceBtn/SubjectChoiceBtn"
import { getRandomNumber, getRandomString } from "../utils/utils"

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


describe('Testing for Question page', () => {
    const randomNumber = getRandomNumber(mockData.length - 1)
    const data = mockData[randomNumber]
    test("Should show the correct category title", () => {
        render(
            <MemoryRouter>
                <SubjectChoiceBtn subjectData={data} />
            </MemoryRouter>
        )

        const name = data.name
        const link = screen.getByText(name)
        link.click()

        const nameOnScreen = screen.getByText(name)
        expect(nameOnScreen).toBeInTheDocument()

    })
})
