// THIS IS FILE IS OPTIONAL, you can delete it if you don't want to use it

// config.js is the entry file for your VuePress app configuration
// It can also be written in yml or toml instead of js
// See the documentation for more information on how to use it
// https://v1.vuepress.vuejs.org/config/

module.exports = {
  title: "하이웍스 UI개발팀",
  description: "안녕하세요. UI개발팀입니다.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Convention", link: "/guide/" },
      { text: "hiworks", link: "https://hiworks.com/" },
      {
        text: "GitHub",
        link: "https://github.com/vicbergquist/codesandbox-vuepress/"
      }
    ]
  }
};
