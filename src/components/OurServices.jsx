import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine, RiShieldCheckLine } from "react-icons/ri";

export default function OurServices() {
    return (
        <section className="w-full px-[5%] my-20">
            <div className="flex w-full items-center justify-center gap-[3rem] flex-wrap">
            <div className="flex flex-col items-center justify-center gap-4 w-max">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-secondary"><TbTruckDelivery className="w-3/4 h-3/4 bg-black rounded-full text-primary p-2" /></div>
                <h3 className="text-lg font-bold ">FREE AND FAST DELIVERY</h3>
                <p className="text-base">Free delivery for all orders over $140</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-max">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-secondary"><RiCustomerServiceLine className="w-3/4 h-3/4 bg-black rounded-full text-primary p-2" /></div>
                <h3 className="text-lg font-bold ">24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer support</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-max">
                <div className="w-20 h-20 rounded-full flex items-center justify-center bg-secondary"><RiShieldCheckLine className="w-3/4 h-3/4 bg-black rounded-full text-primary p-2" /></div>
                <h3 className="text-lg font-bold ">MONEY BACK GUARANTEE</h3>
                <p>We reurn money within 30 days</p>
            </div>
            </div>
        </section>
    )
}