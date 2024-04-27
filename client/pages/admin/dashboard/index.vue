<template>
  <UiNavbar sticky>
    <UiContainer class="flex h-16 items-center justify-between">
      <NuxtLink class="text-lg font-semibold" to="/admin/dashboard">Mail</NuxtLink>
      <div class="flex items-center gap-3">
        <span class="shrink-0 font-medium">{{ user?.username }}</span>
        <UiDivider orientation="vertical" class="mx-1 h-6" />
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton class="shrink-0" @click="toggleMode()" variant="ghost" size="icon-sm">
              <span class="sr-only">Toggle theme</span>
              <Icon name="lucide:sun-medium" size="18" />
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent align="center">Toggle theme</UiTooltipContent>
        </UiTooltip>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton class="shrink-0" @click="signOut()" variant="outline" size="icon-sm">
              <span class="sr-only">Logout</span>
              <Icon name="lucide:log-out" size="18" />
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent align="center">Logout</UiTooltipContent>
        </UiTooltip>
        <CreateTemplate>
          <UiButton class="shrink-0">Create template</UiButton>
        </CreateTemplate>
      </div>
    </UiContainer>
  </UiNavbar>
  <UiContainer>
    <div class="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      <template v-for="t in templates?.data" :key="t.id">
        <UiCard>
          <UiCardContent>
            <p class="text-sm font-semibold">{{ t.name }}</p>

            <div class="mt-4 flex items-center gap-3">
              <UiButton :to="`/admin/template/${t.id}`" size="sm">Edit</UiButton>
              <UiButton @click="deleteTemplate(t.id)" size="sm" variant="ghost">Delete</UiButton>
            </div>
          </UiCardContent>
        </UiCard>
      </template>
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
  const { user } = storeToRefs(useAuthStore());

  const colorMode = useColorMode();
  const toggleMode = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  };

  const signOut = async () => {
    useAuthStore().logout();
    useSonner("Logged out successfully!", {
      description: "You have successfully logged out.",
    });
    useRouter().go(0);
  };

  const { data: templates, refresh } = await useAsyncData("allTemplates", () =>
    useTemplatesStore().findAll()
  );

  const deleteTemplate = async (id: number) => {
    try {
      await useTemplatesStore().removeTemplate(id);
      useSonner.success("Template deleted successfully!", {
        description: "The template has been deleted successfully.",
      });
      await refresh();
    } catch (error: any) {
      useSonner.error("Failed to delete template!", {
        description: error.error.message,
      });
    }
  };
</script>
