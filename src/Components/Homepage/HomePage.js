// import React from "react";
// import Header from "./Header";
// import CategoryTabs from "./CategoryTabs";
// import OffersFilters from "./OffersFilters";
// import DestinationCardSection from "./DestinationCardSection";
// import DestinationListSection from "./DestinationListSection";
// import BottomBar from "../../Components/BottomBar/BottomButtons";
// import WhatsAppButton from "../../Components/BottomBar/WhatsAppButton";

// export default function HomePage() {
//   const exploreIndiaDestinations = [
//     {
//       name: "Tiger Reserve",
//       rating: 4.3,
//       imageUrl:
//         "https://www.holidify.com/images/cmsuploads/compressed/1480321661_tiger_pench_20181011143833.jpg",
//     },
//     {
//       name: "Kashmir",
//       rating: 4.3,
//       imageUrl: "https://www.holidify.com/images/bgImages/KASHMIR.jpg",
//     },
//     {
//       name: "Varanasi",
//       rating: 4.3,
//       discount: true,
//       imageUrl: "https://www.holidify.com/images/bgImages/VARANASI.jpg",
//     },
//   ];

//   const destinationsForYou = [
//     {
//       name: "Manali",
//       rating: 4.3,
//       discount: true,
//       imageUrl: "https://www.holidify.com/images/bgImages/MANALI.jpg",
//     },
//     {
//       name: "Jaipur",
//       rating: 4.3,
//       imageUrl: "https://www.holidify.com/images/bgImages/JAIPUR.jpg",
//     },
//     {
//       name: "Andaman",
//       rating: 4.3,
//       imageUrl:
//         "https://www.holidify.com/images/bgImages/ANDAMAN-AND-NICOBAR-ISLANDS.jpg",
//     },
//   ];

//   return (
//     <div className="font-sans bg-white text-black">
//       {/* Header and Categories */}
//       <Header />
//       <div className="-mt-20">
//         <CategoryTabs />
//       </div>

//       {/* Offers Section */}
//       <OffersFilters />

//       {/* Destination Sections */}
//       <div className="pb-20">
//         <DestinationCardSection
//           title="Destinations For You"
//           destinations={destinationsForYou}
//         />
//         <DestinationListSection
//           title="Explore India"
//           destinations={exploreIndiaDestinations}
//         />
//       </div>

//       {/* Bottom Buttons */}
//       <BottomBar />
//       <WhatsAppButton />
//     </div>
//   );
// }


import React from "react";
import Header from "./Header";
import CategoryTabs from "./CategoryTabs";
import OffersFilters from "./OffersFilters";
import DestinationSection from "./DestinationCardSection";
import DestinationListSection from "./DestinationListSection";
import BottomBar from "../BottomBar/BottomButtons";
import WhatsAppButton from "../BottomBar/WhatsAppButton";
import useFetch from "../Hooks/useFetch";
import travelLoader from "../../Assets/loader_travel.gif"


// 🔹 Destination Card Data (Large Cards)
const destinationsForYou = [
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
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPnyYf8VrkkukeMk-MQJRvfTmWCb0Gq9Ii-w&s",
    subtitle: "Honeymoon in islands",
  },
  {
    name: "Meghalaya",
    rating: 4.3,
    discount: true,
    imageUrl: "https://chalotravellers.com/wp-content/uploads/2024/08/Dawki-Shnongpdeng-meghalaya.jpg",
    subtitle: "Serene screneries",
  },
  {
    name: "Kutch",
    rating: 4.3,
    imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/rann-of-kutch-kutch-gujarat-3-attr-hero?qlt=82&ts=1726733961119",
    subtitle: "The white desert",
  },

];

// 🔹 Destination List Data (Small Cards)
const exploreIndiaDestinations = [
  {
    name: "Tiger Reserve",
    rating: 4.3,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfT1W3M6OYLJBmqwCHevn8TiBNJnjq9uzUEA&s",
  },
  {
    name: "Kashmir",
    rating: 4.3,
    imageUrl: "https://www.holidify.com/images/bgImages/KASHMIR.jpg",
  },
  {
    name: "Varanasi",
    rating: 4.3,
    discount: true,
    imageUrl: "https://www.holidify.com/images/bgImages/VARANASI.jpg",
  },
  {
    name: "Coorg",
    rating: 4.3,
    imageUrl: "https://htoindia.com/wp-content/uploads/2019/06/Coorg.jpg",
  },
  {
    name: "Lakshdweep",
    rating: 4.3,
    imageUrl: "https://s7ap1.scene7.com/is/image/incredibleindia/thinnakara-kavaratti-lakshwadeep-1-musthead-hero?qlt=82&ts=1727011585498",
  },
];

export default function HomePage() {


  const {
    data: content,
    loading,
    error,
  } = useFetch("https://travelweb-admin-backend.onrender.com/api/home-content");

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={travelLoader} alt="Loading..." className="w-74 h-74" />
      </div>
    );
  }

  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="font-sans bg-white text-black">
      {/* Header & Tabs */}
      <Header content={content} />
      <div className="-mt-20">
        <CategoryTabs />
      </div>

      {/* Offers */}
      <OffersFilters />

      {/* Main Sections */}
      <div className="pb-20">
        {/* Large Card Style Section */}
        <DestinationSection
          title="Destinations For You"
          destinations={destinationsForYou}
        />

        {/* Small List Card Style Section */}
        <DestinationListSection
          title="Explore India"
          destinations={exploreIndiaDestinations}
        />
      </div>

      {/* Bottom Bar & WhatsApp */}
      <BottomBar />
      <WhatsAppButton />
    </div>
  );
}
