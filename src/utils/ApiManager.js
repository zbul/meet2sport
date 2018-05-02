const ApiManager = {
  userId: null,

  setUserId(userId) {
    this.userId = userId;
  },

  getUserId() {
    return this.userId;
  },
};

export default ApiManager;
