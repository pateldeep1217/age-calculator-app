import { useState } from "react";
import DisplayAge from "./components/DisplayAge";
import Form from "./components/Form/Form";

function App() {
  const [age, setAge] = useState({});

  return (
    <main className="h-screen w-screen overflow-scroll bg-neutral-light-grey px-4 py-12 font-poppins font-semibold">
      <div className="mx-auto max-w-[25rem] rounded-3xl rounded-br-[100px] bg-white px-6 py-12 transition-all lg:max-w-[55.2rem] lg:rounded-br-[200px] lg:px-[56px]">
        <Form setAge={setAge} />
        <DisplayAge age={age} />
      </div>
    </main>
  );
}

export default App;
