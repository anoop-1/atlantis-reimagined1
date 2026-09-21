import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtAntwerp() {
  const profile = getPracticalNdtCityProfile('antwerp');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
