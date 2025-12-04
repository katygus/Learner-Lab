import Select from 'react-select';
import { useState } from 'react';
import '../App.css';

const strengthsOptions = [
  { value: 'Hyperfocus', label: 'Hyperfocus' },
  { value: 'Sustained Attention', label: 'Sustained Attention' },
  { value: 'Special Interest Intensity', label: 'Special Interest Intensity' },
  { value: 'Visual-Spatial Thinking', label: 'Visual-Spatial Thinking' },
  { value: 'Pattern Recognition', label: 'Pattern Recognition' },
  { value: 'Big-Picture Thinking', label: 'Big-Picture Thinking' },
  { value: 'Kinesthetic Learning', label: 'Kinesthetic Learning' },
  { value: 'Movement', label: 'Movement' },
  { value: 'Energy Regulation', label: 'Energy Regulation' },
  { value: 'Systematizing', label: 'Systematizing' },
  { value: 'Logical Analysis', label: 'Logical Analysis' },
  { value: 'Detail Recognition', label: 'Detail Recognition' },
  { value: 'Digital Literacy', label: 'Digital Literacy' },
  { value: 'Tech Affinity', label: 'Tech Affinity' },
  { value: 'Digital Creation', label: 'Digital Creation' },
  { value: 'Creative Problem-Solving', label: 'Creative Problem-Solving' },
  { value: 'Divergent Thinking', label: 'Divergent Thinking' },
  { value: 'Innovation', label: 'Innovation' },
  { value: 'Honesty/Directness', label: 'Honesty/Directness' },
  { value: 'Strong Sense of Justice', label: 'Strong Sense of Justice' },
  { value: 'Loyalty', label: 'Loyalty' },
  { value: 'Resilience', label: 'Resilience' },
  { value: 'Self-Advocacy', label: 'Self-Advocacy' },
  { value: 'Navigating Differences', label: 'Navigating Differences' },
  { value: 'Auditory Processing', label: 'Auditory Processing' },
  { value: 'Musical Intelligence', label: 'Musical Intelligence' },
  { value: 'Rhythm Awareness', label: 'Rhythm Awareness' },
  { value: 'Empathy', label: 'Empathy' },
  { value: 'Emotional Depth', label: 'Emotional Depth' },
  { value: 'Sensory Awareness', label: 'Sensory Awareness' },
];

const challengeOptions = [
  { value: 'Sensory Overload', label: 'Sensory Overload' },
  { value: 'Attention Regulation', label: 'Attention Regulation' },
  { value: 'Task Initiation', label: 'Task Initiation' },
  { value: 'Working Memory', label: 'Working Memory' },
  { value: 'Time Management', label: 'Time Management' },
  { value: 'Organization', label: 'Organization' },
  { value: 'Social Navigation', label: 'Social Navigation' },
  { value: 'Flexibility', label: 'Flexibility' },
  { value: 'Transitions', label: 'Transitions' },
  { value: 'Verbal Processing', label: 'Verbal Processing' },
  { value: 'Written Expression', label: 'Written Expression' },
  { value: 'Motor Coordination', label: 'Motor Coordination' },
  { value: 'Anxiety', label: 'Anxiety' },
  { value: 'Emotional Regulation', label: 'Emotional Regulation' },
  { value: 'Self-Advocacy', label: 'Self-Advocacy' },
  { value: 'Generalization', label: 'Generalization' },
  { value: 'Executive Function', label: 'Executive Function' },
  { value: 'Processing Speed', label: 'Processing Speed' },
];

const tagOptions = [
  { value: 'Universal Design', label: 'Universal Design' },
  { value: 'Instructional Strategy', label: 'Instructional Strategy' },
  { value: 'Autism', label: 'Autism' },
  { value: 'Executive Function', label: 'Executive Function' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Social Skills', label: 'Social Skills' },
  { value: 'Assessment', label: 'Assessment' },
  { value: 'ADHD', label: 'ADHD' },
  { value: 'Sensory', label: 'Sensory' },
  { value: 'Dyslexia', label: 'Dyslexia' },
  { value: 'Behavior', label: 'Behavior' },
  { value: 'Classroom Setup', label: 'Classroom Setup' },
  { value: 'Communication', label: 'Communication' },
];

const FilterBar = () => {
  const [selectedStrengths, setSelectedStrengths] = useState([]);
  const [selectedChallenges, setSelectedChallenges] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className='filter-container'>
      <div className='filter-group'>
        <label>Strengths</label>
        <Select
          options={strengthsOptions}
          value={selectedStrengths}
          onChange={setSelectedStrengths}
          isMulti
        />
        <br />
        <br />
        <label>Challenges</label>
        <Select
          options={challengeOptions}
          value={selectedChallenges}
          onChange={setSelectedChallenges}
          isMulti
        />
        <br />
        <br />
        <label>Tags</label>
        <Select
        options={tagOptions}
        value={selectedTags}
        onChange={setSelectedTags}
        isMulti
        />
      </div>
      {/* <div className='challengesBar'>
       <Select options={challengeOptions} />
   </div> */}
    </div>
  );
};

export default FilterBar;
