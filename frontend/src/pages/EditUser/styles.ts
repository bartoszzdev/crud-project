import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 0 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(55, 0, 179);
  background: linear-gradient(
    245deg,
    rgba(255, 255, 255, 1) 57%,
    rgba(55, 0, 179, 1) 57%
  );
`;

export const Form = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 14px 20px 50px -3px rgba(0, 0, 0, 0.35);
`;

export const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
  background-color: #f8fafb;
  border-radius: 6px;
`;

export const Title = styled.h2`
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: #5f6368;
`;

export const EditForm = styled.form`
  margin: 2rem auto 0 auto;
  padding: 0 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.3rem;
  }
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 0.8rem 1.7rem;
  font-size: 1.2rem;
  font-weight: 400;
  color: #5f6368;
  border: 1px solid #5f6368;
  border-radius: 4px;

  :focus {
    outline: 1px solid #6200ee;
  }
`;

export const AddButton = styled.button`
  background: #6200ee;
  color: #fff;
  border: none;
  margin: 2rem auto 2rem auto;
`;