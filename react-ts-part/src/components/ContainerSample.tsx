import React from "react";

const TitleContext = React.createContext("");

const Title = () => {
  return (
    <TitleContext.Consumer>{(title) => <h1>{title}</h1>}</TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = "React Book";

  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props;

  return (
    <div style={{ background: "red" }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

const Parent = (): JSX.Element => {
  return (
    <Container title="Hello">
      <Page />
      <p>이 부분이 배경색으로 둘러싸여 있습니다.</p>
    </Container>
  );
};

export default Parent;
