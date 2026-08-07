import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingBatam() {
  const profile = getTrainingCityProfile('batam');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
