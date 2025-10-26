# Phase 2: Survey Forms Implementation
## Dice of Destiny Web Application

---

## 🎯 Phase 2 Objective

Implement complete pre-survey and post-survey forms with:
- All demographic questions (Q1-Q9 for pre-survey)
- Life Satisfaction section (8 questions)
- Self-Efficacy section (13 questions)
- Post-Traumatic Growth section (14 questions)
- Learning Engagement section (15 questions - post-survey only)
- 7-point Likert scale UI components
- Complete form validation
- Data collection and temporary storage

**Estimated Development Time**: 4-5 hours  
**Deliverables**: Fully functional survey forms with validation

---

## 📋 Prerequisites

**Before starting Phase 2, ensure Phase 1 is complete:**
- ✅ All sections navigable
- ✅ Welcome and story screens functional
- ✅ Placeholder sections in place
- ✅ Basic styling and responsive design working

---

## 🏗️ Phase 2 Overview

Replace placeholder sections with fully functional survey forms:

```
Pre-Survey:
├── Section 0: Demographics (Q1-Q9)
├── Section 1: Life Satisfaction (Q10-Q17)
├── Section 2: Self-Efficacy (Q18-Q30)
└── Section 3: Post-Traumatic Growth (Q31-Q44)

Post-Survey:
├── Q1: Anonymous Code (match pre-survey)
├── Section 1: Life Satisfaction (Q2-Q9)
├── Section 2: Self-Efficacy (Q10-Q22)
├── Section 3: Post-Traumatic Growth (Q23-Q36)
└── Section 4: Learning Engagement (Q37-Q51)
```

---

## 📝 Survey Implementation Details

### Pre-Survey HTML Structure

Replace the `#pre-survey` placeholder with:

