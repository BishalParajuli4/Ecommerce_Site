import Card from "../components/card";

import Carousel from "../components/carousel";

import Footer from "../components/footer";

const slides = ["p1.jpg", "p2.jpg", "p1.jpg", "p2.jpg"];
const Home = () => {
  return (
    <>
      <div className=" bg-[#F4FFC3]">
        <div className="w-230 h-full flex justify-center px-4 bg-[#F4FFC3]  sm:p-0 m-auto">
          <Carousel slides={slides} />
        </div>
        <div className=" flex justify-center text-[#FFFF] font-bold text-5xl space-x-3 p-5">
          <label className="bg-[#f7ad0d] w-[4rem] flex justify-center pb-2 rounded-lg">
            I
          </label>
          <label className="bg-[#f7ad0d] w-[4rem] flex justify-center rounded-lg">
            T
          </label>
          <label className="bg-[#f7ad0d] w-[4rem] flex justify-center rounded-lg">
            E
          </label>
          <label className="bg-[#f7ad0d] w-[4rem] flex justify-center rounded-lg">
            M
          </label>
          <label className="bg-[#f7ad0d] w-[4rem] flex justify-center rounded-lg">
            S
          </label>
        </div>

        <Card />

        <div className="mt-15">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Home;
