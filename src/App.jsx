import CustomInput from "./components/CustomInput"
import IconButton from "./components/IconButton"
import  ArrowIcon from './assets/icon-arrow.svg?react';
import AgeText from "./components/AgeText";
import DisplayAge from "./components/DisplayAge";




function App() {


  return (
    <main className="font-poppins h-screen w-screen bg-neutral-light-grey  px-4 overflow-scroll py-12">
      
      <div className="bg-white px-6 py-12 lg:max-w-[55.2rem] mx-auto rounded-3xl rounded-br-[100px] max-w-[25rem] transition-all ">

          <div className=" flex justify-between">
            <div className="  flex flex-col">
              <label htmlFor="day" className="font-400i text-neutral-smokey-grey text-xs uppercase tracking-widest pb-1">Day</label>
              <CustomInput/>
            </div>

            <div className="   flex flex-col">
              <label htmlFor="day" className="font-400i text-neutral-smokey-grey text-xs uppercase tracking-widest pb-1">Month</label>
              <CustomInput/>
            </div>

            <div className="  flex flex-col ">
              <label htmlFor="day" className="font-400i text-neutral-smokey-grey text-xs uppercase tracking-widest pb-1">Year</label>
              <CustomInput/>
            </div>
          </div>

       
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
