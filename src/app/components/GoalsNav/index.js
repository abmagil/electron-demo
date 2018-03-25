import React from 'react';

const ActiveGoalNavEntry = (goal) => (
  <a className="nav-group-item active" key={Math.random()}>
    <span className="icon icon-folder" />
    {goal.type}
  </a>
);

const InactiveGoalNavEntry = (goal) => (
  <span className="nav-group-item" key={Math.random()}>
    <span className="icon icon-folder" />
    {goal.type}
  </span>
);

const GoalsNav = ({ orderedGoals }) => (
  
  <nav className="nav-group">
    <h5 className="nav-group-title">Goals</h5>
    {orderedGoals.map((goal, index) => (
      (index === 1)
        ? ActiveGoalNavEntry(goal)
        : InactiveGoalNavEntry(goal)
    ))}
  </nav>
);

export default GoalsNav;
