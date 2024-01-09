/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import strapiCloud from "@strapi/plugin-cloud/strapi-admin";
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import menus from "strapi-plugin-menus/strapi-admin";
import vercelDeploy from "strapi-plugin-vercel-deploy/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    "strapi-cloud": strapiCloud,
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    menus: menus,
    "vercel-deploy": vercelDeploy,
  },
});
