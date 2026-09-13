import type { Property } from '../data/types';
import {
  SafeRoomIcon,
  ElevatorIcon,
  ParkingIcon,
  BalconyIcon,
  StorageIcon,
  AcIcon,
  KitchenIcon,
  ViewIcon,
} from './icons';

export default function PropertyFeatures({ property }: { property: Property }) {
  const features = [
    { key: 'safeRoom', label: 'ממ״ד', active: property.safeRoom, icon: SafeRoomIcon },
    { key: 'elevator', label: 'מעלית', active: property.elevator, icon: ElevatorIcon },
    { key: 'parking', label: `חניה${property.parking > 1 ? ` (${property.parking})` : ''}`, active: property.parking > 0, icon: ParkingIcon },
    { key: 'balcony', label: 'מרפסת', active: Boolean(property.balcony), icon: BalconyIcon },
    { key: 'storage', label: 'מחסן', active: property.storage, icon: StorageIcon },
    { key: 'ac', label: 'מיזוג', active: property.airConditioning, icon: AcIcon },
    { key: 'kitchen', label: 'מטבח משודרג', active: property.upgradedKitchen, icon: KitchenIcon },
    { key: 'view', label: 'נוף פתוח', active: property.openView, icon: ViewIcon },
  ].filter((f) => f.active);

  if (features.length === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
      {features.map(({ key, label, icon: Icon }) => (
        <div key={key} className="flex flex-col items-start gap-2.5 rounded border border-stone-200 px-4 py-4">
          <Icon width={20} height={20} className="text-clay-dark" />
          <span className="text-[13.5px] text-charcoal-soft">{label}</span>
        </div>
      ))}
    </div>
  );
}
