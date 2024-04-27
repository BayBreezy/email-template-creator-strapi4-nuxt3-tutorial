import type { Strapi4ResponseMeta } from "@nuxtjs/strapi";

declare global {
  export interface FindOne<T> {
    data: T;
    meta: Strapi4ResponseMeta;
  }

  export interface FindMany<T> {
    data: T[];
    meta: Strapi4ResponseMeta;
  }
}

export {};
