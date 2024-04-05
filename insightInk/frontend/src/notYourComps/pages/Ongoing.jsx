import Publisher from './Publisher';
import publisherData from './publisherData';

const Ongoing = () => {
  return (
    <div>
      <h1>Ongoing Publishers</h1>
      <div className="flex overflow-auto justify-center items-center h-screen">
        <div className="max-h-screen overflow-y-auto w-full pb-40"> {/* Added pb-20 for bottom padding */}
          <div className="flex flex-wrap justify-center items-start w-full p-4">
            {publisherData.map((publisher) => (
              <div key={publisher.id} className="w-full sm:w-1/3 lg:w-1/3 p-4">
                <Publisher publisher={publisher} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ongoing;
