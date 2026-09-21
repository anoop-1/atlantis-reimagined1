import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtLosAngeles() {
  const profile = getPracticalNdtCityProfile('los-angeles');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
