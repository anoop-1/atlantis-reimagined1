import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtHamburg() {
  const profile = getPracticalNdtCityProfile('hamburg');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
