import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 space-y-12 my-10">
          <h1 className="text-4xl font-bold leading-snug">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            temporibus ullam blanditiis corrupti, dolore atque soluta
            praesentium sit accusamus aliquid deleniti voluptatem nesciunt aut
            nobis?
          </p>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-6 w-6 text-gray-500"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow p-2 text-gray-700 focus:outline-none"
              placeholder="Email"
            />
          </label>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>

        {/* Right Image Section */}
        <div className="order-1 w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={banner}
            className="w-full h-auto max-w-md md:max-w-lg object-cover"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
