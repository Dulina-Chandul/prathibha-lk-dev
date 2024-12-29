import React, { useState } from "react";

const DailyJournalTab = () => {
  const [date, setData] = useState([]);

  return (
    <div>
      <header className="w-screen text-center mt-10">
        <h1 className="text-3xl font-bold">My Daily Journal</h1>
        <p className="mt-1">
          Track your progress and improve your writing with AI feedback!
        </p>
        {/* <input type="Date" /> */}
      </header>
    </div>
  );
};

export default DailyJournalTab;
