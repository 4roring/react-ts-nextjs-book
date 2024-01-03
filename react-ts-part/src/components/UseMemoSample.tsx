import React, { useState, useMemo } from "react";

const UseMemoSample = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    setItems((prev) => {
      return [...prev, text];
    });
    setText("");
  };

  const numberOfCharacter1 = items.reduce((sub, item) => sub + item.length, 0);

  // items 가 변경될 떄에만 다시 렌더링
  const numberOfCharacter2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0);
  }, [items]);

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input type="text" value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Number of character 1: {numberOfCharacter1}</p>
        <p>Number of character 2: {numberOfCharacter2}</p>
      </div>
    </div>
  );
};

export default UseMemoSample;
