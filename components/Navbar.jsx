import Link from "next/link";
import { Dropdown } from "flowbite-react";
import Cart from "./Cart";
import { AiOutlineShopping } from "react-icons/ai";
import { GiRunningShoe } from "react-icons/gi";
import { useStateContext } from "../utils/StateContext";
// import Image from "next/image";
// import logo from "@/public/sneakers.png";
function Navbar() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <header className="flex justify-between bg-slate-800 shadow-md text-white">
      <div>
        <Link href="/" class="block py-navbar-item pl-5 text-2xl">
          <GiRunningShoe />
        </Link>
      </div>

      <nav>
        <ul className="grid grid-flow-col items-center">
          <li className="mr-5">
            <button
              type="button"
              className="cart-icon"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>

            {showCart && <Cart />}
          </li>

          <Dropdown label="Dashboard">
            <Link href={"/admin/dashboard"}>
              <Dropdown.Item>Dashboard</Dropdown.Item>
            </Link>
            <Link href={"/admin/productList"}>
              <Dropdown.Item>Products</Dropdown.Item>
            </Link>
            <Link href={"/admin/user"}>
              <Dropdown.Item>Users</Dropdown.Item>
            </Link>
            <Link href={"/admin/orders"}>
              <Dropdown.Item>Orders</Dropdown.Item>
            </Link>
          </Dropdown>

          <li>
            <Link
              href="/admin/login"
              className="flex items-center py-navbar-item px-navbar-item hover:bg-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/admin/register"
              className="inline-flex items-center text-white bg-emerald-600 py-2 px-3 rounded shadow-md hover:bg-emerald-700 active:bg-emerald-800 transition-colors mx-5"
            >
              Register now
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
