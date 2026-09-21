import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtEdmonton() {
  const profile = getPracticalNdtCityProfile('edmonton');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
