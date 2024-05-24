import { TURNS } from "../constants"
import { Square } from "./Square"

export function Turns ({turn, player = "Player"}){
    return (<section className='turn'>
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>)
}