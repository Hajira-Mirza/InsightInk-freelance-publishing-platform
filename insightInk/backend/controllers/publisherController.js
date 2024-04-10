const publisherService = require("../services/publisherService");
const joi = require("joi");

const createPublisherSchema = joi.object().keys({
  publisherName: joi.string().required(),
  country: joi.string().required(),
  bio: joi.string().required(),
});

module.exports = {
  createPublisher: async (req, res) => {
    try {
      const validate = await createPublisherSchema.validateAsync(req.body);
      const publisher = await publisherService.createPublisher(validate);
      if (publisher.error) {
        return res.send({
          error: publisher.error,
        });
      }
      return res.send({
        response: publisher.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllPublishers: async (req, res) => {
    try {
      const publishers = await publisherService.getAllPublishers();
      if (publishers.error) {
        return res.send({
          error: publishers.error,
        });
      }
      return res.send({
        response: users.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },

  
};
