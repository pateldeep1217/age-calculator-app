import CustomInput from "./components/CustomInput"
import IconButton from "./components/IconButton"
import  ArrowIcon from './assets/icon-arrow.svg?react';




function App() {


  return (
    <main className="font-poppins h-screen w-screen bg-neutral-light-grey border">
      
      <div className="bg-white mt-20  p-5 w-[343px] lg:w-[840px] mx-auto rounded-3xl rounded-br-[100px]">

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
        <IconButton Icon={ArrowIcon}/>
          

      </div>

      
    </main>
  )
}

export default App
