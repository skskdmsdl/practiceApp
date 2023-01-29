import { useState } from "react";

export const useCalculator = () => {
  const [input, setInput] = useState(0); // 2 -> 14
  const [currentOperator, setCurrentOperator] = useState(null); // + -> null
  const [result, setResult] = useState(null); // 12 -> 14
  const [tempInput, setTempInput] = useState(null); // 2
  const [tempOperator, setTempOperator] = useState(null); // +
  const [isClickedOperator, setIsClickedOperator] = useState(false);
  const [isClickedEqual, setIsClickedEqual] = useState(false);

  // const hasInput = input ? true : false;
  // 어떤 값을 boolean값 으로 변환 시키고 싶을 때 !!로 가능(삼항 연산자보다 간단하고 가독성 높음)
  const hasInput = !!input;

  const onPressNum = (num) => {
    if (currentOperator && isClickedOperator) {
      setResult(input);
      setInput(num);
      setIsClickedOperator(false);
    } else {
      // const newInput = input + num // bad case
      const newInput = Number(`${input}${num}`) // good case
      setInput(newInput);
    }
  }

  const onPressOperator = (operator) => {
    if (operator !== "=") {
      setCurrentOperator(operator);
      setIsClickedOperator(true);
      setIsClickedEqual(false);
    } else {
      let finalResult = result;
      const finalInput = isClickedEqual ? tempInput : input;
      const finalOperator = isClickedEqual ? tempOperator : currentOperator;
      switch (finalOperator) {
        case '+':
          finalResult = result + finalInput;
          break;
        case '-':
          finalResult = result - finalInput;
          break;
        case '*':
          finalResult = result * finalInput;
          break;
        case '/':
          finalResult = result / finalInput;
          break;
        default:
          break;
      }
      setResult(finalResult);
      setInput(finalResult);
      setTempInput(finalInput);
      setCurrentOperator(null);
      setTempOperator(finalOperator);
      setIsClickedEqual(true);
    }
  }

  const onPressReset = () => {
    if (hasInput) {
      setInput(0);
    } else {
      setInput(0);
      setCurrentOperator(null);
      setResult(null);
      setTempInput(null);
      setTempOperator(null);
    }
  }

  return {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  }
};
