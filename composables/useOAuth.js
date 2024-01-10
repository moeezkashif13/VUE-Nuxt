import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useAuthentication } from "~/store/authSlice";

export default function useGoogleOAuth() {
  const authStore = useAuthentication();

  const redirectToGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const user = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(user));

      authStore.user = user;
      await navigateTo("/dashboard");
    } catch (error) {
      authStore.error = "error aagyaa ";
    }
  };
  const redirectToTwitter = async () => {
    const provider = new TwitterAuthProvider();
    const auth = getAuth();

    try {
      const user = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(user));

      authStore.user = user;
      await navigateTo("/dashboard");
    } catch (error) {
      authStore.error = "error aagyaa ";
    }
  };
  return { redirectToGoogle, redirectToTwitter };
}
