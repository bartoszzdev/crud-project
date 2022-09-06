import styled from "styled-components";
//#102691
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8fafb;
`;

export const Header = styled.header`
  width: 100%;
  padding: 2rem 2%;
  background: #3700b3;
  display: flex;
  justify-content: center;

  @media (max-width: 824px) {
    padding: 2rem 10%;
  }
`;

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

  @media (max-width: 824px) {
    padding: 2rem 1rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  border: 1px solid #ccc;
  font-size: 1.1rem;
  color: #8c8c8c;
  text-align: left;
  background: #e6e6e6;
`;

export const User = styled.tr`
  font-size: 1rem;
  font-weight: bold;
  border-bottom: 2px solid #f2f2f2;
`;

export const UpdateButton = styled.button`
  background: #fff;
  color: #6200ee;
  border: 2px solid #6200ee;
`;

export const DeleteButton = styled.button`
  background: #fff;
  color: red;
  border: 2px solid #ff4b2b;
`;

export const AddUserButton = styled.button`
  background: #6200ee;
  color: #fff;
  border: none;
  margin: 2rem auto 0 auto;
`;

export const EmptyList = styled.div`
  padding-top: 100px;
  text-align: center; 

  h1 {
    margin-top: 45px;
    font-size: 2rem;
    font-weight: bold;
  }

  h3 {
    margin-bottom: 40px;
    font-size: 1.3rem;
  }
`
