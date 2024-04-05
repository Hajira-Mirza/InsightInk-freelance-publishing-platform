import React from 'react';

const OrdersPage = ({ orders }) => {
  return (
    <div className="h-screen bg-pink-400 container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Your Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-start border border-gray-300">
            <h2 className="text-xl font-bold mb-2 text-blue-700">{order.publisherName}</h2>
            <p className="text-gray-600"><span className="font-semibold">Author:</span> {order.authorName}</p>
            <p className="text-gray-600"><span className="font-semibold">Book Name:</span> {order.bookName}</p>
            <p className="text-gray-600"><span className="font-semibold">Book Info:</span> {order.bookInfo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
