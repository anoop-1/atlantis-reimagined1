import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingRichland() {
  const profile = getTrainingCityProfile('richland');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
