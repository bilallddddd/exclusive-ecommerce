import { useContext } from "react";
import { justforyou } from "../data/justforyou.json";
import { IoEyeOutline } from "react-icons/io5";
import StarRatings from "react-star-ratings";
import { CartContext } from "../context/cart-context";
import { Link } from "react-router-dom";

export default function JustForYou() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="flex flex-row  justify-center items-center mt-20 px-[7%]">
        <div className="flex flex-row w-full lg:w-9/12 md:w-9/12 gap-4 mb-8 justify-between flex-wrap">
          <div className="flex items-center max h-10  ml-0 relative">
            <span className="w-5 h-10 left-0 top-0 absolute bg-red-500 rounded" />
            <h2 className="text-2xl max-sm:text-xl ml-8 font-bold lg:mr-32 ">
              Just For You
            </h2>
          </div>
          <Link
            className="text-secondary transition-all border border-black hover:border-active hover:text-primary hover:bg-action text-base  rounded-lg w-max h-max py-1 px-2 justify-center"
            to={"/all-products"}
          >
            See All
          </Link>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center  justify-self-center px-[7%]">
        <div className="flex flex-row flex-wrap w-full gap-6 mb-20  justify-center overflow-x-hidden">
          {justforyou.map((product) => {
            return (
              <div
                className="flex flex-col gap-1 w-[14rem] max-sm:w-[9rem] relative"
                key={product.id}
              >
                <div className="group flex flex-col items-center justify-center w-full h-[13rem] max-sm:h-[10rem] rounded-md p-4 bg-secondary relative transition-all overflow-hidden">
                  <img
                    className="hover:scale-[1.2] transition-all"
                    src={product.img}
                    alt={product.alt}
                    loading="lazy"
                  />
                  <span className="absolute w-max h-max px-2 rounded-md bg-accent left-3 top-2 text-sm text-primary">
                    {product["discount-percentage"]}
                  </span>
                  <div className="absolute top-2 right-3 flex flex-col gap-4">
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]"
                    >
                      <IoEyeOutline className="w-full h-full" />
                    </Link>
                  </div>
                  <button
                    className="w-full h-[2rem] absolute bottom-0 bg-black text-primary block max-lg:block group-hover:block"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
                <h3 className="text-md font-medium">{product.name}</h3>
                <div className="flex gap-2 items-center">
                  <span className="text-action">{`$${product["discount-price"]}`}</span>
                  <span className="line-through">{`$${product.price}`}</span>
                </div>
                <div>
                  <StarRatings
                    rating={product.stars}
                    starDimension="20px"
                    starSpacing="2px"
                    starRatedColor="orange"
                  />
                  <span>({product["times rated"]})</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
