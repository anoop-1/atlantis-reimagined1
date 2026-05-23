import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingIndianapolis() {
  const profile = getTrainingCityProfile('indianapolis');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
