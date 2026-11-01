import React from "react";
import SideNavbar from "./components/SideNavbar";
import Header from "./components/Header";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div className="flex h-screen">
      <SideNavbar />

      <main className="flex min-w-0 flex-1 flex-col">
        <Header />
        <ChatBox />
      </main>
    </div>
  );
}

export default App;
