import type { StrapiUser } from "@nuxtjs/strapi";

export interface Template {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
  name: string;
  user?: StrapiUser;
  design?: any;
}
