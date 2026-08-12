import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingNewportNews() {
  const profile = getTrainingCityProfile('newport-news');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
