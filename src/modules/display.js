export default (arr) => {
  const scoreListContainer = document.querySelector('.score-list');
  arr.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name}: ${item.score}`;
    scoreListContainer.appendChild(li);
  });
};