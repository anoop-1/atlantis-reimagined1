import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtPittsburgh() {
  const profile = getPracticalNdtCityProfile('pittsburgh');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
