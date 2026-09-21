import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtMidland() {
  const profile = getPracticalNdtCityProfile('midland');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
