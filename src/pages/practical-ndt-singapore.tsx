import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtSingapore() {
  const profile = getPracticalNdtCityProfile('singapore');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