```html
<section id="pre-survey" class="screen">
  <div class="content-wrapper survey-wrapper">
    <h2>Pre-Survey</h2>
    <p class="survey-intro">
      Before beginning the experience, please answer the following questions. 
      Your responses will help us understand the impact of this educational game. 
      All responses are confidential.
    </p>
    
    <form id="pre-survey-form" class="survey-form">
      
      <!-- Progress Indicator -->
      <div class="survey-progress">
        <div class="progress-bar">
          <div class="progress-fill" id="pre-survey-progress"></div>
        </div>
        <p class="progress-text">
          <span id="answered-count">0</span> of <span id="total-count">44</span> questions answered
        </p>
      </div>
      
      <!-- Section 0: Demographics -->
      <div class="survey-section">
        <h3 class="section-title">About You</h3>
        
        <!-- Q1: Anonymous Code -->
        <div class="question-group">
          <label for="anonymous-code" class="question-label required">
            Q1: Anonymous Code
          </label>
          <p class="question-help">
            Please create a short anonymous code so that we can match your responses 
            in the pre- and post-surveys without collecting your name.
          </p>
          <input 
            type="text" 
            id="anonymous-code" 
            name="anonymous_code" 
            class="text-input"
            required
            minlength="3"
            maxlength="20"
            placeholder="Enter a memorable code (e.g., abc123)"
          />
          <p class="input-hint">
            💡 Choose something memorable but unique. You'll need to enter this same code in the post-survey.
          </p>
        </div>
        
        <!-- Q2: Age -->
        <div class="question-group">
          <label for="age" class="question-label required">
            Q2: What is your age?
          </label>
          <div class="age-input-wrapper">
            <input 
              type="number" 
              id="age" 
              name="age" 
              class="number-input"
              required
              min="18"
              max="120"
              placeholder="25"
            />
            <span class="input-suffix">y/o</span>
          </div>
        </div>
        
        <!-- Q3: Gender -->
        <div class="question-group">
          <label class="question-label required">Q3: Gender</label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" name="gender" value="Female" required />
              <span>Female</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="gender" value="Male" required />
              <span>Male</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="gender" value="Non-binary / Third gender" required />
              <span>Non-binary / Third gender</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="gender" value="Other" required />
              <span>Prefer to self-describe:</span>
              <input 
                type="text" 
                name="gender_other" 
                class="text-input-inline"
                placeholder="Please specify"
              />
            </label>
            <label class="radio-option">
              <input type="radio" name="gender" value="Prefer not to answer" required />
              <span>Prefer not to answer</span>
            </label>
          </div>
        </div>
        
        <!-- Q4: Ethnicity/Race (Multiple Select) -->
        <div class="question-group">
          <label class="question-label required">
            Q4: What is your ethnicity/race? (Select all that apply)
          </label>
          <div class="checkbox-group">
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="White / Caucasian" />
              <span>White / Caucasian</span>
            </label>
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="Black / African American" />
              <span>Black / African American</span>
            </label>
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="Hispanic / Latino / Latina / Latinx" />
              <span>Hispanic / Latino / Latina / Latinx</span>
            </label>
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="Asian / Asian American" />
              <span>Asian / Asian American</span>
            </label>
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="Native American / Alaska Native" />
              <span>Native American / Alaska Native</span>
            </label>
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="Native Hawaiian / Pacific Islander" />
              <span>Native Hawaiian / Pacific Islander</span>
            </label>
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="Middle Eastern / North African" />
              <span>Middle Eastern / North African</span>
            </label>
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="Other" />
              <span>Other:</span>
              <input 
                type="text" 
                name="ethnicity_other" 
                class="text-input-inline"
                placeholder="Please specify"
              />
            </label>
            <label class="checkbox-option">
              <input type="checkbox" name="ethnicity" value="Prefer not to answer" />
              <span>Prefer not to answer</span>
            </label>
          </div>
          <p class="validation-message" id="ethnicity-validation"></p>
        </div>
        
        <!-- Q5: Academic Year -->
        <div class="question-group">
          <label class="question-label required">Q5: Academic Year</label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" name="academic_year" value="Freshman / First-year" required />
              <span>Freshman / First-year</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="academic_year" value="Sophomore / Second-year" required />
              <span>Sophomore / Second-year</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="academic_year" value="Junior / Third-year" required />
              <span>Junior / Third-year</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="academic_year" value="Senior / Fourth-year" required />
              <span>Senior / Fourth-year</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="academic_year" value="Graduate student" required />
              <span>Graduate student</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="academic_year" value="Other" required />
              <span>Other:</span>
              <input 
                type="text" 
                name="academic_year_other" 
                class="text-input-inline"
                placeholder="Please specify"
              />
            </label>
            <label class="radio-option">
              <input type="radio" name="academic_year" value="Prefer not to answer" required />
              <span>Prefer not to answer</span>
            </label>
          </div>
        </div>
        
        <!-- Q6: Major Program of Study -->
        <div class="question-group">
          <label class="question-label required">
            Q6: Please let us know your Major Program of Study (online course only)
          </label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" name="major" value="Psychology" required />
              <span>Psychology</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="major" value="Biology" required />
              <span>Biology</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="major" value="Business / Economics" required />
              <span>Business / Economics</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="major" value="Education" required />
              <span>Education</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="major" value="Nursing / Health Sciences" required />
              <span>Nursing / Health Sciences</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="major" value="Other" required />
              <span>Other:</span>
              <input 
                type="text" 
                name="major_other" 
                class="text-input-inline"
                placeholder="Please specify"
              />
            </label>
            <label class="radio-option">
              <input type="radio" name="major" value="Prefer not to answer" required />
              <span>Prefer not to answer</span>
            </label>
          </div>
        </div>
        
        <!-- Q7: Work/Student Status -->
        <div class="question-group">
          <label class="question-label required">
            Q7: Please let us know your work/student status
          </label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" name="work_status" value="Full-time student, not employed" required />
              <span>Full-time student, not employed</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="work_status" value="Part-time student, not employed" required />
              <span>Part-time student, not employed</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="work_status" value="Employed part-time" required />
              <span>Employed part-time</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="work_status" value="Employed full-time" required />
              <span>Employed full-time</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="work_status" value="Unemployed / Not currently working" required />
              <span>Unemployed / Not currently working</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="work_status" value="Prefer not to answer" required />
              <span>Prefer not to answer</span>
            </label>
          </div>
        </div>
        
        <!-- Q8: Marital Status -->
        <div class="question-group">
          <label class="question-label required">
            Q8: What is your marital status/relationship status?
          </label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" name="marital_status" value="Single / Never married" required />
              <span>Single / Never married</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="marital_status" value="Married / Domestic partnership" required />
              <span>Married / Domestic partnership</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="marital_status" value="Separated / Divorced" required />
              <span>Separated / Divorced</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="marital_status" value="Widowed" required />
              <span>Widowed</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="marital_status" value="Prefer not to answer" required />
              <span>Prefer not to answer</span>
            </label>
          </div>
        </div>
        
        <!-- Q9: Parental Status -->
        <div class="question-group">
          <label class="question-label required">Q9: Parental Status</label>
          <div class="radio-group">
            <label class="radio-option">
              <input type="radio" name="parental_status" value="I have a child/children" required />
              <span>I have a child/children</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="parental_status" value="I do not have children" required />
              <span>I do not have children</span>
            </label>
            <label class="radio-option">
              <input type="radio" name="parental_status" value="Prefer not to answer" required />
              <span>Prefer not to answer</span>
            </label>
          </div>
        </div>
        
      </div>
      <!-- End Section 0 -->
      
      <!-- Section 1: Life Satisfaction (Q10-Q17) -->
      <div class="survey-section">
        <h3 class="section-title">Section 1: Life Satisfaction</h3>
        <p class="section-instructions">
          The following statements ask you to evaluate your overall satisfaction with your life. 
          There are no right or wrong answers. Please respond honestly according to how you feel.
        </p>
        
        <!-- Likert Scale Questions -->
        <div class="likert-questions">
          <!-- Q10 -->
          <div class="likert-question">
            <label class="question-label required">Q10: I am satisfied with my life.</label>
            <div class="likert-scale">
              <span class="scale-label">Strongly Disagree</span>
              <div class="scale-options">
                <label class="scale-option">
                  <input type="radio" name="q10" value="1" required />
                  <span class="scale-number">1</span>
                </label>
                <label class="scale-option">
                  <input type="radio" name="q10" value="2" required />
                  <span class="scale-number">2</span>
                </label>
                <label class="scale-option">
                  <input type="radio" name="q10" value="3" required />
                  <span class="scale-number">3</span>
                </label>
                <label class="scale-option">
                  <input type="radio" name="q10" value="4" required />
                  <span class="scale-number">4</span>
                </label>
                <label class="scale-option">
                  <input type="radio" name="q10" value="5" required />
                  <span class="scale-number">5</span>
                </label>
                <label class="scale-option">
                  <input type="radio" name="q10" value="6" required />
                  <span class="scale-number">6</span>
                </label>
                <label class="scale-option">
                  <input type="radio" name="q10" value="7" required />
                  <span class="scale-number">7</span>
                </label>
              </div>
              <span class="scale-label">Strongly Agree</span>
            </div>
          </div>
          
          <!-- Q11-Q17: Repeat similar structure -->
          <!-- For brevity, showing structure. In actual implementation, include all 8 questions -->
          
        </div>
      </div>
      <!-- End Section 1 -->
      
      <!-- Section 2: Self-Efficacy (Q18-Q30) -->
      <!-- Section 3: Post-Traumatic Growth (Q31-Q44) -->
      <!-- Similar structure to Section 1 -->
      
      <!-- Submit Button -->
      <div class="form-actions">
        <button type="submit" class="btn-primary" id="pre-survey-submit">
          Complete Survey & Begin Experience
        </button>
      </div>
      
    </form>
  </div>
</section>
```

