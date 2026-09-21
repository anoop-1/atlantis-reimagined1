import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtHoChiMinhCity() {
  const profile = getPracticalNdtCityProfile('ho-chi-minh-city');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
