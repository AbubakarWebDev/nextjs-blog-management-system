import WithLayout from "../HOC/WithLayout";

function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-800 border-b-2 border-[#e5e7eb]">
        <div className="lg:flex container mx-auto px-6">
          <div className="flex items-center justify-center lg:text-left text-center lg:justify-start w-full pr-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Build Your New <span className="text-blue-600 dark:text-blue-400">Idea</span></h2>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

              <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                <a href="#" className="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                <a href="#" className="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
              </div>
            </div>
          </div>

          <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full h-full bg-cover" style={{ backgroundImage: 'url(https://source.unsplash.com/random/1280×720/?office,developer,computer,laptop)' }}>
              <div className="w-full h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WithLayout(Home, {title: "Home"});