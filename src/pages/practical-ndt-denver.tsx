import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtDenver() {
  const profile = getPracticalNdtCityProfile('denver');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
