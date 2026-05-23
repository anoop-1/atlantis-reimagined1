import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingOman() {
  const profile = getTrainingCityProfile('oman');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
