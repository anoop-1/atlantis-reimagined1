import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtYokohama() {
  const profile = getPracticalNdtCityProfile('yokohama');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
