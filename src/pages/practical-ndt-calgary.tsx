import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtCalgary() {
  const profile = getPracticalNdtCityProfile('calgary');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
