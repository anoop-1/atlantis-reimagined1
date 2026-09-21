import { PracticalNdtLocationPage } from '@/components/PracticalNdtLocationPage';
import { getPracticalNdtCityProfile } from '@/data/practical-ndt-cities';

export default function PracticalNdtAbuDhabi() {
  const profile = getPracticalNdtCityProfile('abu-dhabi');
  if (!profile) return null;
  return <PracticalNdtLocationPage profile={profile} />;
}