---

## 🎨 Survey-Specific CSS

Add to `css/survey.css`:

```css
/* Survey Wrapper */
.survey-wrapper {
  max-width: 900px;
}

.survey-intro {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid var(--color-primary);
}

/* Progress Indicator */
.survey-progress {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.progress-bar {
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  width: 0%;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  font-size: 0.9rem;
  color: #c7d2fe;
}

/* Survey Sections */
.survey-section {
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  color: var(--color-primary);
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--color-primary);
  padding-bottom: 0.5rem;
}

.section-instructions {
  background: rgba(99, 102, 241, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  border-left: 3px solid var(--color-primary);
}

/* Question Groups */
.question-group {
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.question-group:last-child {
  border-bottom: none;
}

.question-label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  color: var(--color-text-light);
}

.question-label.required::after {
  content: " *";
  color: #ef4444;
}

.question-help {
  font-size: 0.95rem;
  color: #c7d2fe;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.input-hint {
  font-size: 0.85rem;
  color: #a5b4fc;
  margin-top: 0.5rem;
  font-style: italic;
}

/* Text Inputs */
.text-input,
.number-input {
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-family: 'Lora', serif;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  color: var(--color-text-light);
  transition: all 0.3s ease;
}

.text-input:focus,
.number-input:focus {
  outline: none;
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.15);
}

.age-input-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.age-input-wrapper .number-input {
  max-width: 100px;
}

.input-suffix {
  font-size: 1.1rem;
  color: #c7d2fe;
}

.text-input-inline {
  max-width: 200px;
  padding: 0.5rem;
  font-size: 0.95rem;
  margin-left: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  color: var(--color-text-light);
}

/* Radio and Checkbox Groups */
.radio-group,
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radio-option,
.checkbox-option {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.radio-option:hover,
.checkbox-option:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(99, 102, 241, 0.3);
}

.radio-option input[type="radio"],
.checkbox-option input[type="checkbox"] {
  margin-right: 0.75rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.radio-option:has(input:checked),
.checkbox-option:has(input:checked) {
  background: rgba(99, 102, 241, 0.2);
  border-color: var(--color-primary);
}

/* Likert Scale */
.likert-question {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 0.5rem;
}

.likert-scale {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.scale-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #c7d2fe;
  min-width: 120px;
}

.scale-options {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
}

.scale-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.scale-option input[type="radio"] {
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-bottom: 0.25rem;
}

.scale-number {
  font-size: 0.85rem;
  color: #a5b4fc;
}

.scale-option:has(input:checked) .scale-number {
  color: var(--color-primary);
  font-weight: 700;
}

/* Validation Messages */
.validation-message {
  color: #ef4444;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  display: none;
}

.validation-message.show {
  display: block;
}

/* Form Actions */
.form-actions {
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
}

.form-actions .btn-primary {
  font-size: 1.2rem;
  padding: 1.25rem 2.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .likert-scale {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .scale-label {
    min-width: auto;
  }
  
  .scale-options {
    width: 100%;
    justify-content: space-between;
  }
  
  .survey-section {
    padding: 1.5rem;
  }
}
```

