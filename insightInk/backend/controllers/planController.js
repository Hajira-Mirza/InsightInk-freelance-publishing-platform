const planService = require("../services/planService");
const joi = require("joi");

const createPlanSchema = joi.object().keys({
  planName: joi.string().required(),
  planPrice: joi.string().required(),
  planInterval: joi.string().required(), 
  isActive: joi.string().required(),

});
const updatePlanSchema = joi.object().keys({
  planId: joi.string().required(),
});

const deletePlanSchema = joi.object().keys({
  planId: joi.string().required(),
});

module.exports = {
  createPlan: async (req, res) => {
    try {
      const validate = await createPlanSchema.validateAsync(req.body);
      const plan = await planService.createPlan(validate);
      if (plan.error) {
        return res.send({
          error: plan.error,
        });
      }
      return res.send({
        response: plan.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  updatePlan: async (req, res) => {
    try {
      const validate = await updatePlanSchema.validateAsync(req.body);
      const plan = await planService.updatePlan(validate);
      if (plan.error) {
        return res.send({
          error: plan.error,
        });
      }
      return res.send({
        response: plan.response,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllPlans: async (req, res) => {
    try {
      const plans = await planService.getAllPlans();
      if (plans.error) {
        return res.send({
          error: plans.error,
        });
      }
      return res.send({
        response: plans.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  deletePlan: async (req, res) => {
    try {
      const validate = await deletePlanSchema.validateAsync(req.body);
      const plan = await planService.deletePlan(validate);
      if (plan.error) {
        return res.send({
          error: plan.error,
        });
      }
      return res.send({
        response: plan.response,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
