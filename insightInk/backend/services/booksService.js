const booksModel = require("../models/booksModel");
const { v4: uuid } = require("uuid");
require("dotenv").config();

const stripe = require("stripe")(
  "sk_test_51P05JJLmoq3d8rZ8YE065yDQklJ1QSseZqGt8Cmir5HqaDZSsDFSOWW6jiByVLEMvGESGBGbWcZTBAxV4DOyEzv800hGRE67uI"
);

const YOUR_DOMAIN = "http://localhost:7000";

module.exports = {
  createBook: async (body) => {
    try {
      const book = {
        bookId: uuid(),
        publisherName: body.publisherName,
        authorName: body.authorName,
        bookInfo: body.bookInfo,
        bookName: body.bookName,
      };
      const newBook = await booksModel.createBook(book);
      if (newBook.error) {
        return {
          error: newBook.error,
        };
      }
      // Create the checkout session
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: book.bookName,
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
  getAllBooks: async () => {
    try {
      const books = await booksModel.getAllBooks();
      if (books.error) {
        return {
          error: books.error,
        };
      }
      return {
        response: books.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
