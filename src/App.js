import "./styles.css";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 flex flex-col items-center justify-center">
      <h1 className="mb-10 text-4xl text-white font-semibold">
        Let's Try Headless UI!
      </h1>

      <div>
        <Switch checked={isEnabled} onChange={setIsEnabled}>
          <span className="block bg-white rounded shadow p-2 h-20 w-56 flex">
            <span
              className={`block h-full w-1/2 rounded transition duration-300 ease-in-out transform ${
                isEnabled ? "bg-green-500 translate-x-full" : "bg-red-500"
              }`}
            ></span>
          </span>
          {isEnabled && "i am enabled!"}
          {!isEnabled && "i am not enabled!"}
        </Switch>
      </div>
    </div>
  );
}
