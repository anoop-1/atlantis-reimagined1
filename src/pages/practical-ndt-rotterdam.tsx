import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtRotterdam() {
  const profile = getPracticalNdtCityProfile('rotterdam');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
