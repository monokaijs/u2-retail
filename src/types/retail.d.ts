type MerchantStatus = 'open' | 'closed' | 'temporary_closed' | 'stopped' | 'banned';

interface Merchant {
  _id: any;
  name: string;
  address: string;
  description: string;
  status: MerchantStatus;
  createdAt: Date;
  updatedAt: Date;
}

interface MerchantStaff {
  account: Account;
  merchant: Merchant;
}
