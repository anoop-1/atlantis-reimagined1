import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtBeaumont() {
  const profile = getPracticalNdtCityProfile('beaumont');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
