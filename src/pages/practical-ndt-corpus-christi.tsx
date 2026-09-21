import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtCorpusChristi() {
  const profile = getPracticalNdtCityProfile('corpus-christi');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
