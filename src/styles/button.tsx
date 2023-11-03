import styled from "styled-components"
/*importing styled*/

/**
 styling a styled component wich is called a Normalbutton
 */
export const Normalbutton = styled.button`
    font-size: 16px;
    padding: 8px 15px;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: bold;
    transition: 300ms ease;
    background-color: rgba(11, 187, 187, 0.983);
    cursor: pointer;
    &:hover {
        background-color: rgb(7, 141, 141);  
    }
`
/**
 and here i am targeting the same button but overwriting the targeted values and naming it Weirdbutton
 */
export const Weirdbutton = styled(Normalbutton)`
    background-color: white;
    color: rgba(11, 187, 187, 0.983);
    border:solid 2px rgba(11, 187, 187, 0.983);
    &:hover {
        background-color: rgba(11, 187, 187, 0.983);
        color: white;
        
    }
`