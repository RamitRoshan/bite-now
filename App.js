import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
 


const RestaurantCard = (props) => {
  // destructuring
  const {resData} = props; 
  return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
      <img className="res-logo"
      alt="res-logo" 
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.info.cloudinaryImageId}/>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>Rating: {resData.info.avgRating}⭐</h4>
      <h4>Cost: {resData.info.costForTwo}</h4>
      <h4>Delivery: {resData.info.sla.slaString}</h4>
    </div>
  );
};


const resList = [
  {
    "info": {
      "id": "23678",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/566bfcc0-c4f0-4d1b-816c-45405033b9fb_23678 - Copy (10).jpg",
      "locality": "5th Block",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "65K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-24 04:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Bolt.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "671928",
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
      "locality": "7th Block",
      "areaName": "Koramangla",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
      ],
      "avgRating": 4.2,
      "parentId": "547",
      "avgRatingString": "4.2",
      "totalRatingsString": "5.6K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-24 03:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹119"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "5934",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ac30c19f-5572-448a-9c6a-44be9d986625_5934.jpg",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "103K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 1.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-24 06:55:00",
        "opened": true
      },
      "badges": {},
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {},
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "4.2K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "11211",
      "name": "Taco Bell",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/1cb896a9-746c-4051-938e-89b5b31ddc1e_11211.JPG",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Mexican",
        "Fast Food",
        "Snacks"
      ],
      "avgRating": 4.4,
      "parentId": "1557",
      "avgRatingString": "4.4",
      "totalRatingsString": "26K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "10-15 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-24 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/rx_5_10_min.png",
            "description": "bolt!"
          },
          {
            "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/rx_5_10_min.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹49"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "5.9K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/taco-bell-koramangala-rest11211",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "426776",
      "name": "Theobroma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/14/c539965e-4096-491f-8e0d-d4d4a9c63d8d_426776.JPG",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Beverages"
      ],
      "avgRating": 4.6,
      "parentId": "1040",
      "avgRatingString": "4.6",
      "totalRatingsString": "6.6K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-23 23:15:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Desserts.png",
            "description": "Delivery!"
          },
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                }
              },
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹49"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "562"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/theobroma-koramangala-rest426776",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "74444",
      "name": "Samosa Party",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/18/a0bed024-c4ec-4fd1-b430-46b8c5d455cb_74444.jpg",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Fast Food",
        "Snacks",
        "North Indian", 
        "Sweets", 
        "Punjabi"
      ],
      "avgRating": 4.4,
      "parentId": "6364",
      "avgRatingString": "4.4",
      "totalRatingsString": "18K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-30 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Snacks.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Snacks.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹129"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.7",
          "ratingCount": "223"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/samosa-party-koramangala-rest74444",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "263485",
      "name": "Chaayos: Chai+Snacks=Relax",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/dfbcecfc-b380-4648-930a-b9b56b21e781_263485.JPG",
      "locality": "Kormangala 8th Block",
      "areaName": "Kormangala",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Chaat",
        "Desserts"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "281782",
      "avgRatingString": "4.5",
      "totalRatingsString": "5.2K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2025-09-24 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
          },
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "bolt!",
                  "imageId": "android/static-assets/icons/big_rx.png"
                }
              },
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {},
          "textExtendedBadges": {}
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹84"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {},
          "video": {}
        }
      },
      "reviewsSummary": {},
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {},
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/bangalore/chaayos-chai-snacks-relax-8th-block-kormangala-rest263485",
      "type": "WEBLINK"
    }
  },
  {
"info": {
"id": "656392",
"name": "Subway",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/113d790a-4937-4b7a-a7d3-51cbbabdd50a_656392.jpg",
"locality": "1st Block",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"sandwich",
"Salads",
"wrap",
"Healthy Food"
],
"avgRating": 4.4,
"parentId": "2",
"avgRatingString": "4.4",
"totalRatingsString": "4.4K+",
"sla": {
"deliveryTime": 21,
"lastMileTravel": 1.6,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-24 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹69"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
"type": "WEBLINK"
}
},
{
"info": {
"id": "621512",
"name": "The Belgian Waffle Co.",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/29ddfffe-7016-4548-ae60-1a8f348ffbe6_621512.jpg",
"locality": "K.H.B Colony",
"areaName": "Koramangala",
"costForTwo": "₹200 for two",
"cuisines": [
"Waffle",
"Desserts",
"Ice Cream",
"Beverages"
],
"avgRating": 4.7,
"veg": true,
"parentId": "2233",
"avgRatingString": "4.7",
"totalRatingsString": "2.2K+",
"sla": {
"deliveryTime": 27,
"lastMileTravel": 1.4,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-24 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹79"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-k-h-b-colony-koramangala-rest621512",
"type": "WEBLINK"
}
},
{
"info": {
"id": "10576",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
"locality": "6th Block",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.3,
"parentId": "721",
"avgRatingString": "4.3",
"totalRatingsString": "21K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 0.8,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "0.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-24 05:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹98"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.6",
"ratingCount": "3.6K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
"type": "WEBLINK"
}
},
{
"info": {
"id": "59627",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "ntjshqsv2k7vxtv7vmib",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹251 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "4961",
"avgRatingString": "4.3",
"totalRatingsString": "18K+",
"sla": {
"deliveryTime": 26,
"lastMileTravel": 1.5,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "1.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-24 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹79"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.3",
"ratingCount": "2.0K+"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/la-pinoz-pizza-koramangala-rest59627",
"type": "WEBLINK"
}
},
{
"info": {
"id": "48207",
"name": "Kanti Sweets",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/13/d6d1cd78-187e-4901-b140-3161b64f4121_48207.jpg",
"locality": "3rd Block",
"areaName": "Koramangala",
"costForTwo": "₹150 for two",
"cuisines": [
"Sweets"
],
"avgRating": 4.6,
"veg": true,
"parentId": "4700",
"avgRatingString": "4.6",
"totalRatingsString": "7.2K+",
"sla": {
"deliveryTime": 14,
"lastMileTravel": 0.6,
"serviceability": "SERVICEABLE",
"slaString": "10-15 mins",
"lastMileTravelString": "0.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-23 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/rx_5_10_min.png",
"description": "bolt!"
},
{
"imageId": "Rxawards/_CATEGORY-Mithai.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/rx_5_10_min.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Mithai.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/kanti-sweets-3rd-block-koramangala-rest48207",
"type": "WEBLINK"
}
},
{
"info": {
"id": "238806",
"name": "Starbucks Coffee",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/22/9d570e00-37b7-46a5-b372-0219328969c8_238806.JPG",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹400 for two",
"cuisines": [
"Beverages",
"Cafe",
"Snacks",
"Desserts",
"Bakery",
"Ice Cream"
],
"avgRating": 4.5,
"parentId": "195515",
"avgRatingString": "4.5",
"totalRatingsString": "2.4K+",
"sla": {
"deliveryTime": 13,
"lastMileTravel": 0.9,
"serviceability": "SERVICEABLE",
"slaString": "10-15 mins",
"lastMileTravelString": "0.9 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-23 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/rx_5_10_min.png",
"description": "bolt!"
},
{
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png",
"description": "Delivery!"
},
{
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/rx_5_10_min.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Cafe.png"
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Cafe%20&%20Chai.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "4.4",
"ratingCount": "901"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/starbucks-coffee-koramangala-rest238806",
"type": "WEBLINK"
}
},
{
"info": {
"id": "50842",
"name": "CakeZone Patisserie",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/23/e055b6be-a515-44ba-9afe-bcc6ae83004c_50842.JPG",
"locality": "KORAMANGLA",
"areaName": "6th Block KORAMANGLA",
"costForTwo": "₹200 for two",
"cuisines": [
"Bakery",
"Desserts",
"Sweets",
"Ice Cream"
],
"avgRating": 4.4,
"parentId": "7003",
"avgRatingString": "4.4",
"totalRatingsString": "24K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 0.8,
"serviceability": "SERVICEABLE",
"slaString": "25-35 mins",
"lastMileTravelString": "0.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2025-09-24 01:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
}
],
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "65% OFF",
"subHeader": "UPTO ₹125"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-341e0083-1434-4e2b-886c-5062d5a48f4f"
},
"cta": {
"link": "https://www.swiggy.com/city/bangalore/cakezone-patisserie-koramangla-6th-block-koramangla-rest50842",
"type": "WEBLINK"
}
}
];


// for geeting one particular output
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData = {resList[0]}/>
        <RestaurantCard resData = {resList[1]}/>
        <RestaurantCard resData = {resList[2]}/>
        <RestaurantCard resData = {resList[3]}/>
        <RestaurantCard resData = {resList[4]}/>
        <RestaurantCard resData = {resList[5]}/>
        <RestaurantCard resData = {resList[6]}/>
        <RestaurantCard resData = {resList[7]}/>
        <RestaurantCard resData = {resList[8]}/>
        <RestaurantCard resData = {resList[9]}/>
        <RestaurantCard resData = {resList[10]}/>
        <RestaurantCard resData = {resList[11]}/>
        <RestaurantCard resData = {resList[12]}/>
        
      </div>
    </div>
  );
};

//here, we get all the restaurant 

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="res-container">
//         {resList.map((restaurant) => (
//           <RestaurantCard key={restaurant.info.id} resData={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };


 
//App components


const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};
 

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
 


 