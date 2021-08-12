import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants/index'
import axios from 'axios'

export default function PhotoInfo(props){
    const { photo, setPhoto, date, setDate, name, setName, description, setDescription, photographer, setPhotographer } = props;

    return(
        <div className='apiInfo'>
            <img src={photo} alt='Photo of the day'/>
            <h3>Date: {date}</h3>
            <h2> Title: {name}</h2>
            <p>Description: {description}</p>
            <h3>Photographer: {photographer}</h3>
        </div>
    )

}