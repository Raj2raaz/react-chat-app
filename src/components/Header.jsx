import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Introductions</h2>

        <p className="text-sm text-gray-500">
          This Channel Is For Company Wide Chatter
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="pt-2">3 / 100</div>
        <FontAwesomeIcon icon={faUserGroup} className="text-gray-600" />
      </div>
    </header>
  );
}

export default Header;
