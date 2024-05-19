type User = {
  password: string;
  login: string;
};

type Users = {
  standart_user: User;
  locked_out_user: User;
};

export const Users: Users = {
  standart_user: {
    login: "standard_user",
    password: "secret_sauce",
  },
  locked_out_user: {
    login: "locked_out_user",
    password: "secret_sauce",
  },
};
