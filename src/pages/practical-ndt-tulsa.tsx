import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtTulsa() {
  const profile = getPracticalNdtCityProfile('tulsa');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
