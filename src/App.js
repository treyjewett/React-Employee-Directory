import React from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
  return (
    <Wrapper>
      <Header />
      <Search />
      <Table />
    </Wrapper>
  );
}

export default App;