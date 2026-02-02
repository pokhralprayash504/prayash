import img from "../assets/headphone.png";
const data = [
  {
    title: "Beats Solo",
    title2: "Wireless",
    title3: "Head Phones",
    img: img,
  },
];

const Hero = () => {
  return (
    <div className="h-140 bg-gray-200 mx-12 rounded-3xl my-5">
      <div>
        {data.map((i) => (
          <div className="relative">
            <div className="flex flex-col p-24 ">
              <h2 className="text-2xl font-bold pb-4">{i.title}</h2>
              <h1 className="text-7xl font-bold pb-4">{i.title2}</h1>
              <h1 className="text-9xl uppercase font-bold text-white ">
                {i.title3}
              </h1>
              <div className="pt-5">
                <button className="bg-red-500 px-8 py-2 rounded-full text-white">Shop Now</button>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={i.img}
                alt=""
                className="absolute top-0 right-30 z-20"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
