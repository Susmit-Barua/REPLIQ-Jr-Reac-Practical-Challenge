import React from "react";
import { fetchApi, baseURL } from "../../utils/fetchApi";
import Image from "next/image";
import { useStateContext } from "../../utils/StateContext";
export default function Productdetail({ products }) {
  const { incQty, decQty, qty, onAdd } = useStateContext();
  return (
    <div className="container mx-auto">
      <div className="grid gap-6 grid-cols-5">
        <div className="col-span-3">
          <div className="aspect-square flex items-center">
            <Image
              src={`https://${products.media.images[0].url}`}
              alt="img"
              width={400}
              height={300}
            />
          </div>
          <div className="flex relative">
            <button className="absolute left-0 top-0 h-full text-white bg-black/30 hover:bg-black/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="absolute right-0 top-0 h-full text-white bg-black/30 hover:bg-black/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="flex items-center w-24 h-24 border border-1 border-gray-300 hover:border hover:border-purple-600 transition-colors">
              <Image
                src={`https://${products.media.images[0].url}`}
                alt="img"
                width={400}
                height={300}
              />
            </div>
            <a
              href="#"
              className="flex items-center w-24 h-24 border border-1 border-gray-300 hover:border hover:border-purple-600 transition-colors"
            >
              <Image
                src={`https://${products.media.images[1].url}`}
                alt="img"
                width={400}
                height={300}
              />
            </a>
            <a
              href="#"
              className="flex items-center w-24 h-24 border border-1 border-gray-300 hover:border hover:border-purple-600 transition-colors"
            >
              <Image
                src={`https://${products.media.images[2].url}`}
                alt="img"
                width={400}
                height={300}
              />
            </a>
            <a
              href="#"
              className="flex items-center w-24 h-24 border border-1 border-gray-300 hover:border hover:border-purple-600 transition-colors"
            >
              <Image
                src={`https://${products.media.images[3].url}`}
                alt="img"
                width={400}
                height={300}
              />
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="text-lg font-semibold">{products.name}</h1>
          <div className="text-xl font-bold mb-6">
            {products.price.current.text}
          </div>
          <div className="flex items-center mb-6">
            <div className="flex items-center text-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <a
              href="#"
              className="ml-3 font-normal text-purple-600 hover:text-purple-500"
            >
              67 reviews
            </a>
          </div>
          <div className="flex items-center justify-between mb-5">
            <label for="quantity" className="block font-bold mr-4">
              Quantity
            </label>
            <button
              className="bg-white px-5 py-1 text-xl uppercase tracking-widest rounded-full"
              onClick={incQty}
            >
              +
            </button>
            <span>{qty}</span>
            <button
              className="bg-white px-5 py-1 text-xl uppercase tracking-widest rounded-full"
              onClick={decQty}
            >
              -
            </button>
          </div>

          <button
            className="btn-primary py-4 text-lg flex justify-center min-w-0 w-full mb-6"
            onClick={() => onAdd(products, qty)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to Cart
          </button>
          <div className="text-gray-500 mb-6 wysiwyg-content">
            <table>
              <tbody>
                <tr>
                  <td>Brand</td>
                  <td>{products.brand.name}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{products.gender}</td>
                </tr>

                <tr>
                  <td>How to care?</td>
                  <td>{products.info.careInfo}</td>
                </tr>
              </tbody>
            </table>

            <p className="">{products.brand.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetchApi(
    `${baseURL}/products/v2/list?store=US&offset=0&categoryId=4209&limit=2&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US`
  );

  const products = res.products || [];

  const paths = products.map((value) => {
    return {
      params: { id: String(value.id) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const products = await fetchApi(
    `${baseURL}/products/detail?id=${params.id}&lang=en-US&store=US&currency=USD&sizeSchema=US`
  );
  // console.log(products);
  return {
    props: { products: products },
  };
};
