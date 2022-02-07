import { FooterConfig } from "case-web-app-core/build/types/footerConfig";

export const footerConfig: FooterConfig = {
  columns: [
    {
      columnKey: 'partners',
      items: [
        {
          type: "external",
          itemKey: "rivm",
          value: "https://twitter.com/rivm",
          //iconClass: "fab fa-twitter"
        },
        {
          type: "external",
          itemKey: "wur",
          value: "https://www.wur.nl/",
          //iconClass: "fab fa-facebook-square"
        },
        {
          type: "external",
          itemKey: "amc",
          value: "https://www.amc.nl/web/home.htm",
          //iconClass: "fab fa-facebook-square"
        },
        {
          type: "external",
          itemKey: "fsd",
          value: "https://www.fsd.nl/",
          //iconClass: "fab fa-facebook-square"
        },
        {
          type: "external",
          itemKey: "radboudumc",
          value: "https://www.radboudumc.nl/patientenzorg",
          //iconClass: "fab fa-facebook-square"
        },
      ]
    },
    {
      columnKey: 'about',
      items: [
        {
          type: "internal",
          itemKey: "contact",
          value: "/contact"
        },
        {
          type: "internal",
          itemKey: "privacy",
          value: "/privacy"
        },
        {
          type: "internal",
          itemKey: "medische",
          value: "/geen-medische-functie"
        },
        {
          type: "internal",
          itemKey: "toegan",
          value: "/toegankelijkheidsverklaring"
        },
      ]
    }
  ]
}
