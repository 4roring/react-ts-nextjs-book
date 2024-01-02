const Text = (props: { contents: string }) => {
  const { contents } = props;
  return <p className="text">{contents}</p>;
};

const Message = (props: {}) => {
  const content1 = "This is parent component";
  const content2 = "Message uses Text component";

  return (
    <div>
      <Text contents={content1} />
      <Text contents={content2} />
    </div>
  );
};

export default Message;
