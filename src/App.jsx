import CustomInput from "./components/CustomInput"




function App() {


  return (
    <main className="font-poppins h-screen w-screen bg-neutral-light-grey flex flex-col">
      
      <section className=" bg-white mt-20 flex justify-between p-5 w-[343px] lg:w-[840px] mx-auto">

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
      </section>

      
    </main>
  )
}

export default App
