import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtLagos() {
  const profile = getPracticalNdtCityProfile('lagos');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
