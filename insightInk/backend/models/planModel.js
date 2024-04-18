const { models } = require("./index");
module.exports = {
    createPlan: async (body) => {
        try {
          const plan = await models.plan.create({ ...body });
          return {
            response: plan,
          };
        } catch (error) {
          return {
            error: error.message,
          };
        }
      },
      getAllPlans: async () => {
        try {
          const plans = await models.plan.findAll();
          return {
            response: plans,
          };
        } catch (error) {
          return {
            error: error.message,
          };
        }
      },
      updatePlan: async (body, planId) => {
        try {
          const plan = await models.plan.update(
            {
              ...body,
            },
            {
              where: {
                planId: planId,
              },
            }
          );
          return {
            response: plan,
          };
        } catch (error) {
          return {
            error: error.message,
          };
        }
      },
      deletePlan: async (planId) => {
        try {
          const plan = await models.plan.destroy({
            where: {
                planId: planId,
            },
          });
          return {
            response: plan,
          };
        } catch (error) {
          return {
            error: error.message,
          };
        }
      },
}