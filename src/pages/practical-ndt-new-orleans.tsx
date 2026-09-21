import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtNewOrleans() {
  const profile = getPracticalNdtCityProfile('new-orleans');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
