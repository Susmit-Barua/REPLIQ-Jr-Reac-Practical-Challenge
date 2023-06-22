import React from "react";
import Image from "next/image";

export default function orderdetail() {
  return (
    <div class="container lg:w-2/3 xl:w-2/3 mx-auto">
      <h1 class="text-3xl font-bold mb-6">Order #1234 Details</h1>

      <div class="bg-white p-3 rounded-md shadow-md">
        <div>
          <table class="table-sm">
            <tbody>
              <tr>
                <td class="font-bold">Order #</td>
                <td>1234</td>
              </tr>
              <tr>
                <td class="font-bold">Order Date</td>
                <td>May 3, 07:28PM</td>
              </tr>
              <tr>
                <td class="font-bold">Status</td>
                <td>
                  <span class="bg-emerald-500 text-white p-1 rounded">
                    Paid
                  </span>
                </td>
              </tr>
              <tr>
                <td class="font-bold">SubTotal</td>
                <td>$307</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr class="my-5" />

        <div>
          <div class="flex gap-6">
            <div class="w-16 h-16 flex items-center border border-gray-300">
              <Image src="/src/Image/1_1.jpg" alt="" />
            </div>
            <div class="flex-1 flex flex-col justify-between pb-3">
              <h3 class="text-ellipsis mb-4">
                Columbia Flow Fremont sneakers in stone
              </h3>
            </div>
            <div class="flex flex-col justify-between items-end pb-3 w-32">
              <div class="text-lg mb-4">$156.99</div>
            </div>
          </div>

          <hr class="my-2" />

          <div class="flex gap-6">
            <div class="w-16 h-16 flex items-center border border-gray-300">
              <Image src="/src/Image/1_1.jpg" alt="" />
            </div>
            <div class="flex-1 flex flex-col justify-between pb-3">
              <h3 class="text-ellipsis mb-4">
                Columbia hatana breathe sneakers in sand
              </h3>
            </div>
            <div class="flex flex-col justify-between items-end pb-3 w-32">
              <div class="text-lg mb-4">$133.99</div>
            </div>
          </div>

          <hr class="my-2" />

          <div class="flex gap-6">
            <div class="w-16 h-16 flex items-center border border-gray-300">
              <Image src="/src/Image/1_1.jpg" alt="" />
            </div>
            <div class="flex-1 flex flex-col justify-between pb-3">
              <h3 class="text-ellipsis mb-4">
                Billabong tides flip flops in blue
              </h3>
            </div>
            <div class="flex flex-col justify-between items-end pb-3 w-32">
              <div class="text-lg mb-4">$17.99</div>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-300 pt-4">
          <button
            type="submit"
            class="btn-primary flex justify-center items-center w-full py-3 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}
