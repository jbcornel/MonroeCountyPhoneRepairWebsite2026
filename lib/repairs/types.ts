export type Price =
  | { kind: 'fixed'; value: number }
  | { kind: 'tbd'; label: string };

export type RepairKey = 'screen' | 'battery' | 'backGlass';

export type RepairItem = {
  key: RepairKey;
  label: string;
  price: Price;
  notes?: string;
};

export type DeviceModel = {
  id: string;               // stable key: e.g. "iphone-15-pro-max"
  displayName: string;      // what users see
  category: 'phone' | 'tablet';
  brand: 'apple' | 'samsung' | 'android';
  repairs: RepairItem[];    // the allowed repair types for this model
  disclaimer?: string;
};
 

export const TBD: Price = { kind: 'tbd', label: 'Determined upon appointment' };
export const FIXED_99: Price = { kind: 'fixed', value: 99 };