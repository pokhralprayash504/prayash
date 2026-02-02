import img from "../assets/expensive.png";
const data = [
  {
    id: 1,
    title: "Enjoy  ",
    title2: "with",
    title3: "Earphone",

    img: img,
  },
  {
    id: 2,
    title: "Enjoy  ",
    title2: "with",
    title3: "Earphone",

    img: img,
  },
  {
    id: 3,
    title: "Enjoy  ",
    title2: "with",
    title3: "Earphone",

    img: img,
  },
];

const Category2
 = () => {
  return (
    <div
      className="grid grid-cols-1  sm:grid-cols-4 px-12 gap-10 mt-12
    "
    >
      {data.map((i, id) => (
        <div
          className={`bg-yellow-200 p-6 rounded-3xl h-75 relative  ${id ===  0  ? "col-span-2" : ""} `}
        >
          <div className="flex flex-col items-start">
            <h1 className="text-gray-600">{i.title}</h1>
            <h1 className="text-2xl font-semibold text-gray-500">{i.title2}</h1>
            <h1 className="text-5xl text-blue-500">{i.title3}</h1>
          </div>
          <div className="absolute -right-24 top-10  ">
            <img src={img} alt="" className="h-50 " />
            <button className="bg-red-500 text-gray-100 px-5 py-1 rounded-full ">Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category2;
