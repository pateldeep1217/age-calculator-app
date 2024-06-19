

function IconButton({Icon}) {
  return (
    <button className="bg-primary-purple w-[64px] h-[64px]  flex justify-center items-center rounded-full hover:bg-neutral-off-black  z-50">
      <Icon/>
    </button>
  )
}

export default IconButton