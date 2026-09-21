import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtRiyadh() {
  const profile = getPracticalNdtCityProfile('riyadh');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
