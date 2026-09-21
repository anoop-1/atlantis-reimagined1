import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtTeesside() {
  const profile = getPracticalNdtCityProfile('teesside');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
