import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingAbuDhabi() {
  const profile = getTrainingCityProfile('abu-dhabi');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
