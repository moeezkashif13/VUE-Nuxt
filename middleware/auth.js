const auth = useAuthentication();

export default defineNuxtRouteMiddleware((to, from) => {
  if (!auth.user) {
    return navigateTo("/auth/login");
  }
});
