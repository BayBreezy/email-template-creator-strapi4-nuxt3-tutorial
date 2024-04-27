export default defineNuxtRouteMiddleware(async (to, from) => {
  const { isLoggedIn } = storeToRefs(useAuthStore());
  // check if the route starts with /admin
  const adminRoute = /^\/admin/.test(to.path);

  // if the user is not logged in and they are trying to access an admin route
  // send them to login page
  if (!isLoggedIn.value && adminRoute) {
    return await navigateTo("/");
  }
});
