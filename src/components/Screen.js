import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"


const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="screen" style={{texWeight:"400"}}  mode="single">
      <h1>{calc.num ? calc.num : calc.res}</h1>
      </div>
  )
}

export default Screen