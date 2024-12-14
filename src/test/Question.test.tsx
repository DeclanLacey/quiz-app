import { MemoryRouter, Route, Routes } from "react-router-dom"
import { Question } from "../pages/question/Question"
import { fireEvent, render, screen } from "@testing-library/react"
import { SubjectChoiceBtn } from "../components/subjectChoiceBtn/SubjectChoiceBtn"
import { getRandomNumber } from "../utils/utils"
import quizData from "../data/data.json"

const mockData = quizData

describe('Testing for Question page', () => {
    const randomNumber = getRandomNumber(mockData.length - 1)
    const data = mockData[randomNumber]
    test("Should show the correct category title", async () => {

        const name = data.title
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<SubjectChoiceBtn quizData={data} />} />
                    <Route path="/question" element={<Question />} />
                </Routes>
            </MemoryRouter>
        )

        const link = screen.getByText(data.title);
        fireEvent.click(link);  // Simulate user clicking the link

        const nameText = screen.queryByText(new RegExp(name, "i"))
        expect(nameText).toBeVisible()
    })

    
})
