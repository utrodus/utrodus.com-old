const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  siteName: "Utrodus Said",
  siteUrl: "https://utrodus.my.id",
  siteDescription: "Flutter Developer From in Indonesia",

  templates: {
    Post: "/post/:title",
    Resource: "/resources/:title",
    Project: "/projects/:title",
    Tag: "/tag/:id",
  },

  // chainWebpack: (config) => {
  // 	const svgRule = config.module.rule("svg");
  // 	svgRule.uses.clear();
  // 	svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  // 	config
  // 		.plugin("BundleAnalyzerPlugin")
  // 		.use(BundleAnalyzerPlugin, [{ analyzerMode: "static" }]);
  // },

  plugins: [
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        remark: {
          plugins: [
            "@gridsome/remark-prismjs",
            "gridsome-plugin-remark-codesandbox",
          ],
        },
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Blog",
        path: "content/blogs/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Project",
        path: "content/projects/*.md",
      },
    },
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Resource",
        path: "content/resources/*.md",
      },
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        collections: [
          {
            typeName: "Resource",
            indexName: "Resource",
            fields: ["title", "link"],
          },
          {
            typeName: "Post",
            indexName: "Post",
            fields: ["title", "path"],
          },
        ],
        searchFields: ["title", "link", "path"],
        options: {
          chunk: true,
          compress: true,
          autoFetch: "/search",
        },
      },
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-156810526-1",
      },
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          routes: [
            "/",
            /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
          ],
        },
      },
    },
    {
      use: "gridsome-plugin-pwa",
      options: {
        startUrl: "/",
        display: "standalone",
        statusBarStyle: "default",
        manifestPath: "manifest.json",
        title: "Utrodus Flutter Developer",
        disableServiceWorker: false,
        serviceWorkerPath: "service-worker.js",
        cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
        shortName: "Utrodus Portfolio",
        description: "Utrodus Portfolio Website",
        themeColor: "#101024",
        backgroundColor: "#65F4AD",
        icon: "./src/favicon.png",
        lang: "en",
        msTileImage: "",
        msTileColor: "#666600",
        appleMaskIcon: "./src/favicon.png",
        appleMaskIconColor: "#65F4AD",
        maskableIcon: true,
      },
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/": {
            changefreq: "weekly",
            priority: 0.5,
          },

          "/portfolio": {
            changefreq: "monthly",
            priority: 0.7,
          },

          "/about": {
            changefreq: "monthly",
            priority: 0.7,
          },
        },
      },
    },
    {
      use: "gridsome-plugin-robots-txt",
      options: {
        host: "https://utrodus.github.io/",
        sitemap: "https://utrodus.github.io/sitemap.xml",
        policy: [
          {
            userAgent: "Googlebot",
            allow: "/",
            disallow: "/search",
            crawlDelay: 2,
          },
          {
            userAgent: "*",
            allow: "/",
            disallow: "/search",
            crawlDelay: 10,
            cleanParam: "ref /articles/",
          },
        ],
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
