import React from "react";

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div style={{ padding: "16px", backgroundColor: "grey" }}>
      <label htmlFor="name">이름</label>
      <input className="input-name" id="name" type="text" onChange={onChange} />
    </div>
  );
};

export default Name;
