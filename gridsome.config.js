const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  siteName: "utrodus.my.id",
  siteUrl: "https://utrodus.my.id",
  siteDescription: "Hello 👋 I'm Utrodus Said a Flutter Developer and Engineer from Indonesia",

  metadata: {
    author: 'Utrodus Said Al Baqi',    
    siteUrl: 'https://utrodus.my.id',
    image: './src/favicon.png',
    description: "Hello 👋 I'm a Flutter Developer and Engineer ready to collaborate on building the next amazing, life-changing digital product 🥳 With expertise in developing beautiful and performant mobile applications using Flutter, I excel at crafting seamless user experiences for both Android and iOS platforms.",
    keywords: 'Flutter Developer, Flutter portfolio, Flutter projects, Indonesia, Flutter Developer Indonesia, Jasa Pembuatan Aplikasi Android, Jasa Pembuatan Aplikasi iOS, Android, iOS, Flutter, PWA',
  },

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
    // {
    //   use: "gridsome-plugin-service-worker",
    //   options: {
    //     networkFirst: {
    //       routes: [
    //         "/",
    //         /\.(js|css|png)$/, // means "every JS, CSS, and PNG images"
    //       ],
    //     },
    //   },
    // },
    // {
    //   use: "gridsome-plugin-pwa",
    //   options: {
    //     startUrl: "/",
    //     display: "standalone",
    //     statusBarStyle: "default",
    //     manifestPath: "manifest.json",
    //     title: "Utrodus Flutter Developer",
    //     disableServiceWorker: false,
    //     serviceWorkerPath: "service-worker.js",
    //     cachedFileTypes: "js,json,css,html,png,jpg,jpeg,svg",
    //     shortName: "Utrodus Portfolio",
    //     description: "Utrodus Portfolio Site",
    //     themeColor: "#101024",
    //     backgroundColor: "#18191c",
    //     icon: "./src/favicon.png",
    //     lang: "en",
    //     msTileImage: "",
    //     msTileColor: "#fff",
    //     appleMaskIcon: "./src/favicon.png",
    //     appleMaskIconColor: "#18191c",
    //     maskableIcon: true,
    //   },
    // },
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
        host: "https://utrodus.my.id/",
        sitemap: "https://utrodus.my.id/sitemap.xml",
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
    {
      use: '@tawk.to/tawk-messenger-vue-3',
      options: {
        propertyId : '6472a32774285f0ec46e01c4',
        widgetId : '1h1fsqktn'
      }
    }
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
