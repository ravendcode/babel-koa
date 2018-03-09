export default {
  id: 1,
  username: 'bob',
  email: 'bob@email.com',
  password: 'qwerty',
  toJSON() {
    return {
      id: this.id,
      username: this.username,
      email: this.email,
    };
  },
};
