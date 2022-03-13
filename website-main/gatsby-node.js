const path = require("path");
const fs = require("fs-extra");

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;
  let imageList = await fs.readJson(
    path.resolve(__dirname, "./content/member.json")
  );
  imageList = imageList.members;
  imageList.forEach((member, id) => {
    const imgPath = member.img;
    console.log(id + " " + imgPath);
    const { name, ext } = path.parse(imgPath); // get file name & extension
    const absolutePath = path.resolve(__dirname, imgPath);

    const data = {
      name,
      ext,
      absolutePath, // <-- required
      extension: ext.substring(1), // <-- required, remove the dot in `ext`
    };

    const imageNode = {
      ...data,
      id: createNodeId(`member-image-${id}`),
      children: [],
      internal: {
        type: "MemberImageNode",
        contentDigest: createContentDigest(data),
      },
    };

    createNode(imageNode);

    member.img = imageNode;
    const memeberNode = {
      ...member,
      id: createNodeId(`member-${id}`),
      children: [],
      internal: {
        type: "MemberNode",
        contentDigest: createContentDigest(member),
      },
    };
    createNode(memeberNode);
  });

  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        fallback: {
          assert: require.resolve("assert/"),
          crypto: require.resolve("crypto-browserify"),
          http: require.resolve("stream-http"),
          https: require.resolve("https-browserify"),
          os: require.resolve("os-browserify/browser"),
          stream: require.resolve("stream-browserify"),
        },
      },
      alias: {
        path: require.resolve("path-browserify"),
      },
    });
  };
};
