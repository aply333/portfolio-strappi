module.exports = ({ env }) => (
    {
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_F39xTNaZERbgogM7YOwMAYYnCFsY/dirmWAIcDd",
        apiToken: process.env.VERCEL_TOKEN,
        appFilter: "aply",
        // teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
       
      },
    },
  });