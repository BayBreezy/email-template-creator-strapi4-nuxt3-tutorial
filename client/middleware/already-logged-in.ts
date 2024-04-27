export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isLoggedIn } = storeToRefs(useAuthStore());

  if (isLoggedIn.value) {
    return await navigateTo("/admin/dashboard");
  }
});
