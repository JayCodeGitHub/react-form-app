import React from "react";
import Form from "../components/form";
import Header from "../components/header";

function App() {
  return (
    <main className="absolute w-full min-h-screen bg-background-gradient flex flex-col items-center gap-12 py-12 md:py-28">
      <Header />
      <Form />
    </main>
  );
}

export default App;
