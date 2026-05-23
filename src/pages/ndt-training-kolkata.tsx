import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKolkata() {
  const profile = getTrainingCityProfile('kolkata');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
