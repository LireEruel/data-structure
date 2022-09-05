var ghpages = require("gh-pages");

ghpages.publish(
  "dist", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/LireEruel/data-structure.git", // Update to point to repository
    user: {
      name: "LireEruel",
      email: "jsh001505@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
