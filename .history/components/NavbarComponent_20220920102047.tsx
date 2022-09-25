import React from "react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { X } from "react-feather";
import Image from "next/image";

const NavbarComponent = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [open, setOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
    setOpen(!open);
  }

  function openModal() {
    setIsOpen(true);
    setOpen(!open);
  }

  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="">
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-400"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-80" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-500"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-400"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="relative w-full min-w-screen min-h-screen transform overflow-hidden bg-black  transition-all">
                    <div className="relative flex items-center justify-end">
                      <div className="absolute top-6 w-[140px] h-[44px] left-4">
                        <Image
                          src="/Assets/logowhite.svg"
                          layout="fill"
                          alt=""
                          className=""
                        />
                      </div>
                      <div className="absolute flex flex-row items-center top-6 right-6">
                        <div>
                          <Link href="#">
                            <div className="rounded-full border-2 border-white px-5 pt-2 flex items-center justify-center pb-3 text-white cursor-pointer">
                              <h1 className="text-lg leading-none">Bookings</h1>
                            </div>
                          </Link>
                        </div>
                        <div onClick={closeModal}>
                          <div className="w-14 flex justify-end items-center">
                            <div className="group z-50 relative w-6 h-6 cursor-pointer flex flex-col justify-between items-center">
                              {/* the btn */}
                              <span
                                className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                                  open ? "rotate-45 translate-y-2.5" : ""
                                }`}
                              />
                              <span
                                className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                                  open ? "w-0" : "w-full"
                                }`}
                              />
                              <span
                                className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
                                  open ? "-rotate-45 -translate-y-2.5" : ""
                                }`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* put the subscribe text here */}
                    <div className="flex flex-col md:flex-row  min-h-screen min-w-screen text-white">
                      <div className="flex-1 order-2 md:order-1">
                        <div>
                          <h1>Prince Nuevo</h1>
                          <h2>
                            Professioanl Photgrapher film maker based in Ghana,
                            Accra.
                          </h2>
                        </div>
                        <div>
                          <div>email@email.com</div>
                          <div>+233 549321512</div>
                        </div>
                      </div>
                      <div className="flex-1 order-1 md:order-2">
                        {" "}
                        Navigations
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <div className="w-11/12 flex justify-end items-center">
        <div
          className="group z-50 relative w-6 h-6 cursor-pointer flex flex-col justify-between items-center"
          onClick={openModal}
        >
          {/* the btn */}
          <span
            className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-white rounded-lg group-hover:text-red cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;