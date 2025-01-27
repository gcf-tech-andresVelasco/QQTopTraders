import React, {useState} from 'react'
import PrincipalChar from './PrincipalChar'
import "./CharSelector.css"
import BarChar from './BarChar'

export default function CharSelector({data}) {
  const [selected, setSelected] = useState(0) // 0 = balance, 1 = profit, 2 = equity 
  const onChangeHandler = (e) => {
    setSelected(Number(e.target.value))
  }
  return (
    <div>
      <select value={selected} onChange={(e) => onChangeHandler(e)}>
        <option value={0}>Balance</option>
        <option value={1}>Profit Diario</option>
        <option value={2}>Retorno Mensual</option>
        {/* <option value={2}>Equity</option> */}
      </select>
      {selected === 0 && <PrincipalChar data={data.balanceMonthly} />}
      {selected === 1 && <PrincipalChar data={data.profitMonthly} />}
      {selected === 2 && <BarChar data={data.returnMonthly} />}
      
    </div>
  )
}
