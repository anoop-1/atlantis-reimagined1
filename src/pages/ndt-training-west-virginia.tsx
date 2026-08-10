import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingWestVirginia() {
  const profile = getTrainingCityProfile('west-virginia');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
