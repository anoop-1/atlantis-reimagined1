import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtDammam() {
  const profile = getPracticalNdtCityProfile('dammam');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
