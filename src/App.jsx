import './App.css';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import Screen from './components/Screen';
import Wrapper from './components/Wrapper';
import CalcuProvider from './context/CalcuContext';

const btnValues = [
  ['AC', 'DEL', '/', '*'],
  [7, 8, 9, '-'],
  [4, 5, 6, '+'],
  [1, 2, 3, '='],
  [0, '.'],
];

function App() {
  return (
    <div>
      <CalcuProvider>
        <Wrapper>
          <Screen />
          <ButtonBox>
            {btnValues.flat().map((btn, i) => (
              <Button value={btn} key={i} />
            ))}
          </ButtonBox>
        </Wrapper>
      </CalcuProvider>
    </div>
  );
}

export default App;
