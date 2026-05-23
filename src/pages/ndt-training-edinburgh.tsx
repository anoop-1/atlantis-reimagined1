import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingEdinburgh() {
  const profile = getTrainingCityProfile('edinburgh');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
