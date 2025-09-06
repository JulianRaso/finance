export default function Navbar() {
  return (
    <div className="grid grid-cols-3 items-center w-full p-4">
      <p className="text-2xl italic text-center col-end-3">
        Finance - Exchange
      </p>
      <div className="flex items-center justify-end gap-2">
        <p>Currency</p>
        <p>Display</p>
      </div>
    </div>
  );
}
