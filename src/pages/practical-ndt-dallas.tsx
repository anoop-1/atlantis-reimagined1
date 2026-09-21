import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtDallas() {
  const profile = getPracticalNdtCityProfile('dallas');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
