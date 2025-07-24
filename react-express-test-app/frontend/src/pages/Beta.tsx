import { useState } from "react";

export default function Beta() {
  const [getResponseMessage, setGetResponseMessage] = useState("");

  const handleGetRequestClick = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/test-cors`, {
        method: "GET",
      });
      const data = await res.text();
      if (data) setGetResponseMessage(data);
    } catch (err) {
      console.error("GET request failed:", err);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <h1>Test CORS</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col bg-gray-200/50 w-[500px] h-[250px] p-10 rounded-md gap-5">
          <div className="flex justify-between">
            <h2 className="text-orange-500">GET</h2>
            <button
              className="flex justify-center items-center w-32 bg-orange-500/50 text-lg px-4 rounded-md border-orange-600 border-4 hover:cursor-pointer"
              onClick={handleGetRequestClick}>
              Request
            </button>
          </div>
          <div className="flex flex-col gap-1 w-full h-full">
            <h3>Respond</h3>
            <div className="w-full h-[80px] bg-slate-200 rounded-sm p-2 overflow-x-hidden">
              {getResponseMessage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
