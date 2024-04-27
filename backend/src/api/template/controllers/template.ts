/**
 * template controller
 */

import { factories } from "@strapi/strapi";
const UID = "api::template.template";
export default factories.createCoreController(UID, ({ strapi }) => ({
  async find(ctx) {
    const { user } = ctx.state;
    if (!user) return ctx.unauthorized("Unauthorized");

    // find templates that belong to this user
    const entries = await strapi.entityService.findMany(UID, {
      filters: { user: user.id },
      populate: { user: true },
    });

    const sanitizedResults = await this.sanitizeOutput(entries, ctx);

    return { data: sanitizedResults };
  },
  async create(ctx) {
    const { user } = ctx.state;
    if (!user) return ctx.unauthorized("Unauthorized");

    const { data } = ctx.request.body;
    if (!data) return ctx.badRequest("Data is required");
    const { name } = data;
    if (!name) return ctx.badRequest("Name is required");
    // create a new template
    const entry = await strapi.entityService.create(UID, {
      data: {
        name,
        user: user.id,
      },
      populate: { user: true },
    });

    const sanitizedResults = await this.sanitizeOutput(entry, ctx);

    return { data: sanitizedResults };
  },
}));
