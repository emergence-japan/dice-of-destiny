// survey.js

// Store survey data
let surveyData = {
  preSurvey: {},
  gamePlay: {},
  postSurvey: {}
};

// Initialize survey functionality
function initializeSurveys() {
  // Pre-survey form handling
  const preSurveyForm = document.getElementById('pre-survey-form');
  if (preSurveyForm) {
    preSurveyForm.addEventListener('submit', handlePreSurveySubmit);
    
    // Progress tracking
    trackSurveyProgress('pre-survey-form', 'pre-survey-progress', 'answered-count', 44);
    
    // Ethnicity validation (at least one required)
    setupEthnicityValidation();
  }
  
  // Post-survey form handling
  const postSurveyForm = document.getElementById('post-survey-form');
  if (postSurveyForm) {
    postSurveyForm.addEventListener('submit', handlePostSurveySubmit);
    
    // Pre-fill anonymous code if available
    const savedCode = sessionStorage.getItem('anonymous_code');
    if (savedCode) {
      const postAnonCode = document.getElementById('post-anonymous-code');
      if(postAnonCode) {
        postAnonCode.value = savedCode;
      }
    }
    
    // Progress tracking
    trackSurveyProgress('post-survey-form', 'post-survey-progress', 'post-answered-count', 51);
  }
}

// Track survey completion progress
function trackSurveyProgress(formId, progressBarId, counterId, total) {
  const form = document.getElementById(formId);
  const progressBar = document.getElementById(progressBarId);
  const counter = document.getElementById(counterId);
  const totalCount = form.querySelector('.total-count');
  
  if (!form || !progressBar) return;
  
  if (totalCount) {
    totalCount.textContent = total;
  }
  
  // Get all required inputs
  const requiredInputs = form.querySelectorAll('[required]');
  
  // Update progress
  function updateProgress() {
    let answered = 0;
    const countedNames = new Set();

    requiredInputs.forEach(input => {
        let isAnswered = false;
        if (input.type === 'radio' || input.type === 'checkbox') {
            const name = input.name;
            if (!countedNames.has(name)) {
                const checked = form.querySelector(`[name="${name}"]:checked`);
                if (checked) {
                    isAnswered = true;
                    countedNames.add(name);
                }
            }
        } else if (input.value.trim() !== '') {
            isAnswered = true;
        }

        if (isAnswered) {
            answered++;
        }
    });
    
    const percentage = (answered / total) * 100;
    progressBar.style.width = `${percentage}%`;
    
    if (counter) {
      counter.textContent = answered;
    }
  }
  
  // Listen to all input changes
  form.addEventListener('input', updateProgress);
  form.addEventListener('change', updateProgress);
  
  // Initial update
  updateProgress();
}

// Ethnicity validation (at least one checkbox)
function setupEthnicityValidation() {
  const form = document.getElementById('pre-survey-form');
  if(!form) return;

  const checkboxes = form.querySelectorAll('input[name="ethnicity"]');
  const validationMsg = document.getElementById('ethnicity-validation');
  
  function validate() {
      const checked = form.querySelectorAll('input[name="ethnicity"]:checked');
      if (checked.length > 0) {
        checkboxes.forEach(cb => cb.setCustomValidity(''));
        if (validationMsg) validationMsg.classList.remove('show');
        return true;
      } else {
        checkboxes.forEach(cb => cb.setCustomValidity('Please select at least one option'));
        if (validationMsg) {
          validationMsg.textContent = 'Please select at least one option';
          validationMsg.classList.add('show');
        }
        return false;
      }
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', validate);
  });
  
  form.addEventListener('submit', (e) => {
    if (!validate()) {
        e.preventDefault();
    }
  });
}

// Handle pre-survey submission
function handlePreSurveySubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  
  // Validate form
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  // Collect form data
  const formData = new FormData(form);
  const data = {
    timestamp: new Date().toISOString(),
    demographics: {},
    life_satisfaction: {},
    self_efficacy: {},
    post_traumatic_growth: {}
  };
  
  // Process demographics
  data.demographics.anonymous_code = formData.get('anonymous_code');
  data.demographics.age = parseInt(formData.get('age'));
  data.demographics.gender = formData.get('gender');
  if (data.demographics.gender === 'Other') {
    data.demographics.gender_other = formData.get('gender_other');
  }
  
  // Ethnicity (multiple values)
  data.demographics.ethnicity = formData.getAll('ethnicity');
  if (data.demographics.ethnicity.includes('Other')) {
    data.demographics.ethnicity_other = formData.get('ethnicity_other');
  }
  
  data.demographics.academic_year = formData.get('academic_year');
  if (data.demographics.academic_year === 'Other') {
    data.demographics.academic_year_other = formData.get('academic_year_other');
  }
  
  data.demographics.major = formData.get('major');
  if (data.demographics.major === 'Other') {
    data.demographics.major_other = formData.get('major_other');
  }
  
  data.demographics.work_status = formData.get('work_status');
  data.demographics.marital_status = formData.get('marital_status');
  data.demographics.parental_status = formData.get('parental_status');
  
  // Process Likert scale questions
  for (let i = 10; i <= 17; i++) {
    data.life_satisfaction[`q${i}`] = parseInt(formData.get(`q${i}`));
  }
  
  for (let i = 18; i <= 30; i++) {
    data.self_efficacy[`q${i}`] = parseInt(formData.get(`q${i}`));
  }
  
  for (let i = 31; i <= 44; i++) {
    data.post_traumatic_growth[`q${i}`] = parseInt(formData.get(`q${i}`));
  }
  
  // Store data
  surveyData.preSurvey = data;
  
  // Save anonymous code for later use
  sessionStorage.setItem('anonymous_code', data.demographics.anonymous_code);
  
  // Show success message
  showNotification('Survey completed successfully!', 'success');
  
  // Navigate to opening story after short delay
  setTimeout(() => {
    navigateTo('opening-story-1');
  }, 1000);
}

// Handle post-survey submission
function handlePostSurveySubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  
  // Validate form
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  
  // Collect form data
  const formData = new FormData(form);
  const data = {
    timestamp: new Date().toISOString(),
    anonymous_code: formData.get('anonymous_code'),
    life_satisfaction: {},
    self_efficacy: {},
    post_traumatic_growth: {},
    learning_engagement: {}
  };

  // Process Likert scale questions
  for (let i = 2; i <= 9; i++) {
    data.life_satisfaction[`q${i}`] = parseInt(formData.get(`q${i}`));
  }
  
  for (let i = 10; i <= 22; i++) {
    data.self_efficacy[`q${i}`] = parseInt(formData.get(`q${i}`));
  }
  
  for (let i = 23; i <= 36; i++) {
    data.post_traumatic_growth[`q${i}`] = parseInt(formData.get(`q${i}`));
  }

  for (let i = 37; i <= 51; i++) {
    data.learning_engagement[`q${i}`] = parseInt(formData.get(`q${i}`));
  }
  
  // Store data
  surveyData.postSurvey = data;
  
  // Show success message
  showNotification('Post-survey completed successfully!', 'success');
  
  // Navigate to completion
  setTimeout(() => {
    navigateTo('completion');
  }, 1000);
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => notification.classList.add('show'), 100);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initializeSurveys);
