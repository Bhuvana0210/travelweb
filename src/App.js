// import "./App.css";
// import React from "react";
// import Home from "./Components/Homepage/HomePage";

// export default function App() {

  
//   return (
//     <>
//       <div className="">
//         <Home/>
//       </div>
//     </>
//   );
// }


// import "./App.css";
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import HomePage from "./Components/HomePage/HomePage";
// import ProfilePage from "./Components/ProfilePage/ProfilePage"; // Create this if not already

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         {/* Add other routes like AboutPage, ContactPage here */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// App.js (✅ Should NOT contain <BrowserRouter>)
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
