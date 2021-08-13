import React from 'react';
import styled from 'styled-components';

const StylePhotoInfo = styled.div`
    .photo-div{
        display:flex;
        justify-content:center;
        align-items:center;
    }
    
    img{
        height:70vh;
    }

    .info-container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin: 1rem 10rem 0 10rem;
    }
    
    h3{
        margin:0;
        font-family: 'Poppins';
    }
    h2{
        margin:0;
        font-family: 'Source Sans Pro';
        font-weight:800;
    }
    p{
        margin:0;
        font-family:'Poppins';
        line-height:1.3;
        font-size:.8rem;
    }
`

function PhotoInfo(props){
    const { photo, date, name, description, photographer } = props;

    return(
        <StylePhotoInfo>
            <div className='photo-div'>
                <img src={photo} alt='Photo of the day'/>
            </div>
            <div className='info-container'>
                <h3>Date: {date}</h3>
                <h2> Title: {name}</h2>
                <p>Description: {description}</p>
                <h3>Photographer: {photographer}</h3>
            </div>                        
        </StylePhotoInfo>
    )

}
export default PhotoInfo;