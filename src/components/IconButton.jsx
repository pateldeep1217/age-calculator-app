function IconButton({ Icon }) {
  return (
    <button className="z-50 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-primary-purple hover:bg-neutral-off-black">
      <Icon />
    </button>
  );
}

export default IconButton;
