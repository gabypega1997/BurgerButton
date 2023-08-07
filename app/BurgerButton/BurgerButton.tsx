"use client";
import { useState } from "react";

const BurgerButton = () => {
    const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);

    const handlerBurgerMenuIsOpen = () => {
        setBurgerMenuIsOpen((state) => !state);
    };

    return (
        <div>
            <button
                // use 'sm:hidden' to show it just on mobile screen
                className={`flex flex-col gap-1 `}
                onClick={handlerBurgerMenuIsOpen}
            >
                <div
                    className={`w-10 h-1 transform rounded-md duration-500 bg-green-200   ${
                        burgerMenuIsOpen
                            ? " rotate-45 origin-center translate-y-2 "
                            : " rotate-0  "
                    }`}
                ></div>
                <div
                    className={`w-10 h-1 transform bg-green-200 rounded-md ${
                        burgerMenuIsOpen
                            ? "opacity-0 "
                            : "opacity-100 duration-500"
                    }`}
                ></div>
                <div
                    className={`w-10 h-1 transform  rounded-md duration-500 bg-green-200  ${
                        burgerMenuIsOpen
                            ? " -rotate-45 origin-center -translate-y-2  "
                            : " rotate-0   "
                    }`}
                ></div>
            </button>

            {burgerMenuIsOpen && (
                <div className="pt-10">
                    <h1>Menu</h1>
                </div>
            )}
        </div>
    );
};

export default BurgerButton;
