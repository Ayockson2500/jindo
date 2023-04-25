import React from 'react'

const Toggle = () => {
    const [enabled, setEnabled] = useState(false);
    return (
      <div className="relative flex flex-col items-center justify-center  overflow-hidden">
        <div className="flex">
          <label class="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              readOnly
            />
            <div
              onClick={() => {
                setEnabled(!enabled);
              }}
              className="w-11 h-6 bg-fcGray4 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-none after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"
            ></div>
          </label>
        </div>
      </div>
    );
  };

  export default Toggle;