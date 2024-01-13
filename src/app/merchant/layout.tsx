import type { Metadata } from 'next'
import {ReactNode} from "react";
import MerchantDashboard from "@/components/layouts/merchant/MerchantDashboard";

export const metadata: Metadata = {
  title: 'Merchant',
  description: 'Here is merchant page',
}

export default function MerchantLayout({children}: {children: ReactNode}) {
  return (
    <MerchantDashboard>
      {children}
    </MerchantDashboard>
  )
}
