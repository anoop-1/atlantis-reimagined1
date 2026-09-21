import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtDubai() {
  const profile = getPracticalNdtCityProfile('dubai');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
