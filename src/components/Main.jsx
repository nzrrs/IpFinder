// OTHER IMPORTS

// REACT IMPORTS

export default function Main() {
  return (
    <section className="flex justify-center items-center">
      {/* RESULT-CONTAINER */}
      <div className="max-w-[1100px] w-full h-[180px] bg-white rounded-2xl shadow-xl absolute z-100">
        <div className="flex justify-between items-center h-full text-start divide-x-[3px] divide-[#D0D0D0]">
          <div className="flex-1 text-center">
            <h3 className="text-[20px] text-gray-400">IP ADDRESS</h3>
            <p className="text-[30px]">192.168.1.1.125.1</p>
          </div>

          <div className="flex-1 text-center">
            <h3 className="text-[20px] text-gray-400">Location</h3>
            <p className="text-[30px]">Brooklyn,NY 1001</p>
          </div>

          <div className="flex-1 text-center">
            <h3 className="text-[20px] text-gray-400">TIMEZONE</h3>
            <p className="text-[30px]">UTC -05:00</p>
          </div>

          <div className="flex-1 text-center">
            <h3 className="text-[20px] text-gray-400">ISP</h3>
            <p className="text-[30px]">INWI</p>
          </div>
        </div>
      </div>
    </section>
  );
}
