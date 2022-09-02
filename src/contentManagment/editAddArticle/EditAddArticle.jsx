import React from 'react'
import './editAddArticle.css'
import GenericBtn from '../../components/genericBtn/GenericBtn';
import DeleteBtn from '../buttons/DeleteBtn';

const title = "WOMEN CONFERENCE IN THE AMHARAN REGION";
const article = "In the past 3 years we have thought over\
                300 women personal finance this resulted\
                morethan 50% of them starting their own\
                business and over 70% of them reported\
                less dependenci"

export default function EditAddArticle() {
  return (
    <div className='edit-add-article-container'>
        <h3>{title}</h3>
        <p>{article}</p>
        <div> <DeleteBtn /> </div>
        <h5>DATE PUBLISHED: NOV/20/2022</h5>
    </div>
  )
}
