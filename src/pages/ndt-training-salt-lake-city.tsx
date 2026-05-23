import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingSaltLakeCity() {
  const profile = getTrainingCityProfile('salt-lake-city');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
