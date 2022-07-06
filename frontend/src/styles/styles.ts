import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
`

export const Header = styled.header`
    width: 100%;
    padding: 2rem 0;
    background: #102691;
    display: flex;
    justify-content: center;
`

export const SearchItem = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 0.8rem 1.4rem;
    background: #fff;
    font-size: 1.1rem;
    font-weight: bold;
    color: #ccc;
    border: 2px solid #ccc;
    display: flex;
    align-items: center;

    input {
        width: 100%;
        height: 100%;
        font-size: 1.1rem;
        text-transform: capitalize;
        border: none;
        outline: none;
    }
`;

export const Main = styled.main`
    padding: 2rem 3rem; 
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const TableHead = styled.thead`
    border: 1px solid #ccc;
    font-size: 1.1rem;
    color: #8c8c8c;
    text-align: left;
    background: #e6e6e6
`

export const User = styled.tr`
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 2px solid #f2f2f2
`

export const UpdateButton = styled.button`
    background: #fff;
    color: #8000ff;
    border: 2px solid #8000ff;
`

export const DeleteButton = styled.button`
    background: #fff;
    color: #ff0000;
    border: 2px solid #ff0000;
`

export const AddUserButton = styled.button`
    background: #8000ff;
    color: #fff;
    border: none;
    margin: 2rem auto 0 auto;
`
