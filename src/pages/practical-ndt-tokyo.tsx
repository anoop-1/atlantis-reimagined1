import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtTokyo() {
  const profile = getPracticalNdtCityProfile('tokyo');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
