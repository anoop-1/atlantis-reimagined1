import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingMexicoCity() {
  const profile = getTrainingCityProfile('mexico-city');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
