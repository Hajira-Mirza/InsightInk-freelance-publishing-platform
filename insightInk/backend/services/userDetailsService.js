const userDetailsModel = require("../models/userDetailsModel");
const { v4: uuid } = require("uuid");

module.exports = {
  createUserDetails: async (body) => {
    try {
      const details = {
        userDetailsId: uuid(),
        userName: body.userName,
        location: body.location,
        description: body.description,
        about: body.about,
        experience: body.experience,
        startDate: body.startDate,
        endDate: body.endDate,
      };
      const newDetails = await userDetailsModel.createUserDetails(details);
      if (newDetails.error) {
        return {
          error: newDetails.error,
        };
      }
      return {
        response: newDetails.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateUserDetails: async (body) => {
    try {
      const details = await userDetailsModel.updateUserDetails(body, body.userDetailsId);
      if (details.error) {
        return {
          error: details.error,
        };
      }
      return {
        response: details.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllUserDetails: async () => {
    try {
      const details = await userDetailsModel.getAllUserDetails();
      if (details.error) {
        return {
          error: details.error,
        };
      }
      return {
        response: details.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
