import React from 'react';
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
          <h2 className='strategyName'>Strategy: {title}</h2>
          <section className='strategyDesc'>{description}</section>
        </div>
        {strengthsLeveraged.length > 0 && (
          <ul className='stratStrengths'>
            Strengths Leveraged:{strengthsData}
          </ul>
        )}

        {supportsChallenges.length > 0 && (
          <ul className='challengesList'>
            Supports Challenge Areas: {challengesData}
          </ul>
        )}

        {tags.length > 0 && <ul className='tagsList'>Tags: {tagsData}</ul>}

        <p className='ageGroup'>Age Group: {ageGroup}</p>
      </article>
    </>
  );
};

export default StrategyCard;
