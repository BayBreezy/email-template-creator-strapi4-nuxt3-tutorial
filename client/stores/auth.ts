export const useAuthStore = defineStore("Auth", () => {
  const { login, logout, register } = useStrapiAuth();
  const user = useStrapiUser();
  const isLoggedIn = computed(() => !!user.value);

  return {
    login,
    logout,
    register,
    user,
    isLoggedIn,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
