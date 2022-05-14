import styled from "styled-components"

export const NavbarContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content: space-between;
    background-color: #9EA9CD;
    color : white;
    padding : 1rem;
`
export const Logo = styled.h1`
    &:hover{
        color : #F8ABB3;
        cursor: pointer;
    }
`

export const Ul = styled.ul`
    display : flex;
    gap : 1.1rem;
    font-size: 1.3em;
    font-weight: 600;

`
export const Li = styled.li`
    list-style-type: none;
    &:hover{
        color : #F8ABB3;
        cursor: pointer;
    }
`
