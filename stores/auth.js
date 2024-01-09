import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const useAuthentication = defineStore("auth", {
  state: () => {
    return { user: null, error: false, loading: false };
  },

  actions: {
    async registeringUser(data) {
      this.loading = true;
      const { $auth } = useNuxtApp();
      try {
        this.user = await createUserWithEmailAndPassword(
          $auth,
          data.email,
          data.password
        );
        await navigateTo("/dashboard");
      } catch (error) {
        this.error = "error aagya";
      } finally {
        this.loading = false;
      }
    },

    async loginUser(data) {
      this.loading = true;
      const { $auth } = useNuxtApp();

      try {
        this.user = await signInWithEmailAndPassword(
          $auth,
          data.email,
          data.password
        );
        await navigateTo("/dashboard");
      } catch (error) {
        this.error = "login error";
      } finally {
        this.loading = false;
      }
    },
  },
});
