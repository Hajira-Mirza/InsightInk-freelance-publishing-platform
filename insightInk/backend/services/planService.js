const planModel = require("../models/planModel");
require("dotenv").config();
const { v4: uuid } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const domain = process.env.MY_DOMAIN;

module.exports = {
  createPlan: async (body) => {
    try {
      const planData = {
        planId: uuid(),
        planName: body.planName,
        planPrice: body.planPrice,
        planInterval: body.planInterval,
        isActive: body.isActive,
      };

      const newPlan = await planModel.createPlan(planData);
      if (newPlan.error) {
        return {
          error: newPlan.error,
        };
      }
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {

            price_data: {
              currency: "usd",
              product_data: {
                name: planData.planName,
              },
              unit_amount: parseInt(planData.planPrice) * 100,// Amount in cents
                    recurring: {
                      interval: planData.planInterval,
                    },
                  },
              quantity: 1,
                }
              ],
        payment_method_types: ["card"],
        mode: "subscription",
        success_url: "http://localhost:5173/success",
        cancel_url: "http://localhost:5173/cancel",
      });

      return {
        response: session.url, // Return the session URL
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllPlans: async () => {
    try {
      const plans = await planModel.getAllPlans();
      if (plans.error) {
        return {
          error: plans.error,
        };
      }
      return {
        response: plans.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
    
  },
  updatePlan: async (body) => {
    try {
      const plan = await planModel.updatePlan(body, body.planId);
      if (plan.error) {
        return {
          error: plan.error,
        };
      }
      return {
        response: plan.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  deletePlan: async (body) => {
    try {
      const plan = await planModel.deletePlan(body, body.planId);
      if (plan.error) {
        return {
          error: plan.error,
        };
      }
      return {
        response: plan.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
