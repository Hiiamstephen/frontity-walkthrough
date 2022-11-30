import Root from "./components";
import link from "@frontity/html2react/processors/link";

const myFirstTheme = {
  name: "my-first-theme",
  roots: {
    myFirstTheme: Root
  },
  state: {
    myFirstTheme: {
      isUrlVisible: false,
    }
  },
  actions: {
    myFirstTheme: {
      toggleUrl: ({ state }) => {
        state.myFirstTheme.isUrlVisible = !state.myFirstTheme.isUrlVisible
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link]
    }
  }
};

export default myFirstTheme