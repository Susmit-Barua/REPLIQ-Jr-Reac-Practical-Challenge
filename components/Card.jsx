import React from "react";
import Link from "next/link";
import Image from "next/image";

function Card({ productdetail }) {
  return (
    <Link href={`/product/${productdetail.id}`}>
      <div className="border border-1 border-gray-200 rounded-md hover:border-purple-600 transition-colors bg-white">
        <div className="block overflow-hidden">
          <Image
            src={`https://${productdetail.imageUrl}`}
            alt="img"
            className="rounded-lg hover:scale-105 hover:rotate-1 transition-transform"
            width={400}
            height={400}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg">
            <p>{productdetail.name}</p>
          </h3>
          <h5 className="font-bold">{productdetail.price.current.text}</h5>
        </div>
        <div className="flex justify-between py-3 px-4">
          <button className="w-10 h-10 rounded-full border border-1 border-purple-600 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white active:bg-purple-800 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
