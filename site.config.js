const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Seongsu",
    image: "/profile.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Server developer",
    bio: "Let's grow up together!",
    email: "nfl1ryxditimo12@gmail.com",
    linkedin: "",
    github: "nfl1ryxditimo12",
    instagram: "",
  },
  projects: null,
  // blog setting (required)
  blog: {
    title: "seongsu.me",
    description: "welcome to seongsu's blog",
    scheme: "light", // 'light' | 'dark'
    followSystemTheme: false, // If true, the appearance will be changed according to the system theme on first visit your blog.
  },

  // CONFIG configration (required)
  link: "https://seongsu.me",
  since: 2022, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "nfl1ryxditimo12/seongsu.me",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 3600 * 8, // revalidate time for [slug], index
}

module.exports = { CONFIG }
