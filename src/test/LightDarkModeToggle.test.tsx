import {render, renderHook, screen} from "@testing-library/react"
import {handleToggleClick, LightDarkModeToggle} from "../components/lightDarkModeToggle/LightDarkModeToggle"
import { useState } from "react"

describe("Testing LightDarkModeToggle component", () => {
    test("Checkbox should be visible", () => {
        render(<LightDarkModeToggle />)
        const checkbox = screen.queryByRole("checkbox")
        expect(checkbox).toBeVisible()
    })

    test("Sun image should be visible", () => {
        render(<LightDarkModeToggle />)
        const img = screen.queryByAltText("Outline of sun")
        expect(img).toBeVisible()
    })

    test("Moon image should be visible", () => {
        render(<LightDarkModeToggle />)
        const img = screen.queryByAltText("Outline of moon")
        expect(img).toBeVisible()
    })

    test("Should switch lightMode state to from true to false", () => {
        const setLightMode = vi.fn()
        const lightMode = true

        handleToggleClick(lightMode, setLightMode)

        expect(setLightMode).toHaveBeenCalledWith(false)
    })

    test("Should switch lightMode state from false to true", () => {
      const setLightMode = vi.fn()
      const lightMode = false
      
      handleToggleClick(lightMode, setLightMode)

      expect(setLightMode).toHaveBeenCalledWith(true)
    })

    test("Should add the dark-theme class if lightMode is passed as true", () => {
        const setLightMode = vi.fn()
        const lightMode = true
        
        handleToggleClick(lightMode, setLightMode)

        expect(document.body.classList.contains("dark-theme")).toBe(true)
    }) 

    test("Should remove the dark-theme class if lightMode is passed as false", () => {
        const setLightMode = vi.fn()
        const lightMode = false

        handleToggleClick(lightMode, setLightMode)

        expect(document.body.classList.contains("dark-theme")).toBe(false)
    })
})