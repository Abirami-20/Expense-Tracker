import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transcation from './Transcation'
const TranscationList = () => {
  const  {transactions} =useContext(GlobalContext)
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {
          transactions.map(transaction=>(<Transcation key={transaction.id}transaction={transaction}/> ))
        }
      </ul>

    </div>
  )
}

export default TranscationList
