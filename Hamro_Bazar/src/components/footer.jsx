import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 font-serif">
      <div className="container mx-auto my-auto px-6 lg:px-16 flex flex-col justify-around lg:flex-row  items-start lg:items-stretch ">
        {/* Left Section */}
        <div className="mb-6 mr-15 lg:mb-0">
          <h2 className="text-[#FFF]  text-2xl font-bold underline">Bhat#Bhateni</h2>

          <p className="mt-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            obcaecati ducimus repudiandae, itaque dolorem quidem animi
            praesentium id voluptates. Deserunt aperiam voluptate molestias
            minus numquam a in qui excepturi officia.
          </p>
          <button className="mt-4 border border-[#F4FFC3] text-[#F4FFC3] px-4 py-2 rounded-lg hover:bg-[#ffdc91] hover:text-gray-900">
            Read More
          </button>
        </div>

        {/* Center Section */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3 mr-15 underline">Shop Info</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQs & Help</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3 mr-15 underline">Contact</h3>
            <p>Address: Butwal-12,Nayagaun </p>
            <p>Email: bishalsharma2004@gmail.com</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 underline ">Partners</h3>
            <p>Daraz</p>
            <p>Amazon</p>
            <p>FlipKart</p>
            <p>Myntra</p>
            <p>Mesoo</p>
            <p>Ebay</p>
            <p>AliExpress</p>
            <button className="mt-4 border border-[#F4FFC3] text-[#F4FFC3] px-4 py-2 rounded-lg hover:bg-[#ffdc91] hover:text-gray-900">
            See More ..
          </button>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4 m-auto lg:mt-0 justify-center">
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full ">
          <a
            href="https://www.facebook.com/bishal.parajuli.3388"
            target="_blank"
          >
            <FaFacebookF className="text-2xl" />
          </a>
        </span>
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
          <a href="https://www.instagram.com/bishalparajuli14/" target="_blank">
            <FaInstagram className="text-2xl" />
          </a>
        </span>
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
          <a href="https://github.com/BishalParajuli4" target="_blank">
            <FaGithub className="text-2xl" />
          </a>
        </span>
        <span className="w-10 h-10 flex items-center justify-center border border-white rounded-full">
          <a
            href="https://www.linkedin.com/in/bishal-sharma-parajuli-999418288/"
            target="_blank"
          >
            <FaLinkedinIn className="text-2xl" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
