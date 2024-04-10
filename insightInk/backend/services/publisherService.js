const publisherModel = require("../models/publisherModel");
const { v4: uuid } = require("uuid");
require("dotenv").config();

module.exports = {
    createPublisher: async (body) => {
        try {
          const publisher = {
            publisherId: uuid(),
            publisherName: body.publisherName,
            country: body.country,
            bio: body.bio,
          };
          const newPublisher = await publisherModel.createPublisher(publisher);
          if (newPublisher.error) {
            return {
              error: newPublisher.error,
            };
          }
          return {
            response: newPublisher.response,
          };
        } catch (error) {
          return {
            error: error.message,
          };
        }
      },
      getAllPublishers: async () => {
        try {
          const publishers = await publisherModel.getAllPublishers();
          if (publishers.error) {
            return {
              error: publishers.error,
            };
          }
          return {
            response: publishers.response,
          };
        } catch (error) {
          return {
            error: error.message,
          };
        }
      },
    };
    