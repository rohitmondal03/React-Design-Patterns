import { useEffect, useRef, useState } from "react"

export function withStyles(Component) {
  return props => {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({
      height: undefined,
      width: undefined
    })

    useEffect(() => {
      if (ref.current) {
        setDimensions({
          height: ref.current.offsetHeight,
          width: ref.current.offsetWidth,
        })
      }
    }, [ref])

    const style = {
      color: "white",
      fontSize: "2rem",
      textAlign: "center",
      fontWeight: "thin",
      fontFamily: "cursive",
    }

    return <Component
      ref={ref}
      style={style}
      height={dimensions.height}
      width={dimensions.width}
      {...props}
    />
  }
}