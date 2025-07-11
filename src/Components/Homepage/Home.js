// import React from "react";
// import Header from "./Header";
// import CategoryTabs from "./CategoryTabs";
// import ProfilePage from "./ProfilePage";
// import { Route, Routes } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import OffersFilters from "./OffersFilters";
// import DestinationList from "./DestinationList";
// import BottomBar from "./BottomBar";
// import WhatsAppButton from "./WhatsAppButton";

// export default function Home() {

//   const location = useLocation();

//   return (
//     <div className="font-sans bg-white text-black">
//       <Routes>
//         <Route path="/" element={<Header />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>

//       {location.pathname === "/" && (
//         <div className="transform -translate-y-[80px]">
//           <CategoryTabs />
//         </div>
//       )}

//       <OffersFilters />

//       <DestinationList
//         title="Destinations For You"
//         destinations={[
//           { name: "Manali", rating: 4.3, discount: true },
//           { name: "Jaipur", rating: 4.3 },
//           { name: "Andaman", rating: 4.3 },
//         ]}
//       />

//       <DestinationList
//         title="Explore India"
//         destinations={[
//           { name: "Tiger Reserve", rating: 4.3 },
//           { name: "Kashmir", rating: 4.3 },
//           { name: "Varanasi", rating: 4.3, discount: true },
//         ]}
//       />

//       <BottomBar />
//       <WhatsAppButton />
//     </div>
//   );
// }


import React from "react";
import Header from "./Header";
import CategoryTabs from "./CategoryTabs";
import ProfilePage from "./ProfilePage";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import OffersFilters from "./OffersFilters";
import DestinationSection from "./DestinationSection";
import BottomBar from "./BottomBar";
import WhatsAppButton from "./WhatsAppButton";

export default function Home() {

  const location = useLocation();

  return (
    <>
      <div className="font-sans bg-white text-black">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        {location.pathname === "/" && (
          <div className="-mt-20">
            <CategoryTabs />
          </div>

        )}

        <OffersFilters />
        {/* Wrap all scrollable content in a div with padding-bottom */}
        <div className="pb-20"> {/* Enough space for bottom bar and button */}
          <DestinationSection
            title="Destinations For You"
            destinations={[
              {
                name: "Manali",
                rating: 4.3,
                discount: true,
                imageUrl: "https://www.holidify.com/images/bgImages/MANALI.jpg",
                subtitle: "Best treks in winter",
              },
              {
                name: "Jaipur",
                rating: 4.3,
                imageUrl: "https://www.holidify.com/images/bgImages/JAIPUR.jpg",
                subtitle: "Forts & Palaces",
              },
              {
                name: "Andaman",
                rating: 4.3,
                imageUrl: "https://www.holidify.com/images/bgImages/ANDAMAN-AND-NICOBAR-ISLANDS.jpg",
                subtitle: "Honeymoon in islands",
              },
               {
                name: "Manali",
                rating: 4.3,
                discount: true,
                imageUrl: "https://www.holidify.com/images/bgImages/MANALI.jpg",
                subtitle: "Best treks in winter",
              },
              {
                name: "Jaipur",
                rating: 4.3,
                imageUrl: "https://www.holidify.com/images/bgImages/JAIPUR.jpg",
                subtitle: "Forts & Palaces",
              },
              {
                name: "Andaman",
                rating: 4.3,
                imageUrl: "https://www.holidify.com/images/bgImages/ANDAMAN-AND-NICOBAR-ISLANDS.jpg",
                subtitle: "Honeymoon in islands",
              },
            ]}
          />

          <DestinationSection
            title="Explore India"
            destinations={[
              {
                name: "Tiger Reserve",
                rating: 4.3,
                imageUrl: "https://www.holidify.com/images/cmsuploads/compressed/1480321661_tiger_pench_20181011143833.jpg",
                subtitle: "Wildlife Safari",
              },
              {
                name: "Kashmir",
                rating: 4.3,
                imageUrl: "https://www.holidify.com/images/bgImages/KASHMIR.jpg",
                subtitle: "Paradise on Earth",
              },
              {
                name: "Varanasi",
                rating: 4.3,
                discount: true,
                imageUrl: "https://www.holidify.com/images/bgImages/VARANASI.jpg",
                subtitle: "Spiritual Journey",
              },
               {
                name: "Tiger Reserve",
                rating: 4.3,
                imageUrl: "https://www.holidify.com/images/cmsuploads/compressed/1480321661_tiger_pench_20181011143833.jpg",
                subtitle: "Wildlife Safari",
              },
              {
                name: "Kashmir",
                rating: 4.3,
                imageUrl: "https://www.holidify.com/images/bgImages/KASHMIR.jpg",
                subtitle: "Paradise on Earth",
              },
              {
                name: "Varanasi",
                rating: 4.3,
                discount: true,
                imageUrl: "https://www.holidify.com/images/bgImages/VARANASI.jpg",
                subtitle: "Spiritual Journey",
              },
            ]}
          />

        </div>

        <BottomBar />
        <WhatsAppButton />
      </div>
    </>
  );
}