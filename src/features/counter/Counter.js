import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0) 

  return (
    <div className="mb-4 flex justify-center items-center h-screen">
      <button onClick={() => setCount(count + 1)} className="p-2 bg-black text-white rounded-lg">
        Clicked {count} times
      </button>
    </div>
  );
}

export default Counter;
