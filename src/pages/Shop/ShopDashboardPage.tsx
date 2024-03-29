import React from 'react';
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader.tsx";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar.tsx";
import DashboardHero from "../../components/Shop/DashboardHero.tsx";
import { getAllOrdersOfShop } from '../../redux/actions/order.tsx';
import { getAllProductsShop } from '../../redux/actions/product.tsx';

interface ShopDashboardPageProps {
    active: number
}

const ShopDashboardPage: React.FC<ShopDashboardPageProps> = () => {
    return (
        <div>
            <DashboardHeader />
            <div className="flex items-start justify-between w-full">
                <div className="w-[80px] 800px:w-[330px]">
                    <DashboardSideBar active={1} />
                </div>
                <div className="w-full justify-center flex">
                    <DashboardHero
                        getAllOrdersOfShop={getAllOrdersOfShop}
                        getAllProductsShop={getAllProductsShop}
                    />
                </div>
            </div>
        </div>
    )
}

export default ShopDashboardPage