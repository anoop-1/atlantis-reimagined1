import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingEdmonton() {
  const profile = getTrainingCityProfile('edmonton');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
