import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtJakarta() {
  const profile = getPracticalNdtCityProfile('jakarta');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
