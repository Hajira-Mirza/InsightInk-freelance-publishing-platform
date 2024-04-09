import Component10 from "./images Components/component10";
function NotFound() {
  return (
    <>
      <div className="h-screen w-screen bg-white flex justify-center items-center flex-col">
        <Component10 />
        <h1 className="text-gray-700">Oops, Page Not Found...</h1>
      </div>
    </>
  );
}

export default NotFound;
