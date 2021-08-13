import React, { useEffect } from 'react';
import styled from 'styled-components';

//come back to this
const StyledNav = styled.nav`
    display: flex;
    justify-content:space-between;
    align-items:center;

    img{
        height:8vh;
    }

    div{
        display:flex;
        justify-content: space-between;
        flex-:flex-end;
    }
    a{
        color:black;
        padding:2rem;
        text-decoration:none;
        font-family:'Poppins';
        &:hover{
            background-color:black;
            color:white;
        }
    }
    
`

function NavBar(props){
    return (
        <StyledNav>
            <img src='https://gpm.nasa.gov/sites/default/files/NASA-Logo-Large.jpg' alt='logo'/>
            <div className='navlinks'>
                <a href='#'>Home</a>
                <a href='#'>Account</a>
                <a href='#'>Menu</a>
            </div>
        </StyledNav>
    )
}

export default NavBar;