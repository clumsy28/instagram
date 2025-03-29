export default function Button({ type = 'button', children, ...props }) {
  return (
    <button className='bg-[#0095F6] hover:bg-[#1877F2] cursor-pointer text-white rounded-lg w-full h-8 text-sm font-semibold' {...props}>
      {children}
    </button>
  )
}