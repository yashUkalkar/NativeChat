// Packages
import { useState } from "react";

// Assets
import AddIcon from "../../assets/AddIcon";

export default function AddNewChat() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search people..."
          className={
            "transform transition origin-right" +
            (searchOpen ? "" : " scale-x-0")
          }
        />
        <div
          onClick={() => setSearchOpen(!searchOpen)}
          className="absolute right-0 top-[50%] -translate-y-1/2 cursor-pointer transition hover:scale-110 active:scale-100"
          title="Add new chat"
        >
          <AddIcon />
        </div>
      </div>
    </div>
  );
}
