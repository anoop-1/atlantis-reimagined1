import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtJohannesburg() {
  const profile = getPracticalNdtCityProfile('johannesburg');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
