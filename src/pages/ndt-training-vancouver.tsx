import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingVancouver() {
  const profile = getTrainingCityProfile('vancouver');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
