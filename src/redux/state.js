let state = {
  profilePage: {
    post: [
      { id: 1, message: "post_1", likeCounts: 11 },
      { id: 2, message: "post_2", likeCounts: 22 },
      { id: 3, message: "post_3", likeCounts: 33 }
    ]
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
};

export let addPost = postMessage => {
  let newPost = {
    id: 4,
    message: postMessage,
    likeCounts: 44
  };
  state.profilePage.post.push(newPost);
  debugger;
};

export default state;
