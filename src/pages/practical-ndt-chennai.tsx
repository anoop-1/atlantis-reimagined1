import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtChennai() {
  const profile = getPracticalNdtCityProfile('chennai');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
