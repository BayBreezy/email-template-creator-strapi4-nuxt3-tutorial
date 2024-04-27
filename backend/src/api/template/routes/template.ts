/**
 * template router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::template.template", {
  config: {
    delete: {
      policies: ["api::template.can-access-template-by-id"],
    },
    findOne: {
      policies: ["api::template.can-access-template-by-id"],
    },
    update: {
      policies: ["api::template.can-access-template-by-id"],
    },
  },
});
