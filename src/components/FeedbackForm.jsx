import React from 'react'
import Card from './shared/Card'
import { useContext, useState, useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

export default function FeedbackForm() {
    const[text, setText] = useState('')
    const[btnDisabled, setBtnDisabled] = useState(true)
    const[msg, setMsg] = useState('')
    const[rating, setRating] = useState()
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true)
            setMsg(null)
        }else if(text !== '' && text.trim().length <= 10 ){
            setBtnDisabled(true)
            setMsg('Text must be at least 10 carachters')
        }else {
            setMsg(null)
            setBtnDisabled(false)
        }


        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else{
                addFeedback(newFeedback)
            }
            setText('')
        }
    }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>   
            
            <RatingSelect select={(rating) => {
                setRating(rating)
            }}/>

            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a review' 
                value={text}/>
                <Button type="submit" children='Send' isDisabled={btnDisabled}/>
            </div>

            {
                msg && <div className='message'>{msg}</div> 
            }

        </form>
    </Card>
  )
}
