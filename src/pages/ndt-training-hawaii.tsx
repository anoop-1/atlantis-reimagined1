import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingHawaii() {
  const profile = getTrainingCityProfile('hawaii');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
