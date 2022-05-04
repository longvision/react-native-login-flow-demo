import { api } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AuthApi {
  static async register(email, username, password) {
    try {
      const response = await api.post("/auth/register", {
        email,
        username,
        password,
      });
      console.log({ response: response.data });
      if (response.data.status === 400) {
        return response.data.message;
      }
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
  static async login(email, password) {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });
      console.log({ response: response.data });
      if (response.data.status === 400) {
        return response.data.message;
      }
      return response.data.accessToken;
    } catch (e) {
      console.log(e);
    }
  }
  static async logout() {
    try {
      await AsyncStorage.removeItem("@token");
    } catch (e) {
      console.log(e);
    }
  }
}
