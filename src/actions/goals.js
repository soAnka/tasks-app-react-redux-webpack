export const addGoal = (goal) => {
  return {
    type: "goals/addGoal",
    goal,
  };
};

export const removeGoal = (removeId) => {
  return {
    type: "goals/removeGoal",
    removeId,
  };
};

export const toggleGoal = (goal) => {
  return {
    type: "goals/toggleGoal",
    goal,
  };
};

export const receiveGoals = (goals) => {
  return {
    type: "goals/receiveGoals",
    goals,
  };
};

export const toggleFavGoal = (favGoal) => {
  return {
    type: "goals/toggleFavGoal",
    favGoal,
  };
};
