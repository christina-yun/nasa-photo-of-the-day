import React from 'react';
import styled from 'styled-components';

const StyleHeader= styled.div`
    display:flex;
    flex-direction:column;

    align-items:center;
h1{
    color:red;
}
`

function Header(props){
    return(
        <StyleHeader>
            <h1>NASA PHOTO OF THE DAY</h1>
            <div className='buttons'>
                <button>email</button>
                <button>insta</button>
                <button>twitter</button>
            </div>
        </StyleHeader>
    )
}

export default Header;