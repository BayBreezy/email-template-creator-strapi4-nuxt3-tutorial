<template>
  <UiNavbar sticky>
    <UiContainer class="flex h-16 items-center justify-between">
      <NuxtLink class="text-lg font-semibold" to="/admin/dashboard">
        <Icon name="lucide:arrow-left" size="18" />
      </NuxtLink>
      <div class="flex items-center gap-3">
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton @click="previewDesign()" class="shrink-0" variant="outline" size="icon-sm">
              <span class="sr-only">Preview</span>
              <Icon name="lucide:square-arrow-out-up-right" size="18" />
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent align="center">Preview</UiTooltipContent>
        </UiTooltip>
        <UiTooltip>
          <UiTooltipTrigger as-child>
            <UiButton @click="downloadHtml()" class="shrink-0" variant="outline" size="icon-sm">
              <span class="sr-only">Download HTML</span>
              <Icon name="lucide:cloud-download" size="18" />
            </UiButton>
          </UiTooltipTrigger>
          <UiTooltipContent align="center">Download HTML</UiTooltipContent>
        </UiTooltip>
        <UiButton @click="save()" class="shrink-0">Save</UiButton>
      </div>
    </UiContainer>
  </UiNavbar>
  <div class="h-dvh">
    <EmailEditor @ready="setEditor" />
  </div>
</template>

<script lang="ts" setup>
  import { saveAs } from "file-saver";
  import type { EditorInstance } from "#unlayer/props";

  const route = useRoute("admin-template-id");

  const { data: template, refresh } = await useAsyncData("template", () =>
    useTemplatesStore().findById(Number(route.params.id))
  );

  const editor = shallowRef<EditorInstance | null>(null);

  const setEditor = (val: EditorInstance) => {
    editor.value = val;

    if (template.value && template.value.data.design) {
      editor.value?.loadDesign(JSON.parse(JSON.stringify(template.value.data.design)));
    }
  };

  const previewDesign = () => {
    if (!editor.value) return;
    editor.value?.exportHtml((data) => {
      // create a new window and write the data to it
      // open the new window
      const newWindow = window.open();
      newWindow?.document.write(data.html);
      newWindow?.document.close();
    });
  };

  const downloadHtml = () => {
    if (!editor.value) return;
    editor.value?.exportHtml((data) => {
      const blob = new Blob([data.html], { type: "text/html;charset=utf-8" });
      saveAs(blob, "template.html");
    });
  };

  const save = async () => {
    if (!editor.value) return;
    editor.value?.saveDesign(async (data) => {
      await useTemplatesStore().update(template.value?.data.id!, {
        design: data,
        name: template.value?.data.name!,
      });

      useSonner.success("Template saved successfully!", {
        description: "The template has been saved successfully.",
      });
    });
  };
</script>
