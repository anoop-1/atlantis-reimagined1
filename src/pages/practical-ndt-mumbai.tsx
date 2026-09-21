import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtMumbai() {
  const profile = getPracticalNdtCityProfile('mumbai');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
