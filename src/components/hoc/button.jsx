import { forwardRef } from "react";
import { withStyles } from "./hoc-wrapper";

function Button(props, ref) {
  const { height, width, style, color } = props;
  // the color property has come directly from HOC.jsx and not from hoc-wrapper.jsx !!

  return (
    <section style={style}>
      <p style={{ color: color }}>
        Height of button: {height} and width of btn: {width}
      </p>

      <button ref={ref}>HOC Wrapper</button>
    </section>
  )
}

export default withStyles(forwardRef(Button));