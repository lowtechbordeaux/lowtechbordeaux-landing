module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      serif: ["Permanent Marker", "serif"],
      mono: ["High Spirited", "mono"],
      sans: ["Metropolis", "Helvetica", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "4rem",
        lg: "4rem",
        xl: "8rem",
      },
    },
    extend: {
      backgroundImage: {
        "roue-2": "url('./assets/images/roue2.png')",
        instagram: "url('./assets/icons/instagram.png')",
        twitter: "url('./assets/icons/twitter.png')",
        youtube: "url('./assets/icons/youtube.png')",
        facebook: "url('./assets/icons/facebook.png')",
        discord: "url('./assets/icons/discord.png')",
      },
      colors: {
        "yellowy-1": "#f4d65b",
        "greeny-1": "#233c3d",
        "greeny-2": "#507b6e",
        "greeny-3": "#71b8ad",
        "greeny-4": "#c3dab8",
        "bluey-1": "#233d5c",
      },
    },
  },
  plugins: [],
};
