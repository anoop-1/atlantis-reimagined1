import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtStavanger() {
  const profile = getPracticalNdtCityProfile('stavanger');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
