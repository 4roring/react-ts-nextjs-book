import React, { memo, useCallback, useState } from "react";

// 기본은 부모 컴포넌트가 다시 그려지면 자식도 다시 그려짐
// 다시 렌더링 되는 것을 막기 위해 메모이제이션 (캐싱)을 사용
// props나 context 값이 바뀌지 않은 경우 부모컴포넌트에 의한 다시 그리기가 발생하지 않음

// useCallback
// 함수를 메모이제이션 하기 위한 훅

type ButtonProps = {
  onClick: () => void;
};

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;
  console.log(`DecrementButton이 다시 그려졌습니다.`);
  return <button onClick={onClick}>Decrement</button>;
};

// DecreamentButton과 마찬가지이긴함
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log(`IncrementButton이 다시 그려졌습니다.`);
  return <button onClick={onClick}>Increment</button>;
});

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log(`DoubleButton이 다시 그려졌습니다.`);
  return <button onClick={onClick}>Double</button>;
});

type FizzProps = {
  isFizz: boolean;
};

const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`);
  return <span>{isFizz ? "Fizz" : ""}</span>;
};

type BuzzProps = {
  isBuzz: boolean;
  onClick: () => void;
};

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props;

  console.log(`Buzz가 다시 그려졌습니다. isBuzz=${isBuzz}`);
  return <span onClick={onClick}>{isBuzz ? "Buzz" : ""}</span>;
});

export const Parent = () => {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((c) => c - 1);
  const increment = () => setCount((c) => c + 1);
  const double = useCallback(() => setCount((c) => c * 2), []);
  // const [count, setCount] = useState(1);
  // const isFizz = count % 3 === 0;
  // const isBuzz = count % 5 === 0;
  // const onBuzzClick = () => {
  //   console.log(`onBuzzClick isBuzz=${isBuzz}`);
  // };
  // console.log(`Parent가 다시 그려졌습니다. count=${count}`);

  return (
    <div>
      <p>Count: {count}</p>

      {/* 부모가 다시 그려지면 얘도 다시 그려짐 */}
      <DecrementButton onClick={decrement} />
      {/* 부모가 다시 그려지면 얘도 다시 그려짐 */}
      <IncrementButton onClick={increment} />
      {/* 부모가 다시 그려져도 얘는 useCallback을 감싼 함수를 호출하여 다시그려지지 않음 */}
      <DoubleButton onClick={double} />
      {/* <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{count}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p> */}
    </div>
  );
};

export default Parent;
