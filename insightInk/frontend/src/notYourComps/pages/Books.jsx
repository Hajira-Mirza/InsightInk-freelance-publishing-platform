const Books = () => {
  return (
    <div className="bg-blue-200 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">This is the Books Page</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Book 1</h3>
          <p>Description of book 1...</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Book 2</h3>
          <p>Description of book 2...</p>
        </div>
      </div>
    </div>
  );
};

export default Books;
