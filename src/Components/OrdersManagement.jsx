
import OrderGraph from "./OrderGraph";
import { ProductCard } from "./ProductCard";
import { HeroSection } from "./HeroSection";
import { SearchBar } from "./SearchBar";
import React from 'react';
import { OrderList } from "./OrderList";

export default function OrdersManagement() {

    return (
        <>
            <div className="pt-20">

                <div className="pl-4 pr-4 pb-4">
                    <HeroSection />
                </div>

                        <div className="sm:flex block">
                            <div className="p-4"><ProductCard /></div>
                            <div className="sm:w-[1500px] w-[100%] rounded-lg p-4">
                                <div className="border border-gray-700 pl-[4rem] py-6 bg-gray-800 rounded-t-lg"><SearchBar /></div>
                                <div className="border border-gray-700 rounded-b-lg "><OrderGraph/></div>
                            </div>
                        </div>
                        
                <div>
                    <OrderList />
                </div>

            </div>
        </>
    )

}