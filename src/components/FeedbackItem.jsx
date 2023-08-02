import { useState } from "react"
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

export default function FeedbackItem({item}) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button type="button" onClick={ () => deleteFeedback(item.id)} className="close"><FaTimes color="purple" /></button>
      <button className="edit" onClick={() => editFeedback(item)}><FaEdit color="purple"/></button>
      <div onClick={() => editFeedback(item)} className="text-display">{item.text}</div>
    </Card>
  )
}
