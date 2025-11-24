import PlayIcon from "../icons/PlayIcon";
import MoreIcon from "../icons/MoreIcon";

export const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-end">
      <img
        src="images/home-1.jpg"
        alt="Modern Architecture"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-darkOverlay"></div>

      <div className="container mx-auto relative z-10 pb-20 flex justify-between items-end">
        <div className="text-white max-w-lg mb-10">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            From Vision to Reality <br />— Built with Artistry <br />
            and Purpose
          </h1>
          <button className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm text-black py-3 px-6 rounded-2xl hover:bg-opacity-30 transition duration-300">
            <PlayIcon className="w-6 h-6 mr-3 text-current" aria-hidden="true" />
            Play Video
          </button>
        </div>

        <div className="space-y-4 mb-10">
          <div className="bg-transparent border border-glassMorphismBorder rounded-xl p-5 flex items-center justify-between w-124 text-white">
            <div>
              <p className="text-2xl font-semibold">17K Project</p>
              <p className="text-sm opacity-80">Made around the world</p>
            </div>
            <MoreIcon />
          </div>

          <div className="flex flex-col bg-glassMorphismBg border border-glassMorphismBorder rounded-xl p-3 flex w-124 text-white backdrop-blur-lg">
            <div className="">
              <img
                src="images/city.jpg"
                alt="Cityscape"
                className="rounded-2xl h-32 w-full object-cover p-1"
              />
            </div>
            <div className="flex flex-row mt-3">
            <div className="ml-4 flex-grow">
              <p className="text-2xl font-semibold">Iconic Architectur</p>
              <p className="text-xs opacity-80 leading-tight">
                Explore a handpicked collecti...
              </p>
            </div>
            <MoreIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};