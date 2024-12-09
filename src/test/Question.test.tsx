import { MemoryRouter, Route, Routes } from "react-router-dom"
import { Question } from "../pages/question/Question"
import { fireEvent, render, screen } from "@testing-library/react"
import { SubjectChoiceBtn } from "../components/subjectChoiceBtn/SubjectChoiceBtn"
import { getRandomNumber, getRandomString } from "../utils/utils"
import routeData from 'react-router-dom'

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
    test("Should show the correct category title", async () => {

        const name = data.name
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<SubjectChoiceBtn subjectData={data} />} />
                    <Route path="/question" element={<Question />} />
                </Routes>
            </MemoryRouter>
        )

        const link = screen.getByText(data.name);
        fireEvent.click(link);  // Simulate user clicking the link

        const nameText = screen.queryByText(new RegExp(name, "i"))
        expect(nameText).toBeVisible()
    })

    
})
