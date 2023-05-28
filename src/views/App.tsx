import React from "react";
import { Helmet } from "react-helmet";
import Form from "../components/form";
import Header from "../components/header";

function App() {
  return (
    <>
      <Helmet>
        <title>React Form App</title>
      </Helmet>
      <main className="absolute flex flex-col items-center w-full min-h-screen gap-12 py-12 bg-background-gradient md:py-28">
        <Header />
        <Form />
      </main>
    </>
  );
}

export default App;
