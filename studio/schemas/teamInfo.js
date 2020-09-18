import { MdBusiness } from "react-icons/md";

export default {
  name: "teamInfo",
  title: "Team Info",
  type: "document",
  // You probably want to uncomment the next line once you've made a companyInfo document in the Studio. This will remove the companyInfo document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  icon: MdBusiness,
  fields: [
    {
      name: "name",
      title: "Team name",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "email"
    }
  ]
};
