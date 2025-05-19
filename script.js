function nextStep(step) {
  const current = document.querySelector('.onboarding:not(.hidden)');
  const next = document.getElementById(`step${step}`);
  if (current && next) {
    current.classList.add('hidden');
    next.classList.remove('hidden');
  }
}

