import styled from "styled-components"

export const UploadContainer = styled.div`
    color : white;
    width : 100%;
    display: flex;
    flex-direction: column;
    gap:1.3rem;
    align-items: center;
    h1{
        font-size: 3em;
    }
    p{
        font-size: 1.5em;
    }
    
`
export const ButtonUploadContainer = styled.div`
    width :100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.9rem;
    progress {
        width : 30rem;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        height: 1.2rem;
        text-align: center;
        color: white;
        border : 0.5rem;
    }
    p{
        font-size: 0.9em;
    }
`

export const ButtonUpload = styled.button`
    font-size: 1.5em;
    width : 50px;
    height:50px;
    border-radius: 50%;
    border-color: grey;
`