import { AiOutlineSend } from "react-icons/ai";
import { HiOutlineQrcode } from "react-icons/hi"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap justify-between items-center w-full bg-black text-white py-14 pointer-events-none select-none">
      <div className="flex flex-wrap justify-between gap-6 w-full mb-6 px-[7%]">
        <div className="flex flex-col gap-2">
          <h2 className="text-[1.3rem] mb-3">Exclusive</h2>
          <h3 className="text-md">Subscribe</h3>
          <p className="text-sm">Get 10% off your first order</p>
          <p className="w-full flex relative items-center py-2">
            <input className="bg-black rounded text-[0.8rem] w-full h-[2rem] px-2 border-2 transition-all border-secondary hover:border-active outline-active" type="email" placeholder="Enter your email" />
            <button type="submit" className="absolute right-2"><AiOutlineSend className="pointer-events-none"/></button>
          </p>
        </div>

        <div className="flex flex-col gap-2 w-[15rem]">
          <h2 className="text-[1.3rem] mb-3">Support</h2>
          <p className="text-sm mb-1">fes</p>
          <p className="text-sm mb-1">exclusive@gmail.com</p>
          <p className="text-sm mb-1">+000000000</p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[1.3rem] mb-3">Account</h2>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/my-account">My Account</Link>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/login">Login / Register</Link>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/cart">Cart</Link>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/wishlist">Wishlist</Link>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/shop">Shop</Link>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-[1.3rem] mb-3">Quick Link</h2>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/privacy&policy">Privacy Policy</Link>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/terms-of-use">Terms Of Use</Link>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/faq">FAQ</Link>
          <Link className="text-sm mb-1 hover:underline hover:text-action transition-all" to="/contact">Contact</Link>
        </div>

        <div className="flex flex-col gap-2">
            <h2 className="text-[1.3rem] mb-3">Download App</h2>
            <p className="text-sm mb-1">Save $3 with App New User Only</p>
            <div className="flex w-full items-center gap-2">
                <span className="w-1/2 h-full">
                    <HiOutlineQrcode className="w-full h-full"/>
                </span>
                <div className="flex flex-col gap-2 w-1/2 h-[5rem] justify-between">
                <Link className="h-max w-full hover:border-2 rounded-md hover:border-action " to="#"><img className="w-full h-full" src="/icons/GooglePlay.svg"/></Link>
                <Link className="h-max w-full hover:border-2 rounded-md hover:border-action " to="#"><img className="w-full h-full" src="/icons/app-store.svg"/></Link>
                </div>
            </div>
        </div>
      </div>
      <p className="py-4 px-[7%] border-t-[0.8px] leading-10 border-secondary w-full text-center">&copy; Copyright 2026 bilal htiti</p>
    </footer>
  );
}
