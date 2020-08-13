import styled from 'styled-components';

export const FormCreation = styled.div`
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  border: 1px solid #ddd9d9;
  border-radius: 10px;
  height: 30rem;
  margin-bottom: 2rem;
  background-color: #f3f3f3;
`;

export const Form = styled.form`
    width: 90%;
`

FormCreation.defaultProps = {
    'data-id': 'form__creation'
  }

Form.defaultProps = {
    'data-id': 'form__container'
}
