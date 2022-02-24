import { useState } from "react";

function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value) {
        setValue(currentValue =>
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, toggleValue]
}

export default useToggle;


/*--------------------- HOW TO USE THIS HOOK ---------------------
import useToggle from "./hooks/useToggle"

function ExampleComponent() {
  const [value, toggleValue] = useToggle(false)

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>  // Toggle b/w true & false
      <button onClick={() => toggleValue(true)}>Make True</button>  // Always set true
      <button onClick={() => toggleValue(false)}>Make False</button>  // Always set false
    </div>
  )
}

export default ExampleComponent;
----------------------------------------------------------------*/