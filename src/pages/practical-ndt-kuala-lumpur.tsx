import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtKualaLumpur() {
  const profile = getPracticalNdtCityProfile('kuala-lumpur');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
