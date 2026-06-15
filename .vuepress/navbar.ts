import { navbar } from "vuepress-theme-hope";

export const useNavbar = ({ type }) => {
  let standalone = type == "standalone";
  let gitlab = type == "gitlab"
  return navbar([
    { text: "帮助文档", link: "/" },
    { text: "二次开发教程", link: "/二次开发教程/" },
    { text: "综合案例", link: "/综合案例/" },
  ])
};
