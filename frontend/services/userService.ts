import serverAPI from "./serverAPI";
const userService = {
  async login(userData: { email: string; password: string }) {
    const data = await serverAPI.post({
      url: "auth/login",
      data: userData,
    });
    return data;
  },
  async register(userData: {}) {
    const data = await serverAPI.post({
      url: "auth/register",
      data: userData,
    });
    return data;
  },
};

export default userService;
