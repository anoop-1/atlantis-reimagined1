import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtBatonRouge() {
  const profile = getPracticalNdtCityProfile('baton-rouge');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
