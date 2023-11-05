window._ = {
  setStore: (name, content) => {
    window.localStorage.setItem(name, content);
  },

  getStore: (name) => {
    return window.localStorage.getItem(name);
  },
  clear: () => {
    window.localStorage.clear();
  },
};
export default window._;