const tabs = document.querySelectorAll('.tab-button');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.target;

    tabs.forEach((button) => button.classList.toggle('active', button === tab));
    panels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === target);
    });
  });
});
