import { useEffect, useRef } from 'react';

function useMounted() {
    const mounted = useRef(false);

    useEffect(() => {
        mounted.current = true

        return () => {
            mounted.current = false
        }
    }, [])

    return mounted;
}

export default useMounted;

/*--------------------- HOW TO USE THIS HOOK ---------------------
import useMounted from "./hooks/useMounted"

function ExampleComponent() {
  const mounted = useMounted()

  return (
      mounted.current && <div>Render Componenet</div>
  )
}

export default ExampleComponent;
----------------------------------------------------------------*/