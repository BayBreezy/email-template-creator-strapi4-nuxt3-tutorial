import type { Template } from "~/utils/types";

export const useTemplatesStore = defineStore("Templates", () => {
  const client = useStrapiClient();

  const createTemplate = (name: string) => {
    return client<FindOne<Template>>("templates", {
      method: "POST",
      body: { data: { name } },
    });
  };

  const findAll = () => {
    return client<FindMany<Template>>("templates");
  };

  const update = (id: number, template: { name: string; design: any }) => {
    return client<FindOne<Template>>(`templates/${id}`, {
      method: "PUT",
      body: { data: template },
    });
  };

  const findById = (id: number) => {
    return client<FindOne<Template>>(`templates/${id}`, {
      params: { populate: ["user"] },
    });
  };

  const removeTemplate = (id: number) => {
    return client<FindOne<Template>>(`templates/${id}`, {
      method: "DELETE",
    });
  };

  return {
    createTemplate,
    findById,
    findAll,
    removeTemplate,
    update,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTemplatesStore, import.meta.hot));
}
