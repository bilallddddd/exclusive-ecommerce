import { allProductsStore } from "../data/allProductsStore.json";
import { relatedItems } from "../data/relatedItems.json";
import Footer from "./Footer";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import StarRatings from "react-star-ratings";
import { HiOutlineHeart, HiOutlineEye } from "react-icons/hi";
import "../components-css/viewproduct.css";
import { CartContext } from "../context/cart-context";
import { WishListContext } from "../context/wishlist-context";
import { Link } from "react-router-dom";

function ViewProduct() {
  const { addToCart } = useContext(CartContext);
  const { addToWishList } = useContext(WishListContext);
  const { productID } = useParams();
  const [currentProduct, setCurrentProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    for (let product of allProductsStore) {
      if (productID === product.id) {
        setCurrentProduct(product);
      }
    }
  }, [setCurrentProduct, productID]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <>
      <Header />

      <div className="details-container">
        <div className="img-container">
          <img
            src={currentProduct.img}
            alt={currentProduct.alt}
            style={{ width: "100%", maxWidth: "500px" }}
          />
        </div>

        <div className="product-details-container" style={{ padding: "0" }}>
          <h1 style={{ fontWeight: "bold", fontSize: "20px" }}>
            {currentProduct.name}
          </h1>
          <div>
            <StarRatings
              rating={currentProduct.stars}
              starDimension="20px"
              starSpacing="2px"
              starRatedColor="orange"
            />
            <span>({currentProduct.reviews} reviews)</span>
          </div>
          <h2 style={{ fontSize: "20px" }}>${currentProduct.price}</h2>
          <p style={{ marginTop: "1rem" }}>{currentProduct.description}</p>
          <hr style={{ marginTop: "1rem" }} />
          <div
            className="quantity-action"
            style={{
              display: "flex",
              gap: "2rem",
              marginTop: "2rem",
              alignItems: "center",
            }}
          >
            <div className="product-quantity">
              <button
                onClick={decreaseQuantity}
                style={{ backgroundColor: "#DB4444" }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={increaseQuantity}
                style={{ backgroundColor: "#DB4444" }}
              >
                +
              </button>
            </div>
            <div className="product-actions">
              <button className="buy">Buy Now</button>
              <button
                style={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                <HiOutlineHeart className="w-full h-full" />
              </button>
            </div>
          </div>
          <div
            className="free-return"
            style={{ border: "1px solid #ccc", borderRadius: "5px" }}
          >
            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                margin: "1rem",
                alignItems: "center",
              }}
            >
              <div>
                <img src="/icons/icon-delivery.png" />
              </div>

              <div>
                <h1
                  style={{
                    padding: "5px",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Free Delivery
                </h1>
                <p
                  style={{
                    padding: "5px",
                    textDecoration: "underline",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>

            <hr></hr>

            <div
              style={{
                display: "flex",
                gap: "1.5rem",
                margin: "1rem",
                alignItems: "center",
              }}
            >
              <div>
                <img src="/icons/Icon-return.png" />
              </div>

              <div>
                <h1
                  style={{
                    padding: "5px",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Return your delivery
                </h1>
                <p
                  style={{
                    padding: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Free 30 days Delivery returns.{" "}
                  <span style={{ textDecoration: "underline" }}>details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="related-items">
        <div className="wrapper">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-[1.3rem] h-[3rem] rounded-md bg-accent"></span>
            <h5 className="text-base text-action font-bold">Related Items</h5>
          </div>
          <div className="flex w-full flex-wrap justify-center gap-6 overflow-x-hidden">
            {relatedItems.map((product) => (
              <div className="flex flex-col gap-1 w-[14rem] max-sm:w-[9rem]" key={product.id}>
                <div className="group flex flex-col items-center justify-center w-full h-[13rem] max-sm:h-[10rem] rounded-md p-4 bg-secondary relative transition-all overflow-hidden">
                  <img
                    className="hover:scale-[1.2] transition-all"
                    src={product.img}
                    alt={product.alt}
                  />
                  <span className="absolute w-max h-max px-2 rounded-md bg-accent left-3 top-2 text-sm text-primary">
                    {product["discount-percentage"]}
                  </span>
                  <div className="absolute top-2 right-3 flex flex-col gap-4">
                    <button
                      className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]"
                      onClick={() => addToWishList(product)}
                    >
                      <HiOutlineHeart className="w-full h-full" />
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-white w-6 h-6 rounded-full flex items-center justify-center p-[1px]"
                    >
                      <HiOutlineEye className="w-full h-full" />
                    </Link>
                  </div>
                  <button
                    className="w-full h-[2rem] absolute bottom-0 bg-black text-primary hidden max-lg:block group-hover:block"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
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
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ViewProduct;
