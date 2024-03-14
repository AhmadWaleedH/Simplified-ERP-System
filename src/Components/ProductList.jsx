import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import React, { useState } from 'react';
import ProductData from "../assets/ProductData";
import AddProduct from "./AddProduct";

//Mock Data for Order Listings



export function ProductList() {
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
        var index = ProductData.map((e) => {
            return e.id
        }).indexOf(id)
        ProductData.splice(index, 1);

        history('/products');
    }

    return (
        <> 
            
           
            
              
            <div class="border border-gray-700 dark:bg-gray-800 relative overflow-x-auto shadow-md rounded-lg">
                <div className='flex justify-between'>
                    <h1 class="p-6 text-2xl font-extrabold dark:text-gray-400">Product Listings<small class="ms-2 font-normal text-gray-500 dark:text-gray-600">of this current month</small></h1>
                    <div className="p-4">
                    <AddProduct/>
                    </div>
                </div>


                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <thead class="text-xs border-b dark:border-gray-700 text-gray-700 uppercase dark:text-gray-400">
                        <tr>

                            <th scope="col" class="px-6 py-3">
                                Product ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ProductData.map((product) => {
                                return (
                                    <tr key={product.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {product.id}
                                        </th>
                                        <td class="px-6 py-4">
                                            {product.product_name}
                                        </td>
                                        <td class="px-6 py-4">
                                            {product.category}
                                        </td>
                                        <td class="px-6 py-4">
                                            {product.price}
                                        </td>
                                        <td class="px-6 py-4">
                                            {product.stock}
                                        </td>
                                        

                                        <td class="flex items-center px-6 py-4">
                                            <button onClick={toggleModal} class="font-bold text-xl text-gray-600 dark:text-white hover:underline"><CiEdit /></button>


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
                                            <button onClick={() => handleDelete(product.id)} class="font-bold text-xl text-red-600 dark:text-red-500 hover:underline ms-3"><MdDeleteOutline /></button>
                                        </td>
                                    </tr>
                                );
                            })
                        }


                    </tbody>
                </table>
            </div>
            
        </>
    )

}