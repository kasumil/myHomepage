interface loginForm {
  register: {
    username: string,
    password: string,
    passwordConfirm?: string,
  },
  login: {
    username: string,
    password: string,
  }
};