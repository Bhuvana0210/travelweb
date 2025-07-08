// App.js
import React from "react";
import Header from "./Components/Header";
import CategoryTabs from "./Components/CategoryTabs";
// import OffersFilters from "./Components/OffersFilters";
// import DestinationList from "./Components/DestinationList";
// import BottomBar from "./Components/BottomBar";
// import WhatsAppButton from "./Components/WhatsAppButton";

export default function App() {
  return (
    <div className="font-sans bg-white text-black">
      <Header />
      <div className="transform -translate-y-[80px]">
        <CategoryTabs />
      </div>

      {/*<OffersFilters />

      <DestinationList
        title="Destinations For You"
        destinations={[
          { name: "Manali", rating: 4.3, discount: true },
          { name: "Jaipur", rating: 4.3 },
          { name: "Andaman", rating: 4.3 },
        ]}
      />

      <DestinationList
        title="Explore India"
        destinations={[
          { name: "Tiger Reserve", rating: 4.3 },
          { name: "Kashmir", rating: 4.3 },
          { name: "Varanasi", rating: 4.3, discount: true },
        ]}
      />

      <BottomBar />
      <WhatsAppButton /> */}
    </div>
  );
}