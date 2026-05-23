import { TrainingLocationPage } from '@/components/TrainingLocationPage';
import { getTrainingCityProfile } from '@/data/training-cities';

export default function NDTTrainingHoChiMinh() {
  const profile = getTrainingCityProfile('ho-chi-minh');
  if (!profile) return null;
  return <TrainingLocationPage profile={profile} />;
}
