import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingCorpusChristi() {
  const profile = getTrainingCityProfile('corpus-christi');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
