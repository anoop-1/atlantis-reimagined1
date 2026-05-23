import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingOklahomaCity() {
  const profile = getTrainingCityProfile('oklahoma-city');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
