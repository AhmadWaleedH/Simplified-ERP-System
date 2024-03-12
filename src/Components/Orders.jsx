import { Link, useNavigate } from "react-router-dom";
import Graph from "./Graph";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io"
import { ProductCard } from "./ProductCard";
import { HeroSection } from "./HeroSection";
import { CiViewList } from "react-icons/ci";
import { SearchBar } from "./SearchBar";
import React, { useState } from 'react';

//Mock Data for Order Listings

const recentOrderData = [
    {
        id: "1167896",
        customer_name: "Shirley Sharma",
        order_date: "2022-05-17T03:24:00",
        current_order_status: "PLACED",
    },
    {
        id: "1254321",
        customer_name: "Ryan Banerjee",
        order_date: "2022-05-14T05:24:00",
        current_order_status: "CONFIRMED",
    },
    {
        id: "1183896",
        customer_name: "Aditya Chawdhury",
        order_date: "2022-05-17T03:24:00",
        current_order_status: "DELIVERED",
    },
    {
        id: "1378901",
        customer_name: "Anindita Saha",
        order_date: "2022-05-14T05:24:00",
        current_order_status: "SHIPPED",
    },

];

export function Orders() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal visibility 
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data); // You can replace this with your logic to handle the submitted data 
        toggleModal(); // Optionally close the modal on form submit 
    };


    //Functionality like deleting orders on clicking delete icon
    let history = useNavigate();
    const handleDelete = (id) => {
        var index = recentOrderData.map((e) => {
            return e.id
        }).indexOf(id)
        recentOrderData.splice(index, 1);

        history('/orders');
    }

    return (
        <> 
            <div className="pl-4 pr-4 pb-4">
            <HeroSection />
            </div>
            
            <div className="sm:flex block">   
                <div className="p-4"><ProductCard /></div>

                <div className="sm:w-[1500px] w-[100%] rounded-lg p-4">
                    <div className="border border-gray-700 pl-[4rem] py-6 bg-gray-800 rounded-t-lg"><SearchBar /></div>
                    <div className="border border-gray-700 rounded-b-lg "><Graph /></div>
                </div>
            </div>
            {/* Listing of orders, including details like order ID, customer name, order date, and status */}
            <div className="p-4">
                {/* Listing */}
            <div class="border border-gray-700 dark:bg-gray-800 relative overflow-x-auto shadow-md rounded-lg">
                <div className='flex'>
                    <h1 class="p-6 text-2xl font-extrabold dark:text-yellow-600">Order Listings<small class="ms-2 font-normal text-gray-500 dark:text-yellow-600">of the above product</small></h1>
                    {/* <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add user</button> */}
                </div>


                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <thead class="text-xs border-b dark:border-gray-700 text-gray-700 uppercase dark:text-gray-400">
                        <tr>

                            <th scope="col" class="px-6 py-3">
                                Order ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Customer Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Order Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            recentOrderData.map((order) => {
                                return (
                                    <tr key={order.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {order.id}
                                        </th>
                                        <td class="px-6 py-4">
                                            {order.customer_name}
                                        </td>
                                        <td class="px-6 py-4">
                                            {order.order_date}
                                        </td>
                                        <td class=" px-6 py-4">

                                            <select
                                                className="bg-transparent cursor-pointer"
                                                name="selectedProduct"
                                                defaultValue={order.current_order_status}
                                            >
                                                <option className="bg-gray-900 cursor-pointer" value="PLACED">
                                                    PLACED{" "}
                                                </option>
                                                <option
                                                    className="bg-gray-900 cursor-pointer"
                                                    value="CONFIRMED"
                                                >
                                                    CONFIRMED{" "}
                                                </option>
                                                <option
                                                    className="bg-gray-900 cursor-pointer"
                                                    value="OUT_FOR_DELIVERY"
                                                >
                                                    OUT_FOR_DELIVERY{" "}
                                                </option>
                                                <option
                                                    className="bg-gray-900 cursor-pointer"
                                                    value="SHIPPED"
                                                >
                                                    SHIPPED
                                                </option>
                                                <option
                                                    className="bg-gray-900 cursor-pointer"
                                                    value="DELIVERED"
                                                >
                                                    DELIVERED
                                                </option>
                                            </select>
                                        </td>

                                        <td class="flex items-center px-6 py-4">
                                            <button onClick={toggleModal} class="font-bold text-xl text-gray-600 dark:text-white hover:underline"><CiViewList /></button>


                                            {isModalOpen && (
                                                <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex">
                                                    <div className="relative p-4 w-full max-w-md max-h-full">
                                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                                    Order Details
                                                                </h4>

                                                                <button
                                                                    onClick={toggleModal}
                                                                    type="button"
                                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    <svg className="w-3 h-3" aria-hidden="true" fill="none" viewBox="0 0 14 14">
                                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                                    </svg>

                                                                </button>
                                                            </div>
                                                            <div className="px-6 py-4">
                                                                <h6 class="text-l font-bold text-stone-400 ">Product ID:       F56789</h6>
                                                                <h6 class="text-l  text-stone-400 ">Stock:       1000</h6>
                                                                <h6 class="text-l text-stone-400 ">Material:    Cotton</h6>
                                                                <h6 class="text-l text-stone-400 ">Colors:      Green,White,Blue</h6>
                                                                <h6 class="text-l text-stone-400 ">Size:         XS,S,M,L,XL</h6>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                            <button onClick={() => handleDelete(order.id)} class="font-bold text-xl text-red-600 dark:text-red-500 hover:underline ms-3"><MdDeleteOutline /></button>
                                        </td>
                                    </tr>
                                );
                            })
                        }


                    </tbody>
                </table>
            </div>
            </div>
        </>
    )

}