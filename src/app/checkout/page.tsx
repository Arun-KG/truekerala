"use client";

import Image from "next/image";

export default function Checkout() {
  return (
    <section className="flex items-center justify-center pt-24 sm:pt-52">
      <div className="flex items-center justify-center w-full max-w-7xl flex-col lg:flex-row">
        <div className="flex-1 m-6">
          <p className="font-barlow leading-7 text-[#333333] text-xl mb-6">
            If you experience any issues during the purchase, <br />
            Please call : <u>+91 88488 95303</u>
          </p>
          <p>Shipping Address</p>
          <form action="">
            <input
              placeholder="Enter your name"
              name="name"
              type="text"
              id="name"
              className="border-2 w-full rounded-full px-4 p-1 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
            />
            <input
              placeholder="Enter your email"
              name="email"
              type="email"
              id="email"
              className="border-2 w-full rounded-full px-4 p-1 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
            />
            <div className="flex items-center px-4">
              <input
                id="formBasicCheckbox"
                type="checkbox"
                className="w-4 h-4 mr-3 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                title=""
                htmlFor="formBasicCheckbox"
                className="form-check-label"
              >
                Email me with news and offers
              </label>
            </div>
            <input
              placeholder="Enter your phone number"
              name="phone"
              type="number"
              id="phone"
              className="border-2 w-full rounded-full px-4 p-1 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
            />
            <input
              placeholder="Enter your address"
              name="address"
              type="text"
              id="address"
              className="border-2 w-full rounded-full px-4 p-1 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
            />
            <input
              placeholder="Enter your landmark"
              name="landmark"
              type="text"
              id="landmark"
              className="border-2 w-full rounded-full px-4 p-1 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
            />
            <div className="flex">
              <input
                placeholder="Enter your city"
                name="city"
                type="text"
                id="city"
                className="border-2 w-full rounded-full px-4 p-1 mr-2 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
              />
              <input
                placeholder="Enter your district"
                name="district"
                type="text"
                id="district"
                className="border-2 w-full rounded-full px-4 p-1 mr-2 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
              />
              <select
                name="state"
                id="state"
                defaultValue=""
                className="border-2 w-full rounded-full px-4 p-1 mr-2 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
              >
                <option value="">Select your State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <input
              placeholder="Enter your ZIP code"
              name="zipcode"
              type="text"
              id="zipcode"
              className="border-2 w-full rounded-full px-4 p-1 border-gray-300 transition-all duration-300 outline-none my-2 focus:border-yellow-400 focus:drop-shadow-lg"
            />
          </form>
        </div>
        <div className="flex-1 flex-col m-6">
          <div className="flex w-full">
            <Image
              src="/chips1.jpg"
              alt="health-first-policy"
              width={100}
              height={100}
              className="w-24 border-[1px] rounded-xl border-gray-600 drag-none select-none"
            />
            <div className="pl-4 w-full">
              <p className="font-barlow text-[#333333] text-lg font-semibold leading-7">
                Organic Nendran Banana Chips
              </p>
              <p className="my-3">125g</p>
              <div className="flex items-center justify-between">
                <div>
                  <span>Quantity : </span>
                  <button className="font-bold text-xl px-2 py-0  border-[1px] rounded-full transition-colors duration-300 border-gray-600 hover:bg-slate-200 active:bg-slate-300">
                    -
                  </button>
                  <span className="font-semibold mx-3">2</span>
                  <button className="font-bold text-xl px-[.4rem] py-0  border-[1px] rounded-full transition-colors duration-300 border-gray-600 hover:bg-slate-200 active:bg-slate-300">
                    +
                  </button>
                </div>
                <p>₹320</p>
              </div>
            </div>
          </div>
          <hr className="grow border-b border-gray-300 my-4"></hr>
          <div>
            <div className="flex items-center justify-between mb-5">
              <p className="font-barlow font-semibold">Subtotal</p>
              <p>₹320</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-barlow font-semibold">Shipping</p>
              <p>Free</p>
            </div>
          </div>
          <hr className="grow border-b border-gray-300 my-4"></hr>
          <div className="flex items-center justify-between">
            <p className="font-barlow font-semibold">Totoal</p>
            <p className="font-barlow font-semibold">₹360</p>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="uppercase bg-[#2f6e3b] text-white px-14 py-3 rounded-full transition-colors duration-100 hover:bg-[#317a70] active:bg-[#31657a]">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