---

## ⚙️ JavaScript for Survey Logic

Add to `js/survey.js`:

```javascript
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
    trackSurveyProgress('pre-survey-form', 'pre-survey-progress', 'answered-count');
    
    // Ethnicity validation (at least one required)
    setupEthnicityValidation();
  }
  
  // Post-survey form handling
  const postSurveyForm = document.getElementById('post-survey-form');
  if (postSurveyForm) {
    postSurveyForm.addEventListener('submit', handlePostSurveySubmit);
    
    // Pre-fill anonymous code if available
    if (surveyData.preSurvey.anonymous_code) {
      document.getElementById('post-anonymous-code').value = surveyData.preSurvey.anonymous_code;
    }
    
    // Progress tracking
    trackSurveyProgress('post-survey-form', 'post-survey-progress', 'post-answered-count');
  }
}

// Track survey completion progress
function trackSurveyProgress(formId, progressBarId, counterId) {
  const form = document.getElementById(formId);
  const progressBar = document.getElementById(progressBarId);
  const counter = document.getElementById(counterId);
  const totalCount = document.getElementById('total-count');
  
  if (!form || !progressBar) return;
  
  // Get all required inputs
  const requiredInputs = form.querySelectorAll('[required]');
  const total = requiredInputs.length;
  
  if (totalCount) {
    totalCount.textContent = total;
  }
  
  // Update progress
  function updateProgress() {
    let answered = 0;
    
    requiredInputs.forEach(input => {
      if (input.type === 'radio' || input.type === 'checkbox') {
        const name = input.name;
        const checked = form.querySelector(`[name="${name}"]:checked`);
        if (checked && !input.dataset.counted) {
          answered++;
          // Mark as counted to avoid duplicates
          form.querySelectorAll(`[name="${name}"]`).forEach(i => i.dataset.counted = 'true');
        }
      } else if (input.value.trim() !== '') {
        answered++;
      }
    });
    
    // Clear counted flags for next update
    setTimeout(() => {
      requiredInputs.forEach(input => delete input.dataset.counted);
    }, 0);
    
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
  const checkboxes = document.querySelectorAll('input[name="ethnicity"]');
  const validationMsg = document.getElementById('ethnicity-validation');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const checked = document.querySelectorAll('input[name="ethnicity"]:checked');
      if (checked.length > 0) {
        checkboxes.forEach(cb => cb.setCustomValidity(''));
        if (validationMsg) validationMsg.classList.remove('show');
      } else {
        checkboxes.forEach(cb => cb.setCustomValidity('Please select at least one option'));
        if (validationMsg) {
          validationMsg.textContent = 'Please select at least one option';
          validationMsg.classList.add('show');
        }
      }
    });
  });
  
  // Set initial validity
  const checked = document.querySelectorAll('input[name="ethnicity"]:checked');
  if (checked.length === 0) {
    checkboxes.forEach(cb => cb.setCustomValidity('Please select at least one option'));
  }
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
  
  // Collect form data (similar to pre-survey)
  // ... (implementation similar to pre-survey)
  
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
```

---

## 📋 Complete Question Lists

### Pre-Survey Questions (Q10-Q44)

