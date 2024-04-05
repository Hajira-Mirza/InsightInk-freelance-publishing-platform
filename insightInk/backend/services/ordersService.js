const ordersModel = require("../models/ordersModel");
const { v4: uuid } = require("uuid");
require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51P05JJLmoq3d8rZ8YE065yDQklJ1QSseZqGt8Cmir5HqaDZSsDFSOWW6jiByVLEMvGESGBGbWcZTBAxV4DOyEzv800hGRE67uI"
);

const YOUR_DOMAIN = "http://localhost:7001";

module.exports = {
  createOrder: async (body) => {
    try {
      /*   const isUser = await userModel.getUserByUserByEmail(body.emailAddress);
      if (isUser.error || isUser.response) {
        return {
          error: "This user already exists!",
        };
      } */
      const Order = {
        publisherId: uuid(),
        publisherName: body.publisherName,
        authorName: body.authorName,
        bookInfo: body.bookInfo,
        bookName: body.bookName,
      };
      const newOrder = await ordersModel.createOrder(Order);
      if (newOrder.error) {
        return {
          error: newOrder.error,
        };
      }
      // Create the checkout session
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: Order.bookName,
              },
              unit_amount: 1000, // Amount in cents
            },
            quantity: 1,
          },
        ],
        payment_method_types: ["card"],
        mode: "payment",
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
  getAllOrders: async () => {
    try {
      const Orders = await ordersModel.getAllOrders();
      if (Orders.error) {
        return {
          error: Orders.error,
        };
      }
      return {
        response: Orders.response,
      };
    } catch (error) {
      console.log("ctcherorrv", error);
      return {
        error: error.message,
      };
    }
  } /* 
  updateUser: async (body) => {
    try {
      const user = await userModel.updateUser(body, body.userId);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  deleteUser: async (query) => {
    try {
      const user = await userModel.deleteUser(query.userId);
      if (deletedUser.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  }, */,
};
