export default function Card({ children, props }) {
  return (
    <div className="border-gray-300 border-2 py-12 px-60 sm:px-10 text-center rounded-md">
      {children}
    </div>
  )
}