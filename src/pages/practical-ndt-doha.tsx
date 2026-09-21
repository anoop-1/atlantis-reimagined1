import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtDoha() {
  const profile = getPracticalNdtCityProfile('doha');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
