import React from "react";

const Ui = () => {
  return (
    <div className="m-auto w-4/5">
      <div className="flex flex-wrap gap-8 justify-between">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              className="animate-pulse bg-slate-200 w-72 h-96"
              key={index}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Ui;
