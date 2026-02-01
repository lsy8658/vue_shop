import { defineStore } from "pinia";
import api from "@/api/axios.js";

export const useUserStore = defineStore("user", {
  state: () => ({ userInfo: null, token: null }),
  actions: {
    async login(email, password) {
      try {
        const res = await api.post("/auth/login", { email, password });
        this.userInfo = res.data.user;
        this.token = res.data.token;
      } catch (err) {
        console.error("Login failed:", err);
      }
    },

    logout() {
      this.userInfo = null;
      this.token = null;
    },
  },
});
