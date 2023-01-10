import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT"
        alt="logo-here"
      ></img>
    </a>
  );
};

const Header = () => {
  return (
    <>
      <div className="nav-item">
        <Title />

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "83041",
      name: "Lassi Wassi",
      uuid: "565e7c53-4e1a-4cdb-8f0c-87d1d229ecff",
      city: "6",
      area: "Kothrud",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "qt0fjw61mfp0uf6yincv",
      cuisines: ["Lebanese", "Beverages", "Fast Food"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: "lassi-wassi-kothrud-kothrud",
        city: "pune",
      },
      cityState: "6",
      address: "Shop 4, Vanraji Society, MIT College Road, Kothrud, Pune",
      locality: "Vanraji Society",
      parentId: 123657,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "83041",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "494766",
      name: "The Chinese Factory",
      uuid: "31c42af9-f495-4576-9d46-481dba31579a",
      city: "6",
      area: "Kothrud",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "jawohak4yfwklgdb2xtr",
      cuisines: ["Chinese", "Tibetan"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "the-chinese-factory-pimple-saudagar-pimple-saudagar-2",
        city: "pune",
      },
      cityState: "6",
      address:
        "Plot no -51 , Pu Bha bahve road , near mokate swimming tank, in front of yugma socity , gujrat colony , kothrud , pune -411038",
      locality: "gujrat colony",
      parentId: 11720,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5662620~p=4~eid=00000185-971f-41cf-1e0d-306c006c047f",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "494766",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "101442",
      name: "Shri Swami Samartha Pure Veg",
      uuid: "86856c3b-0de1-4727-9861-8ed12211ab33",
      city: "6",
      area: "Kothrud",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ewqymr1z4oagie0k8a5j",
      cuisines: ["North Indian", "Chinese", "Biryani", "Desserts"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "shri-swami-samartha-pure-veg-paud-road-kothrud",
        city: "pune",
      },
      cityState: "6",
      address:
        "88/1, Sai Sayaji Building, Paud Road, Near Kinara Hotel, Kothrud, Pune",
      locality: "Near Kinara Hotel",
      parentId: 187092,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "101442",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "107446",
      name: "Uncle's Chinese",
      uuid: "e9f75321-4dc6-4889-a85f-c9b069320e73",
      city: "6",
      area: "Bhusari Colony Paud Road",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "wowg4d8ifov3wvqfvejj",
      cuisines: ["Chinese", "Pan-Asian", "Thai", "Tibetan", "North Eastern"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "uncles-chinese-bhusari-colony-kothrud-bus-depot-kothrud",
        city: "pune",
      },
      cityState: "6",
      address:
        "Plot No 7, Sagar Housing Society, Opposite Bank Of Maharashtra, NDA Road, Bavdhan Khurd",
      locality: "Bhusari Colony Paud Road",
      parentId: 219488,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5662457~p=7~eid=00000185-971f-41cf-1e0d-306d006c0762",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "107446",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "248965",
      name: "Singh Saab",
      uuid: "68563a86-696c-49b0-80f8-7e5eceede210",
      city: "6",
      area: "Kothrud",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "euxwo9tk4jg5rjte2k8e",
      cuisines: [
        "Indian",
        "Snacks",
        "Punjabi",
        "Street Food",
        "Desserts",
        "Beverages",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 0.4000000059604645,
      slugs: {
        restaurant: "singh-saab-kothrud-kothrud",
        city: "pune",
      },
      cityState: "6",
      address:
        "S.R.no.129, Plot no.3/2 Ideal Co.op Hsg Society Kothrud Paud Road Pune 411029",
      locality: "Hsg Society",
      parentId: 2041,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "248965",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.4000000059604645,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "23722",
      name: "McDonald's",
      uuid: "8427a58f-a4e6-4de8-b57e-edf31db61ffb",
      city: "6",
      area: "Kothrud",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "7bb739d7f6ae8b4ce8ed590765dffd2f",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "mc-donaldsd-kothrud-kothrud",
        city: "pune",
      },
      cityState: "6",
      address:
        "Survey-No-127, Gopal House, Next to Kimiya Veg Resturant, Karve Road, Kothrud. Pune 411029",
      locality: "Karve Road",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "23722",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
];

// const burgerKing = {
//   image:
//     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ozyardjn0b2t66ppbfv6",
//   name: "McDonald's",
//   cusine: ["American", "French"],
//   rating: "4.2",
// };

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, locality }) => {
  //   console.log(props);
  //   const { cloudinaryImageId, name, cuisines, locality } = restaurant.data;
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <h1>{name}</h1>
      <h2>{cuisines.join(" ")}</h2>
      <h3>{locality}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <div className="restaurant-card">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

const Footer = () => {
  return <h1></h1>;
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
