import React from 'react';
import styled from 'styled-components';

const StylePhotoInfo = styled.div`
    .photo-div{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    .info-container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        margin: 0 7rem;
        
    }
    img{
        width:50%;
        height:auto;
    }
    h3{
        margin:0;
    }
    h2{
        margin:0;
    }
    p{
        margin:0;
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