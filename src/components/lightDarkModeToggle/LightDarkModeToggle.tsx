import { useState } from 'react'

function handleToggleClick(lightMode : Boolean, setLightMode : Function ) {
  setLightMode(!lightMode)

  if (lightMode) {
    document.body.classList.add("dark-theme")
  }else {
    document.body.classList.remove("dark-theme")
  }
}

function LightDarkModeToggle() {

  const [lightMode, setLightMode] = useState<Boolean>(true)

  return (
    <div>
      <img src='./assets/icon-sun-light.svg' alt="Outline of sun"/>
      <label>
          <input onClick={() => handleToggleClick(lightMode, setLightMode)} type='Checkbox'></input>
          <span></span>
      </label>
      <img src='./assets/icon-moon-light.svg' alt="Outline of moon"/>
    </div>
    
  )
}

export {LightDarkModeToggle, handleToggleClick}
