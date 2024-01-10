import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  updateProfile,
} from "firebase/auth";

export const useAuthentication = defineStore("auth", {
  state: () => {
    return {
      user: null,
      error: false,
      loading: false,
      randomNumb: Math.floor(Math.random() * 1000),
    };
  },

  actions: {
    async registeringUser(data) {
      this.loading = true;
      const { $auth } = useNuxtApp();
      const auth = getAuth();
      try {
        const user = await createUserWithEmailAndPassword(
          $auth,
          data.email,
          data.password
        );

        await updateProfile(auth.currentUser, {
          photoURL:
            data.imageURL ||
            "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
        });

        localStorage.setItem("user", JSON.stringify(user));

        this.user = user;
        this.error = false;

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
        const user = await signInWithEmailAndPassword(
          $auth,
          data.email,
          data.password
        );

        localStorage.setItem("user", JSON.stringify(user));

        this.user = user;
        this.error = false;

        await navigateTo("/dashboard");
      } catch (error) {
        this.error = "login error";
      } finally {
        this.loading = false;
        this.randomNumb = Math.floor(Math.random() * 1000);
      }
    },

    async logoutUser() {
      const { $auth } = useNuxtApp();
      await signOut($auth);
      localStorage.removeItem("user");
      await navigateTo("/auth/login");
    },
  },
});
