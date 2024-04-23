import client from "./client";

const endpoint = "/expoPushTokens";

const register = (pushToken) => {
  return client.post(endpoint, { token: pushToken });
};

export default {
  register,
};
