import React from 'react'

export default function Header(props){
    return(
        <div className ='header'>
            <h1>NASA Photo of the Day</h1>
            <div className='buttons'>
                <button>email</button>
                <button>insta</button>
                <button>twitter</button>
            </div>
        </div>
    )
}