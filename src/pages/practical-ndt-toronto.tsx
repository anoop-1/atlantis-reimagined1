import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtToronto() {
  const profile = getPracticalNdtCityProfile('toronto');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
