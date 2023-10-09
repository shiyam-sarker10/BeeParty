import React from 'react';

const Booking = () => {
    return (
      <div className="my-20">
        <div className='space-y-4'>
          <h3 className=" font-custom text-center  text-[#FEBF05] tracking-tighter text-3xl">
            Let us know
          </h3>
          <h2 className="font-title font-bold text-3xl md:text-4xl lg:text-5xl text-center w-full md:w-1/2 mx-auto  text-gray-900">
            Celebrate in Style: Book Your Dream Birthday Bash!
          </h2>
          <p className="text-center text-gray-500">
            Turning Your Special Day into an Unforgettable Experience
          </p>
        </div>
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px] bg-white">
            <form>
              <div class="mb-5">
                <label
                  for="name"
                  class="mb-3 block text-base font-medium text-[#F7AC16]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="phone"
                  class="mb-3 block text-base font-medium text-[#F7AC16]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label
                  for="email"
                  class="mb-3 block text-base font-medium text-[#F7AC16]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="date"
                      class="mb-3 block text-base font-medium text-[#F7AC16]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="time"
                      class="mb-3 block text-base font-medium text-[#F7AC16]"
                    >
                      Time
                    </label>
                    <input
                      type="time"
                      name="time"
                      id="time"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>

              <div class="mb-5 pt-3">
                <label class="mb-5 block text-base font-semibold text-[#F7AC16] sm:text-xl">
                  Address Details
                </label>
                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <input
                        type="text"
                        name="area"
                        id="area"
                        placeholder="Enter area"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        placeholder="Enter city"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <input
                        type="text"
                        name="state"
                        id="state"
                        placeholder="Enter state"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <input
                        type="text"
                        name="post-code"
                        id="post-code"
                        placeholder="Post Code"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button class="hover:shadow-form w-full rounded-md bg-[#FEBF05] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Booking;