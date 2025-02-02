import { useQuery } from "@tanstack/react-query";
const Card = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      try {
        const dataFetch = await fetch("https://fakestoreapi.com/products");
        if (dataFetch.ok) {
          const jsonData = await dataFetch.json();
          return jsonData;
        } else {
          throw new console.error("unable to fetch data");
        }
      } catch (error) {
        console.log(error);
      }
    },
    queryKey: ["getProducts"],
  });
  // Check if loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[100vh] font-serif">
        Loading...
      </div>
    );
  }

  // Check if error
  if (isError) {
    console.log("Error while fetching data");
    return <div className="font-serif">Error fetching data</div>;
  }

  // Check if data is undefined or null
  if (!data) {
    console.log("Data is undefined or null");
    return <div>Data </div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-5 sm:m-5 lg:m-5 md:m-5">
        {data.map((item) => (
          <div
            className="bg-[#fad337] p-1  rounded-lg w-full md:w-[18rem] lg:w-[18rem] xl:w-[18rem]  h-auto  hover:drop-shadow-xl"
            key={item.id}
          >
            <img
              src={item.image}
              alt="product"
              className="h-[18rem] w-full rounded-t-lg"
            />

            <div className="p-3">
              <h1 className="font-bold line-clamp-1  font-serif">
                {item.title}
              </h1>
              <h4 className="font-bold text-red-950 font-serif">
                Rs.{item.price}
              </h4>

              <div className="flex justify-center p-4 font-serif">
                <button className=" text-xl   font-bold border border-[#edd457] bg-[#f7ad0d] rounded-lg text-[#F4FFC3] w-[8rem] hover:bg-[#F4FFC3] hover:text-[#ffdc91] ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Card;
