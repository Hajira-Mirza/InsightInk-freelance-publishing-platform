import Component10 from "./images Components/component10";
function NotFound() {
  return (
    <>
      <div className="h-screen w-screen bg-white flex justify-center items-center flex-col p-10">
        <Component10 />
        <h1 className="text-gray-700 text-center mb-7">Oops! Page Not Found...</h1>
        <p className="text-gray-700 text-center">The page that you&apos;re looking for might have been removed or is temporarily unavailable.</p>
      </div>
    </>
  );
}

export default NotFound;
