import { useContext } from 'react';
import { CalcuContext } from '../context/CalcuContext';

//to assign className according to there sign
const getStyleName = (btn) => {
  const className = {
    '=': 'equals',
    '*': 'opt',
    '-': 'opt',
    '+': 'opt',
    AC: 'opt',
    DEL: 'opt',
    '/': 'opt',
    0: 'zero',
  };
  return className[btn];
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcuContext);

  // User click dot
  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
    });
  };
  // User click AC
  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0 });
  };
  // User click number
  const handleClickButton = () => {
    const numberString = value.toString();

    let numberValue;
    if (numberString === '0' && calc.num === 0) {
      numberValue = '0';
    } else {
      numberValue = Number(calc.num + numberString);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };
  // User click operations
  const signClick = () => {
    setCalc({
      sign: value,
      res: calc.num || calc.res,
      num: 0,
    });
  };
  // User click equals
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          '*': (a, b) => a * b,
          '/': (a, b) => a / b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: '',
        num: 0,
      });
    }
  };
  // User click DEL
  const deleteClick = () => {
    let number = calc.num.toString().slice(0, -1);

    let numberValue;
    if (number === '') {
      numberValue = '0';
    } else {
      numberValue = Number(number);
    }

    setCalc({
      ...calc,
      num: numberValue,
    });
  };

  const handleBtnClick = () => {
    const results = {
      '.': dotClick,
      AC: resetClick,
      DEL: deleteClick,
      '/': signClick,
      '*': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
    };
    if (results[value]) {
      return results[value]();
    } else {
      return handleClickButton();
    }
  };

  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button`}
    >
      {value}
    </button>
  );
};

export default Button;
