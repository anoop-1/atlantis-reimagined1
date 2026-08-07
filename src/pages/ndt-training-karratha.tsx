import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingKarratha() {
  const profile = getTrainingCityProfile('karratha');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
