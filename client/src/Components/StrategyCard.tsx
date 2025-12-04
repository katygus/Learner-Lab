import '../App.css';

interface StrategyType {
  _id?: string;
  title: string;
  description: string;
  strengthsLeveraged: string[];
  supportsChallenges: string[];
  ageGroup: string;
  tags: string[];
}

interface StrategyCardProps {
  strategy: StrategyType; // strategy object pulled from database
}

const StrategyCard = ({ strategy }: StrategyCardProps) => {
  const {
    title,
    description,
    strengthsLeveraged,
    supportsChallenges,
    ageGroup,
    tags,
  } = strategy;

  const strengthsData = strengthsLeveraged.map((strength, i) => (
    <li key={i} className='stratStrength'>
      - {strength}
    </li>
  ));

  const challengesData = supportsChallenges.map((challenge, i) => (
    <li key={i} className='stratChallenges'>
      - {challenge}
    </li>
  ));

  const tagsData = tags.map((tag, i) => (
    <li key={i} className='stratTag'>
      - {tag}
    </li>
  ));

  return (
    <>
      <article className='card'>
        <div className='strategyHeadContainer'>
          <h2 className='strategyName'> {title}</h2>
          <section className='strategyDesc'>{description}</section>
        </div>
        <div>
        <h4 className='strengthsName'>Strengths Leveraged:</h4>
          <ul className='strengthsList'>
            {strengthsData}
          </ul>
        
        </div>
         <h4 className='challengesName'>Supports Challenge Areas:</h4>
          <ul className='challengesList'>
             {challengesData}
          </ul>
            <h4 className='tagsName'>Tags:</h4>
         <ul className='tagsList'> {tagsData}</ul>

        <h4 className='ageGroupName'>Age Group:</h4>
        <p className='ageGroup'> {ageGroup}</p>
      </article>
    </>
  );
};

export default StrategyCard;
