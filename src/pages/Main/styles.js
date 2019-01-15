import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const Error = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
  color: #fff;
  width: 100%;
  max-width: 500px;
  background-color: #e00b0b;
  border-radius: 3px;
  padding: 10px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #444;
    border-radius: 3px;

    border: ${props => (props.withError ? '2px solid #F00' : 0)};
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    color: #fff;
    background: #63f5b8;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    min-width: 150px;

    &:hover {
      background: #52d89f;
    }
  }
`;
