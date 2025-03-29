export default function Separator({ label = 'OR' }) {
  return (
    <div className='flex items-center my-5.5 mb-5.5 w-full'>
      <div className='h-[1px] bg-gray-300 flex-1' />
      <span className='px-4 text-[13px] text-gray-500 font-semibold'>{label}</span>
      <div className='h-[1px] bg-gray-300 flex-1' />
    </div>
  )
}
