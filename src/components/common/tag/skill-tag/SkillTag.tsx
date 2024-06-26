import * as styles from './SkillTag.styles';
import projectSkillData from '../../../../data/ProjectSkillData';

const colors = [
  '#FBE5D8',
  '#D8EAFB',
  '#FBF5D8',
  '#FBD8FA',
  '#FBDAD8',
  '#EEFBD8',
];

interface SkillTagProps {
  id: string;
}

const SkillTag = ({ id }: SkillTagProps) => {
  const getRandomColor = (index: number) => {
    return colors[index % colors.length];
  };

  const skillsData = projectSkillData[id];
  const { skills } = skillsData;

  return (
    <>
      {skills.map((skill: string, index: number) => (
        <styles.TagBox key={index} getRandomColor={getRandomColor(index)}>
          {skill}
        </styles.TagBox>
      ))}
    </>
  );
};

export default SkillTag;
