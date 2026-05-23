import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingDelhi() {
  const profile = getTrainingCityProfile('delhi');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
