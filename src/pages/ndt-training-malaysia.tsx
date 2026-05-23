import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMalaysia() {
  const profile = getTrainingCityProfile('malaysia');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
