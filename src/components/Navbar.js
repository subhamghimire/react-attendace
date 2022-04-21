import updateClock from "../partials/nepali";

import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    updateClock();
  });
  return (
    <div className="border-b border-grey-grey">
      <nav className="flex sm:justify-center flex-wrap flex-row p-6">
        <div className="flex flex-shrink-0 text-white mr-6 gap-4">
          <span className="font-semibold text-xl tracking-tight text-white-dim">
            Attendance
          </span>
          <div className="flex flex-row">
            <div className="text-white-white tracking-tight mt-3 align-middle">
              <div id="DATE_IN_NEPALI"></div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
