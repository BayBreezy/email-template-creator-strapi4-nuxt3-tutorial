export default async (policyContext, config, { strapi }) => {
  if (!policyContext.state.user) return false;
  const id = policyContext.request.params?.id;
  if (!id) return false;

  // check if the template belongs to the logged in user
  const template = await strapi.entityService.findOne(
    "api::template.template",
    id,
    {
      populate: { user: true },
    }
  );
  if (!template) return false;
  if (template.user.id !== policyContext.state.user.id) return false;

  return true;
};
