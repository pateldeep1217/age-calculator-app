
import IconButton from "./components/IconButton"
import  ArrowIcon from './assets/icon-arrow.svg?react';

import DisplayAge from "./components/DisplayAge";
import Form from "./components/Form";




function App() {


  return (
    <main className="font-poppins font-semibold h-screen w-screen bg-neutral-light-grey  px-4 overflow-scroll py-12 ">
      
      <div className="bg-white px-6 lg:px-[56px] py-12 lg:max-w-[55.2rem] mx-auto rounded-3xl rounded-br-[100px] lg:rounded-br-[200px] max-w-[25rem] transition-all ">

   
          <Form/>
       
          <div className=" my-8 relative">
            
            <div className="flex justify-center lg:justify-end">
              <IconButton Icon={ArrowIcon} />
            </div>
          <div className="border-t border-neutral-light-grey absolute w-full top-8 z-0"></div>
          </div>

          <DisplayAge/>


        </div>
          



      
    </main>
  )
}

export default App
