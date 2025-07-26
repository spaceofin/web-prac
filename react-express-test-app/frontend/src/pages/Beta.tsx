import { useState } from "react";

export default function Beta() {
  const [getResponseMessage, setGetResponseMessage] = useState("");
  const [postResponseMessage, setPostResponseMessage] = useState("");
  const [inputValue, setInputValue] = useState("");

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

  const handlePostRequestClick = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/test-cors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
        }),
      });
      const data = await res.text();
      if (data) setPostResponseMessage(data);
    } catch (err) {
      console.error("POST request failed:", err);
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
        <div className="flex flex-col gap-5 overflow-hidden">
          <div className="flex flex-col bg-gray-200/50 w-[500px] h-[350px] p-10 rounded-md gap-5">
            <h2 className="text-orange-500">POST</h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-end">
                <button
                  className="flex justify-center items-center w-64 bg-orange-500/50 text-lg px-4 rounded-md border-orange-600 border-4 hover:cursor-pointer"
                  onClick={handlePostRequestClick}>
                  Request with Preflight
                </button>
              </div>
              <div className="flex items-center text-lg gap-3">
                <label htmlFor="testInput" className="text-nowrap">
                  Message for POST:
                </label>
                <input
                  id="testInput"
                  value={inputValue}
                  placeholder="Message is required"
                  onChange={(e) => setInputValue(e.target.value)}
                  className="bg-orange-200 w-full h-7 rounded-sm text-sm px-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full h-full">
              <h3>Respond</h3>
              <div className="w-full h-[100px] bg-slate-200 rounded-sm p-2 overflow-x-hidden">
                {postResponseMessage}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