**Life Satisfaction (Q10-Q17):**
1. I am satisfied with my life.
2. The conditions of my life are excellent.
3. I am doing well in my life.
4. I have gotten the important things I want in life.
5. If I could live my life over, I would change almost nothing.
6. My life is full of value.
7. My personal existence is significant.
8. Every day, I experience the sense that life is worth living.

**Self-Efficacy (Q18-Q30):**
1. Break an upsetting problem down into smaller parts
2. Persist in solving a problem even when it seems difficult
3. Make unpleasant thoughts go away
4. Think positively about your future
5. Control your negative thoughts
6. Stop yourself from being upset by unpleasant thoughts
7. Keep from feeling sad
8. Get emotional support from friends and family
9. Get friends to help you with the things you need
10. Get emotional support from community organizations
11. Ask people in your community for help when you need it
12. Get emotional support from outside the family
13. [Note: Q25 appears missing in original survey]

**Post-Traumatic Growth (Q31-Q44):**
1. I experienced a change in how I treat others.
2. I experienced a change in the extent to which I feel free to make my own decisions.
3. I experienced a change in my belief that I have something of value to teach others about life.
4. I experienced a change in the extent to which I can be myself and not try to be what others want me to be.
5. I experienced a change in the extent to which I work through problems and not just give up.
6. I experienced a change in the extent to which I find meaning in life.
7. I experienced a change in the extent to which I reach out and help others.
8. I experienced a change in the extent to which I am a confident person.
9. I experienced a change in the extent to which I listen when others talk to me.
10. I experienced a change in the extent to which I am open to new information and ideas.
11. I experienced a change in my desire to have some impact on the world.
12. I experienced a change in my belief that it's OK to ask others for help.
13. I experienced a change in the extent to which I stand up for my personal rights.
14. I experienced a change in my belief about how many people care about me.

### Post-Survey Additional Section (Q37-Q51)

**Learning Engagement:**

*Interest:*
1. The learning content captures my interest.
2. The learning material is engaging.
3. The content is presented in an interesting way.

*Relevance:*
4. The learning material is relevant to my goals.
5. The content is applicable to my personal interests.
6. I can relate the material to my experiences.
7. The content is useful for my future.

*Confidence:*
8. I believe I can succeed in this learning.
9. The material is at an appropriate level for me.
10. I feel confident in my ability to learn this content.
11. I can achieve success with effort.

*Satisfaction:*
12. I feel satisfied with my learning progress.
13. The learning experience meets my expectations.
14. I am pleased with the outcomes of my learning.
15. I feel a sense of accomplishment.

---

## ✅ Phase 2 Completion Checklist

- [ ] Pre-survey form complete with all 44 questions
- [ ] Post-survey form complete with all 51 questions
- [ ] All demographic questions implemented correctly
- [ ] 7-point Likert scales display correctly
- [ ] Radio buttons work for single-select questions
- [ ] Checkboxes work for multiple-select (ethnicity)
- [ ] Text inputs for "Other" options work
- [ ] Anonymous code field present in both surveys
- [ ] Form validation works for all required fields
- [ ] Ethnicity validation (at least one required) works
- [ ] Progress bar updates as questions are answered
- [ ] Survey data is collected correctly
- [ ] Data is stored in surveyData object
- [ ] Anonymous code is saved to sessionStorage
- [ ] Pre-survey submission navigates to opening story
- [ ] Post-survey submission navigates to completion
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] No console errors
- [ ] All questions match specifications exactly

---

## 🧪 Testing Instructions

1. **Fill out pre-survey completely**
   - Enter anonymous code
   - Answer all demographic questions
   - Answer all Likert scale questions
   - Verify progress bar updates
   - Submit and verify navigation

2. **Check data collection**
   - Open browser console
   - Type: `surveyData.preSurvey`
   - Verify all data is present and correct

3. **Test validation**
   - Try submitting with empty fields
   - Should see validation errors
   - Try submitting without ethnicity selected
   - Should see specific error message

4. **Test post-survey**
   - Navigate to post-survey
   - Verify anonymous code is pre-filled (if from pre-survey)
   - Complete all sections
   - Submit and verify data collection

5. **Responsive testing**
   - Test on mobile (375px width)
   - Verify Likert scales stack properly
   - Test on tablet (768px width)
   - Test on desktop (1024px+ width)

---

## 🚀 Ready for Phase 3

After Phase 2 is complete:
- Pre/post surveys fully functional
- Data collection working
- Move to **Phase 3: Game Stages Implementation**
  - Stage 1: Card creation (5×5 grid)
  - Stage 2: Story writing
  - Stage 3: Dice rolling

---

**Use this prompt to implement Phase 2 survey forms!**
