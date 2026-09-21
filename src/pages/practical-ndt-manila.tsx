import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtManila() {
  const profile = getPracticalNdtCityProfile('manila');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
