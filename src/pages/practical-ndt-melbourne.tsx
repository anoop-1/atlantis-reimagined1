import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtMelbourne() {
  const profile = getPracticalNdtCityProfile('melbourne');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
