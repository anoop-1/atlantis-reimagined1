import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtHyderabad() {
  const profile = getPracticalNdtCityProfile('hyderabad');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
