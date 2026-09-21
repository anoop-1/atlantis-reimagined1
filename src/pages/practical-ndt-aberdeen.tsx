import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtAberdeen() {
  const profile = getPracticalNdtCityProfile('aberdeen');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
