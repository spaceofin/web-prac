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

  const handleGetRequestWithPreflightClick = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/test-cors`, {
        method: "GET",
        headers: {
          "X-my-header": "test",
        },
      });

      const data = await res.text();
      if (data) setGetResponseMessage(data);
    } catch (err) {
      console.error("GET with Preflight request failed:", err);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <h1>Test CORS</h1>
      <div className="flex flex-col gap-5 overflow-hidden">
        <div className="flex flex-col bg-gray-200/50 w-[500px] h-[350px] p-10 rounded-md gap-5">
          <h2 className="text-orange-500">GET</h2>
          <div className="flex flex-col items-end gap-2">
            <button
              className="flex justify-center items-center w-64 bg-orange-500/50 text-lg px-4 rounded-md border-orange-600 border-4 hover:cursor-pointer"
              onClick={handleGetRequestClick}>
              Request
            </button>
            <button
              className="flex justify-center items-center w-64 bg-orange-500/50 text-lg px-4 rounded-md border-orange-600 border-4 hover:cursor-pointer"
              onClick={handleGetRequestWithPreflightClick}>
              Request with Preflight
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
