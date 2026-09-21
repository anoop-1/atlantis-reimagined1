import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtAuckland() {
  const profile = getPracticalNdtCityProfile('auckland');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
