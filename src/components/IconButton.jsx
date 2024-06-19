

function IconButton({Icon}) {
  return (
    <button className="bg-primary-purple w-[64px] h-[64px]  flex justify-center items-center rounded-full hover:bg-neutral-off-black">
      <Icon/>
  </button>
  )
}

export default IconButton