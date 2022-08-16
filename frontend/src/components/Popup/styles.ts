import styled from "styled-components";
//#ff4b2b
export const Card = styled.div`
    display: flex;
    align-items: center;
    gap: 36px;
    transform: translateX(-50%);
    position: absolute;
    bottom: 1rem;
    left: 50%;
    padding: 1.2rem 1.5rem;
    background-color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 4px;
    border-left: 10px solid ${props => props.color};
    box-shadow: 14px 20px 50px -3px rgba(0, 0, 0, 0.35);
`

export const ProgressBar = styled.div`
    width: 100%;
    height: 5px;
    border-bottom-right-radius: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: ${props => props.color};
`