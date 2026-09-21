import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtPerth() {
  const profile = getPracticalNdtCityProfile('perth');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
