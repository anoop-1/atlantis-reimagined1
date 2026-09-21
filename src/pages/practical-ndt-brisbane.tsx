import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtBrisbane() {
  const profile = getPracticalNdtCityProfile('brisbane');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
