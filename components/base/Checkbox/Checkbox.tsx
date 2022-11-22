import React from "react";

const Checkbox = () => {
  return (
    <div>
      <div>
        <input
          type="checkbox"
          className="form-checkbox bg-indigo-600"
          checked
        />
        <label htmlFor="checkbox-one" className="ml-3">
          Checkbox One
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked
          className="bg-amber-200 hover:bg-amber-400 cursor-pointer 
    w-12 h-12 border-3 border-rose-500 rounded-lg checked:bg-green-500"
        />
        <label htmlFor="checkbox-one" className="ml-3">
          Checkbox Two
        </label>
      </div>

      <div>
        <input
          type="checkbox"
          className="bg-pink-300 hover:bg-pink-400 cursor-pointer 
    w-12 h-12 border-3 border-rose-500 rounded-lg checked:bg-rose-600"
        />
        <label htmlFor="checkbox-one" className="ml-3">
          Checkbox Three
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
