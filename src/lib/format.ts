export function formatPrice(value: number, listingType: 'sale' | 'rent' = 'sale'): string {
  const formatted = new Intl.NumberFormat('he-IL').format(value);
  return listingType === 'rent' ? `₪${formatted} לחודש` : `₪${formatted}`;
}

export function formatArea(area: number): string {
  return `${new Intl.NumberFormat('he-IL').format(area)} מ״ר`;
}
