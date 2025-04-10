import styled from '@emotion/styled';
import ButtonStyle from './ButtonStyle';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 columns
  gap: 5px; // Adjust gap between buttons
  padding-top: 10px; // Space above buttons
`;

type ButtonSectionProps = {
  handleDigitOrDecimal: (value: string) => void;
  handleOperation: (value: Operator) => void;
  handleEquals: (value: string) => void;
  handleClear: (value: string) => void;
  handleClearEntry: (value: string) => void;
}

type Operator = '+' | '-' | '*' | '/';

const ButtonSection = (props: ButtonSectionProps) => {

  return (
    <StyledDiv>
      <ButtonStyle className="button-control" onClick={() => props.handleClearEntry('CE')}>CE</ButtonStyle>
      <ButtonStyle className="button-control" onClick={() => props.handleClear('C')}>C</ButtonStyle>
      <ButtonStyle className="button-placeholder" onClick={() => {}}></ButtonStyle>
      <ButtonStyle className="button-operator" onClick={() => props.handleOperation('/')}>/</ButtonStyle>

      <ButtonStyle onClick={() => props.handleDigitOrDecimal('7')}>7</ButtonStyle>
      <ButtonStyle onClick={() => props.handleDigitOrDecimal('8')}>8</ButtonStyle>
      <ButtonStyle onClick={() => props.handleDigitOrDecimal('9')}>9</ButtonStyle>
      <ButtonStyle className="button-operator" onClick={() => props.handleOperation('*')}>*</ButtonStyle>

      <ButtonStyle onClick={() => props.handleDigitOrDecimal('4')}>4</ButtonStyle>
      <ButtonStyle onClick={() => props.handleDigitOrDecimal('5')}>5</ButtonStyle>
      <ButtonStyle onClick={() => props.handleDigitOrDecimal('6')}>6</ButtonStyle>
      <ButtonStyle className="button-operator" onClick={() => props.handleOperation('-')}>-</ButtonStyle>

      <ButtonStyle onClick={() => props.handleDigitOrDecimal('1')}>1</ButtonStyle>
      <ButtonStyle onClick={() => props.handleDigitOrDecimal('2')}>2</ButtonStyle>
      <ButtonStyle onClick={() => props.handleDigitOrDecimal('3')}>3</ButtonStyle>
      <ButtonStyle className="button-operator" onClick={() => props.handleOperation('+')}>+</ButtonStyle>

      <ButtonStyle className="button-placeholder" onClick={() => {}}></ButtonStyle>
      <ButtonStyle onClick={() => props.handleDigitOrDecimal('0')}>0</ButtonStyle>
      <ButtonStyle onClick={() => props.handleDigitOrDecimal('.')}>.</ButtonStyle>
      <ButtonStyle className="button-equals" onClick={() => props.handleEquals('=')}>=</ButtonStyle>
    </StyledDiv>
  );
};

export default ButtonSection;