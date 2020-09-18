import S from "@sanity/desk-tool/structure-builder";
import { MdBusiness, MdSettings } from "react-icons/md";
import { FaFile } from "react-icons/fa";

const hiddenTypes = ["category", "teamInfo", "page", "person", "post", "siteSettings"];

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(S.documentTypeList("page").title("Pages")),
      S.listItem()
        .title("Blog posts")
        .schemaType("post")
        .child(S.documentTypeList("post").title("Blog posts")),
      S.listItem()
        .title("People")
        .schemaType("person")
        .child(S.documentTypeList("person").title("People")),
      S.listItem()
        .title("Team Info")
        .child(
          S.editor()
            .id("teamInfo")
            .schemaType("teamInfo")
            .documentId("teamInfo")
        )
        .icon(MdBusiness),
      S.listItem()
        .title("Site Settings")
        .child(
          S.editor()
            .id("siteSettings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        )
        .icon(MdSettings),
      ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
    ]);
