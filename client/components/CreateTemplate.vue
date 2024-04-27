<template>
  <UiDialog v-model:open="open">
    <UiDialogTrigger as-child>
      <slot />
    </UiDialogTrigger>
    <UiDialogContent
      @interactOutside.prevent=""
      @pointerDownOutside.prevent=""
      class="max-w-sm"
      title="Create template"
      description="Enter the data below and submit"
    >
      <template #content>
        <form @submit="submit">
          <fieldset :disabled="isSubmitting" class="grid grid-cols-1 gap-5">
            <UiVeeInput name="name" label="Template name" required />
            <UiButton type="submit">Create</UiButton>
          </fieldset>
        </form>
      </template>
    </UiDialogContent>
  </UiDialog>
</template>

<script lang="ts" setup>
  import { object, string } from "yup";

  const open = ref(false);

  const schema = object({
    name: string().required().label("Template name").min(3),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const submit = handleSubmit(async (values) => {
    try {
      const res = await useTemplatesStore().createTemplate(values.name);
      useSonner.success("Template created successfully", {
        description: `Template ${res.data.name} created successfully.`,
      });
      await navigateTo(`/admin/template/${res.data.id}`);
      open.value = false;
    } catch (error: any) {
      useSonner.error("Failed to create template", {
        description: error.error.message,
      });
    }
  });
</script>
