import type { Property } from '../data/types';

export interface FilterState {
  listingType: 'all' | 'sale' | 'rent';
  city: string;
  type: string;
  rooms: string;
  priceMin: string;
  priceMax: string;
  areaMin: string;
  floorMin: string;
  parking: boolean;
  elevator: boolean;
  balcony: boolean;
  safeRoom: boolean;
}

export const defaultFilters: FilterState = {
  listingType: 'all',
  city: '',
  type: '',
  rooms: '',
  priceMin: '',
  priceMax: '',
  areaMin: '',
  floorMin: '',
  parking: false,
  elevator: false,
  balcony: false,
  safeRoom: false,
};

export type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'newest';

export function applyFilters(properties: Property[], f: FilterState): Property[] {
  return properties.filter((p) => {
    if (f.listingType !== 'all' && p.listingType !== f.listingType) return false;
    if (f.city && p.city !== f.city) return false;
    if (f.type && p.type !== f.type) return false;
    if (f.rooms) {
      const wantsPlus = f.rooms.endsWith('+');
      const n = parseInt(f.rooms, 10);
      if (wantsPlus ? p.rooms < n : p.rooms !== n) return false;
    }
    if (f.priceMin && p.price < Number(f.priceMin)) return false;
    if (f.priceMax && p.price > Number(f.priceMax)) return false;
    if (f.areaMin && p.area < Number(f.areaMin)) return false;
    if (f.floorMin && p.floor < Number(f.floorMin)) return false;
    if (f.parking && p.parking < 1) return false;
    if (f.elevator && !p.elevator) return false;
    if (f.balcony && !p.balcony) return false;
    if (f.safeRoom && !p.safeRoom) return false;
    return true;
  });
}

export function sortProperties(properties: Property[], sort: SortOption): Property[] {
  const list = [...properties];
  switch (sort) {
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price);
    case 'newest':
      return list.sort((a, b) => b.yearBuilt - a.yearBuilt);
    default:
      return list.sort((a, b) => Number(b.featured) - Number(a.featured));
  }
}

export function countActiveFilters(f: FilterState): number {
  let n = 0;
  if (f.listingType !== 'all') n++;
  if (f.city) n++;
  if (f.type) n++;
  if (f.rooms) n++;
  if (f.priceMin || f.priceMax) n++;
  if (f.areaMin) n++;
  if (f.floorMin) n++;
  if (f.parking) n++;
  if (f.elevator) n++;
  if (f.balcony) n++;
  if (f.safeRoom) n++;
  return n;
}
