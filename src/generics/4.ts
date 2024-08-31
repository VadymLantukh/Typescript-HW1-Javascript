type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const newParams: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  return { ...newParams, ...initialValues };
}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
