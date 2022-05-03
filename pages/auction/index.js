import React from 'react'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import EditProfile from './user/EditProfile'
import Profile from './user/Profile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import MyShops from './shop/MyShops'
import Shop from './shop/Shop'
import EditShop from './shop/EditShop'
import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'
import Product from './product/Product'
import Cart from './cart/Cart'
import StripeConnect from './user/StripeConnect'
import ShopOrders from './order/ShopOrders'
import Order from './order/Order'
import MyAuctions from './auction/MyAuctions'
import OpenAuctions from './auction/OpenAuctions'
import NewAuction from './auction/NewAuction'
import EditAuction from './auction/EditAuction'
import Auction from './auction/Auction'
import { BaseLayout } from "@components/common/layout";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function AuctionHome() {
  const router = useRouter();

  const { status, data: session } = useSession({
      required: true,
      onUnauthenticated() {
          router.push("../auth/signin");
      },
  });

  return (
      <div>
          <Auction/>
          Auction
      </div>
  );
}

AuctionHome.Layout = BaseLayout;
