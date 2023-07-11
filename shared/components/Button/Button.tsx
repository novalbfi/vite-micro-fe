import { styled } from 'styled-components'

const Button = styled.button`
  display: inline-flex;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 8px 12px;
  box-shadow: 2px 2px 6px #ccc;

  &:active {
    border-color: #333;
    box-shadow: none;
  }
`

export default Button