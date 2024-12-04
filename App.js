import React from "react";
import ReactDOM from "react-dom/client";
/*
  Header
    - Logo
    - nav-items
  Body
    - search
    - res-container
      - res-card
        - res-Image
        - res-Name
        - res-cigine
        - rating
  Footer
    - copy rights
    - links 
    - lice's
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="company-logo"
          src="https://cdn.dribbble.com/users/5960208/screenshots/16398589/i_will_2_modern_minimalist_logo_design_within_12_hrs__9__4x.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Constact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//Mock Data
const oneCardData = {
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "30530",
        name: "Hotel Empire",
        cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
        locality: "Vasanth Nagar",
        areaName: "Vasanth Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Kebabs", "Biryani"],
        avgRating: 4.5,
        parentId: "475",
        avgRatingString: "4.5",
        totalRatingsString: "19K+",
        promoted: true,
        adTrackingId:
          "cid=22195830~p=0~adgrpid=22195830#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30530~eid=e4d2db98-8588-42e7-9790-f8c0e46af97d~srvts=1733306396824~collid=83639",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-12-05 02:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                    description: "Delivery!",
                  },
                },
              ],
            },
            textExtendedBadges: {},
            textBased: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.5",
            ratingCount: "13K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "22195830",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=30530&source=collection&query=Biryani",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
    },
    relevance: {
      type: "RELEVANCE_TYPE_ON_MENU_RETURN",
      sectionId: "MENU_RETURN_FOOD",
    },
  },
};
//many mock data
const moreData = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "30530",
          name: "Hotel Empire",
          cloudinaryImageId: "10f8b483521b9359d9c8fcd37f23c9d3",
          locality: "Vasanth Nagar",
          areaName: "Vasanth Nagar",
          costForTwo: "₹300 for two",
          cuisines: ["Kebabs", "Biryani"],
          avgRating: 4.5,
          parentId: "475",
          avgRatingString: "4.5",
          totalRatingsString: "19K+",
          promoted: true,
          adTrackingId:
            "cid=22195830~p=0~adgrpid=22195830#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30530~eid=e4d2db98-8588-42e7-9790-f8c0e46af97d~srvts=1733306396824~collid=83639",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-05 02:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "13K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22195830",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=30530&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3241",
          name: "Meghana Foods",
          cloudinaryImageId: "iivuhjc2mswi9lublktf",
          locality: "Residency Road",
          areaName: "Residency Road",
          costForTwo: "₹500 for two",
          cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
          avgRating: 4.7,
          parentId: "635",
          avgRatingString: "4.7",
          totalRatingsString: "80K+",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-04 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "20K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3241&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "30529",
          name: "Karama",
          cloudinaryImageId: "d2174e76ee28d6798770ba69470a7200",
          locality: "Frazer Town",
          areaName: "Frazer Town",
          costForTwo: "₹400 for two",
          cuisines: [
            "Arabian",
            "Biryani",
            "Desserts",
            "Mughlai",
            "North Indian",
          ],
          avgRating: 4.4,
          parentId: "9722",
          avgRatingString: "4.4",
          totalRatingsString: "14K+",
          promoted: true,
          adTrackingId:
            "cid=22195829~p=2~adgrpid=22195829#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30529~eid=12c9e264-3d89-467b-80bd-f5d57626d06f~srvts=1733306396825~collid=83639",
          sla: {
            deliveryTime: 52,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "50-55 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-05 02:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "19K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22195829",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=30529&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "3434",
          name: "Nandhini Deluxe",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/7f19aaac-7299-4b54-a22d-69fd67f8fb65_3434.jpg",
          locality: "St. Marks Road",
          areaName: "St Marks Road",
          costForTwo: "₹500 for two",
          cuisines: ["Andhra", "Biryani", "Chinese", "North Indian"],
          avgRating: 4.4,
          parentId: "2451",
          avgRatingString: "4.4",
          totalRatingsString: "18K+",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 0.8,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "0.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-04 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹749",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "1.5K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=3434&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "484939",
          name: "Salt - Indian Restaurant Bar & Grill",
          cloudinaryImageId: "bsvhzfo27ivluydh5lwh",
          locality: "CENTRAL BANGALORE",
          areaName: "UB City",
          costForTwo: "₹1000 for two",
          cuisines: ["North Indian", "Kebabs", "Tandoori", "Biryani", "Thalis"],
          avgRating: 4.3,
          parentId: "453059",
          avgRatingString: "4.3",
          totalRatingsString: "515",
          promoted: true,
          adTrackingId:
            "cid=22179112~p=4~adgrpid=22179112#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=484939~eid=8b7dbbf1-1dc9-485e-b5cb-21b04e45d82d~srvts=1733306396825~collid=83639",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 0.1,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "0.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-04 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.4",
              ratingCount: "470",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22179112",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=484939&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "41100",
          name: "Nagarjuna - Since 1984",
          cloudinaryImageId: "dv37g3hyph2fyeqw6kfl",
          locality: "Residency Road",
          areaName: "Ashok Nagar",
          costForTwo: "₹600 for two",
          cuisines: [
            "Andhra",
            "South Indian",
            "Biryani",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.6,
          parentId: "509973",
          avgRatingString: "4.6",
          totalRatingsString: "45K+",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-04 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Andhra.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Andhra.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "21K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=41100&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "91629",
          name: "Sheeshkebab",
          cloudinaryImageId: "rll6kv2is6jbeltpxmst",
          locality: "Frazer Town",
          areaName: "Central Bangalore",
          costForTwo: "₹600 for two",
          cuisines: [
            "Persian",
            "Arabian",
            "Kebabs",
            "Middle Eastern",
            "Biryani",
            "Indian",
          ],
          avgRating: 4.3,
          parentId: "21632",
          avgRatingString: "4.3",
          totalRatingsString: "4.5K+",
          promoted: true,
          adTrackingId:
            "cid=22196074~p=5~adgrpid=22196074#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=91629~eid=e773b2fb-7355-44f0-896e-d46d67e5152f~srvts=1733306396825~collid=83639",
          sla: {
            deliveryTime: 50,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            slaString: "50-55 mins",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-04 23:55:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "3.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22196074",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=91629&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
// Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard resData={moreData[0]} />
        <RestaurantCard resData={moreData[1]} />
        <RestaurantCard resData={moreData[2]} />
        <RestaurantCard resData={moreData[3]} />
        <RestaurantCard resData={moreData[4]} />
        <RestaurantCard resData={moreData[5]} />
        <RestaurantCard resData={moreData[6]} />
      </div>
    </div>
  );
};
//res-card
const RestaurantCard = (props) => {
  const { resData } = props;
  const info = resData.card.card.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.card.card.info.cloudinaryImageId
        }
      ></img>
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRating} stars</h4>
      <h4>{info.sla.slaString}</h4>
    </div>
  );
};
//appLayOut
const AppLayOut = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);
