import { Link } from "react-router-dom";
import { newArrivals } from "../data/newArrivals.json";

export default function NewArrivals() {
  return (
    <section className="w-full px-[7%] my-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="block w-[1.3rem] h-[3rem] rounded-md bg-accent"></span>
        <h5 className="text-base text-action font-bold">Featured</h5>
      </div>
      <div className="flex w-full items-center gap-6 mb-8 justify-between">
        <h2 className="text-3xl max-sm:text-xl font-bold">New Arrival</h2>
      </div>
      <div className="flex w-full gap-6 justify-center max-md:flex-wrap">
        <div className="w-1/2 bg-black p-6 max-md:h-[20rem] max-md:w-full">
          {newArrivals.map((newArrival, index) => {
            return (
              index === 0 && (
                <div
                  className="flex items-center justify-center  w-full h-full relative text-primary"
                  key={newArrival.id}
                >
                  <img
                    className="h-full"
                    src={newArrival.src}
                    alt={newArrival.alt}
                  />
                  <div className="absolute bottom-0 left-0 flex flex-col gap-2 w-1/2 max-lg:w-full">
                    <h3 className="text-2xl max-lg:text-xl font-bold">{newArrival.product}</h3>
                    <p className="text-base ">{newArrival.description}</p>
                    <Link
                      className="text-base underline hover:text-action transition-all"
                      to={newArrival["shop link"]}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center">
          <div className="w-full p-6 bg-black h-full max-md:h-[20rem] max-lg:h-max">
            {newArrivals.map((newArrival, index) => {
              return (
                index === 1 && (
                  <div
                    className="grid place-items-end w-full h-full relative text-primary"
                    key={newArrival.id}
                  >
                    <img
                      className="h-full"
                      src={newArrival.src}
                      alt={newArrival.alt}
                    />
                    <div className="absolute bottom-0 left-0 flex flex-col gap-2 w-1/2 max-lg:w-full">
                      <h3 className="text-2xl max-lg:text-xl font-bold">
                        {newArrival.product}
                      </h3>
                      <p className="text-base">{newArrival.description}</p>
                      <Link
                        className="text-base underline hover:text-action transition-all"
                        to={newArrival["shop link"]}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                )
              );
            })}
          </div>
          <div className="flex w-full items-center justify-center h-1/2 max-lg:h-max gap-6 max-lg:flex-wrap">
          <div className="bg-black p-6 w-full h-full max-md:h-[20rem] max-lg:h-[14rem]">
          {newArrivals.map((newArrival, index) => {
                return (
                  index === 2 && (
                    <div
                      className="flex items-center justify-center  w-full h-full relative text-primary"
                      key={newArrival.id}
                    >
                      <img
                        className="h-full"
                        src={newArrival.src}
                        alt={newArrival.alt}
                      />
                      <div className="absolute bottom-0 left-0 flex flex-col gap-2 w-full max-md:w-full">
                        <h3 className="text-2xl max-lg:text-xl font-bold">
                          {newArrival.product}
                        </h3>
                        <p className="text-base">{newArrival.description}</p>
                        <Link
                          className="text-base underline hover:text-action transition-all"
                          to={newArrival["shop link"]}
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
            <div className="bg-black p-6 w-full h-full max-md:h-[20rem] max-lg:h-[14rem]">
              {newArrivals.map((newArrival, index) => {
                return (
                  index === 3 && (
                    <div
                      className="flex items-center justify-center w-full h-full relative p-6 text-primary"
                      key={newArrival.id}
                    >
                      <img
                        className="h-full"
                        src={newArrival.src}
                        alt={newArrival.alt}
                      />
                      <div className="absolute bottom-0 left-0 flex flex-col gap-2 w-full max-md:w-full">
                        <h3 className="text-2xl max-lg:text-xl font-bold">
                          {newArrival.product}
                        </h3>
                        <p className="text-base">{newArrival.description}</p>
                        <Link
                          className="text-base underline hover:text-action transition-all"
                          to={newArrival["shop link"]}
                        >
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
