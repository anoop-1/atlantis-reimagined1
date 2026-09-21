import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtHouston() {
  const profile = getPracticalNdtCityProfile('houston');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
