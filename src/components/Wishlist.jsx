import Header from "./Header";
import Footer from "./Footer";
import JustForYou from "./JustForYou";
import { IoTrashOutline } from "react-icons/io5";
import { useContext } from "react";
import { WishListContext } from "../context/wishlist-context";
import { CartContext } from "../context/cart-context";
// import StarRatings from "react-star-ratings";

export default function Wishlist() {
  const { wishListItems, removeFromWishList, wishlistItemsCount } =
    useContext(WishListContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Header />
      <div className="flex flex-row flex-wrap justify-center w-max-full items-center mt-20 px-[7%]">
        <div className="w-full lg:w-max h-14 mb-20 items-center lg:gap-96 md:gap-10 sm:gap-0 flex flex-row justify-between">
          <h2 className="text-center text-black text-xl w-max inline-flex gap-4">
            Wishlist <span>{wishlistItemsCount}</span>
          </h2>
          <button className="text-secondary transition-all border border-black hover:border-active hover:text-primary hover:bg-action text-base  rounded-lg w-max h-10 px-2 justify-center">
            Move All To Bag
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center px-[7%]">
        <div className="flex flex-row flex-wrap w-full gap-6 justify-center overflow-x-hidden">
          {wishListItems.map((product) => {
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
                    <button
                      className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]"
                      onClick={() => removeFromWishList(product)}
                    >
                      <IoTrashOutline className="w-full h-full" />
                    </button>
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
                {/* <div>
                  <StarRatings
                    rating={product.stars}
                    starDimension="20px"
                    starSpacing="2px"
                    starRatedColor="orange"
                  />
                  <span>({product["times rated"]})</span>
                </div> */}
              </div>
            );
          })}
        </div>
      </div>

      <JustForYou />

      <Footer />
    </>
  );
}
