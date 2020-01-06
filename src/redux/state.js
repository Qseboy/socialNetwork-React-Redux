//Искуственный файл с данными, BLL логика

let store = {
  _state: {
    profilePage: {
      post: [
        { id: 1, message: "post_1", likeCounts: 11 },
        { id: 2, message: "post_2", likeCounts: 22 },
        { id: 3, message: "post_3", likeCounts: 33 }
      ],
      changePost: ""
    },
    dialogPage: {
      dialog: [
        { id: 1, name: "kolya" },
        { id: 2, name: "ivan" },
        { id: 3, name: "leha" }
      ],
      message: [
        { id: 1, message: "hi" },
        { id: 2, message: "hellow" }
      ]
    },
    spacePage: {
      space: [
        { id: 1, name: "space" },
        { id: 2, name: "spaceTwo" }
      ]
    }
  },

  getState() {
    return this._state;
  },

  addPost(postMessage) {
    let newPost = {
      id: 4,
      message: postMessage,
      likeCounts: 44
    };
    this._state.profilePage.post.push(newPost);
    this._rerenderApp(this._state); //Ререндим дерево, чтобы отобразились данные. Вызываем функцию ререндер.
  },

  newPostMessage(newMessage) {
    this._state.profilePage.changePost = newMessage;
    this._rerenderApp(this._state);
  },

  // Объявление метода, которая будет измененна, rerenderApp = observer;
  rerenderApp() {
    console.log("state");
  },
  subscribe(observer) {
    this._rerenderApp = observer;
  }
};

export default store;
window.store = store;
