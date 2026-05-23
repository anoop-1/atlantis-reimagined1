import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingDammam() {
  const profile = getTrainingCityProfile('dammam');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
