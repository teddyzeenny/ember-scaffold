App.CustomApp.FIXTURES = [
  { id: 1, name: 'App', emberModels: ['post', 'comment', 'author'], resources: ['posts', 'comments', 'authors'] }
];


App.EmberModel.FIXTURES = [
  { id: 'post', name: 'Post', plural: 'Posts', customApp: 1},
  { id: 'comment', name: 'Comment', plural: 'Comments', customApp: 1},
  { id: 'author', name: 'Author', plural: 'Authors', customApp: 1}
];


App.Resource.FIXTURES = [
  { id: 'posts', name: 'posts', customApp: 1 },
  { id: 'comments', name: 'comments', customApp: 1 },
  { id: 'authors', name: 'authors', customApp: 1}
];
