import { useEffect, useRef } from 'react';

function useMounted() {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true

        return () => {
            mounted.current = false
        }
    }, [])

    return mounted.current;
}

export default useMounted;

/*--------------------- HOW TO USE THIS HOOK ---------------------
import useMounted from "./hooks/useMounted"

function ExampleComponent() {
  const mounted = useMounted()

  return (
      mounted && <div>Render Componenet</div>
  )
}

export default ExampleComponent;
----------------------------------------------------------------*/