# Phase 4: Data Integration & Final Polish
## Dice of Destiny Web Application

---

## 🎯 Phase 4 Objective

Complete the application with:
- Google Apps Script integration for data submission
- Background images and final visual polish
- Cross-browser testing and bug fixes
- Performance optimization
- Deployment preparation

**Estimated Development Time**: 3-4 hours  
**Deliverables**: Production-ready application deployed to GitHub Pages

---

## 📋 Prerequisites

**Before starting Phase 4, ensure Phases 1-3 are complete:**
- ✅ All navigation working
- ✅ Pre/post surveys functional
- ✅ All three game stages working
- ✅ Data collection in surveyData object working

---

## 🔌 Google Apps Script Integration

### Step 1: Create Google Spreadsheet

1. Create a new Google Spreadsheet: "Dice of Destiny Data"
2. Create 3 sheets:
   - Sheet 1: "Pre-Survey"
   - Sheet 2: "Post-Survey"
   - Sheet 3: "Game-Play"

### Step 2: Set Up Column Headers

**Pre-Survey Sheet:**
```
Column A: Timestamp
Column B: Anonymous_Code
Column C: Age
Column D: Gender
Column E: Gender_Other
Column F: Ethnicity (comma-separated)
Column G: Ethnicity_Other
Column H: Academic_Year
Column I: Academic_Year_Other
Column J: Major
Column K: Major_Other
Column L: Work_Status
Column M: Marital_Status
Column N: Parental_Status
Columns O-V: Q10-Q17 (Life Satisfaction)
Columns W-AH: Q18-Q30 (Self-Efficacy)
Columns AI-AV: Q31-Q44 (Post-Traumatic Growth)
```

**Post-Survey Sheet:**
```
Similar to Pre-Survey, plus:
Columns AW-BK: Q37-Q51 (Learning Engagement)
```

**Game-Play Sheet:**
```
Column A: Timestamp
Column B: Anonymous_Code
Column C: Session_Start
Column D: Session_End
Column E: Total_Duration_Minutes
Column F: Stage1_Start
Column G: Stage1_End
Column H: Stage1_Duration
Column I: Stage1_Cards (JSON string)
Column J: Stage2_Start
Column K: Stage2_End
Column L: Stage2_Duration
Column M: Stage2_Stories (JSON string)
Column N: Stage3_Start
Column O: Stage3_End
Column P: Stage3_Duration
Column Q: Stage3_Mode
Column R: Stage3_Total_Rolls
Column S: Stage3_Rolls (JSON string)
Column T: Stage3_Final_Remaining (JSON string)
Column U: Stage3_Final_Lost (JSON string)
```

### Step 3: Create Apps Script

In your spreadsheet:
1. Go to Extensions → Apps Script
2. Replace Code.gs content with:

```javascript
// Google Apps Script for Dice of Destiny Data Collection

function doPost(e) {
  try {
    // Parse incoming data
    const data = JSON.parse(e.postData.contents);
    const type = data.type;
    
    // Get appropriate sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet;
    
    if (type === 'pre-survey') {
      sheet = ss.getSheetByName('Pre-Survey');
      writePreSurveyData(sheet, data);
    } else if (type === 'post-survey') {
      sheet = ss.getSheetByName('Post-Survey');
      writePostSurveyData(sheet, data);
    } else if (type === 'game-play') {
      sheet = ss.getSheetByName('Game-Play');
      writeGamePlayData(sheet, data);
    } else {
      throw new Error('Invalid data type');
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function writePreSurveyData(sheet, data) {
  const row = [
    data.timestamp,
    data.demographics.anonymous_code,
    data.demographics.age,
    data.demographics.gender,
    data.demographics.gender_other || '',
    data.demographics.ethnicity.join(', '),
    data.demographics.ethnicity_other || '',
    data.demographics.academic_year,
    data.demographics.academic_year_other || '',
    data.demographics.major,
    data.demographics.major_other || '',
    data.demographics.work_status,
    data.demographics.marital_status,
    data.demographics.parental_status
  ];
  
  // Add Likert scale responses
  for (let i = 10; i <= 17; i++) {
    row.push(data.life_satisfaction[`q${i}`] || '');
  }
  
  for (let i = 18; i <= 30; i++) {
    row.push(data.self_efficacy[`q${i}`] || '');
  }
  
  for (let i = 31; i <= 44; i++) {
    row.push(data.post_traumatic_growth[`q${i}`] || '');
  }
  
  sheet.appendRow(row);
}

function writePostSurveyData(sheet, data) {
  const row = [
    data.timestamp,
    data.anonymous_code
  ];
  
  // Life Satisfaction (Q2-Q9 in post-survey)
  for (let i = 2; i <= 9; i++) {
    row.push(data.life_satisfaction[`q${i}`] || '');
  }
  
  // Self-Efficacy (Q10-Q22)
  for (let i = 10; i <= 22; i++) {
    row.push(data.self_efficacy[`q${i}`] || '');
  }
  
  // Post-Traumatic Growth (Q23-Q36)
  for (let i = 23; i <= 36; i++) {
    row.push(data.post_traumatic_growth[`q${i}`] || '');
  }
  
  // Learning Engagement (Q37-Q51)
  for (let i = 37; i <= 51; i++) {
    row.push(data.learning_engagement[`q${i}`] || '');
  }
  
  sheet.appendRow(row);
}

function writeGamePlayData(sheet, data) {
  const row = [
    data.timestamp,
    data.anonymous_code,
    data.session_start,
    data.session_end,
    data.total_duration_minutes,
    data.stage1.start_time,
    data.stage1.end_time,
    data.stage1.duration_minutes,
    JSON.stringify(data.stage1.cards),
    data.stage2.start_time,
    data.stage2.end_time,
    data.stage2.duration_minutes,
    JSON.stringify(data.stage2.stories),
    data.stage3.start_time,
    data.stage3.end_time,
    data.stage3.duration_minutes,
    data.stage3.mode,
    data.stage3.total_rolls,
    JSON.stringify(data.stage3.rolls),
    JSON.stringify(data.stage3.remainingCards),
    JSON.stringify(data.stage3.lostCards)
  ];
  
  sheet.appendRow(row);
}

function doGet(e) {
  return ContentService
    .createTextOutput('Dice of Destiny Data Collection API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

### Step 4: Deploy Apps Script

1. Click "Deploy" → "New deployment"
2. Type: "Web app"
3. Description: "Dice of Destiny Data Collection"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the Web App URL (e.g., `https://script.google.com/macros/s/.../exec`)

### Step 5: Share Spreadsheet

Share the spreadsheet with your research team's Google accounts.

---

## 💾 Client-Side Data Submission

### Add to `js/data.js`:

```javascript
// data.js - Data submission to Google Apps Script

// Apps Script Web App URL (replace with your deployment URL)
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec';

// Submit pre-survey data
async function submitPreSurvey(surveyData) {
  try {
    showLoadingIndicator('Submitting survey...');
    
    const payload = {
      type: 'pre-survey',
      timestamp: new Date().toISOString(),
      demographics: surveyData.demographics,
      life_satisfaction: surveyData.life_satisfaction,
      self_efficacy: surveyData.self_efficacy,
      post_traumatic_growth: surveyData.post_traumatic_growth
    };
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Required for Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    hideLoadingIndicator();
    // Note: no-cors means we can't read response, assume success if no error
    return { success: true };
    
  } catch (error) {
    hideLoadingIndicator();
    console.error('Pre-survey submission error:', error);
    return { success: false, error: error.message };
  }
}

// Submit game play data
async function submitGamePlayData(gameData) {
  try {
    showLoadingIndicator('Saving game data...');
    
    // Calculate durations
    const calculateDuration = (start, end) => {
      const startTime = new Date(start);
      const endTime = new Date(end);
      return Math.round((endTime - startTime) / 1000 / 60); // minutes
    };
    
    const payload = {
      type: 'game-play',
      timestamp: new Date().toISOString(),
      anonymous_code: sessionStorage.getItem('anonymous_code'),
      session_start: gameData.stage1.startTime,
      session_end: gameData.stage3.endTime,
      total_duration_minutes: calculateDuration(
        gameData.stage1.startTime,
        gameData.stage3.endTime
      ),
      stage1: {
        start_time: gameData.stage1.startTime,
        end_time: gameData.stage1.endTime,
        duration_minutes: calculateDuration(
          gameData.stage1.startTime,
          gameData.stage1.endTime
        ),
        cards: gameData.stage1.cards
      },
      stage2: {
        start_time: gameData.stage2.startTime,
        end_time: gameData.stage2.endTime,
        duration_minutes: calculateDuration(
          gameData.stage2.startTime,
          gameData.stage2.endTime
        ),
        stories: gameData.stage2.selectedCards
      },
      stage3: {
        start_time: gameData.stage3.startTime,
        end_time: gameData.stage3.endTime,
        duration_minutes: calculateDuration(
          gameData.stage3.startTime,
          gameData.stage3.endTime
        ),
        mode: gameData.stage3.mode,
        total_rolls: gameData.stage3.rolls.length,
        rolls: gameData.stage3.rolls,
        remainingCards: gameData.stage3.remainingCards,
        lostCards: gameData.stage3.lostCards
      }
    };
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    hideLoadingIndicator();
    return { success: true };
    
  } catch (error) {
    hideLoadingIndicator();
    console.error('Game data submission error:', error);
    return { success: false, error: error.message };
  }
}

// Submit post-survey data
async function submitPostSurvey(surveyData) {
  try {
    showLoadingIndicator('Submitting final survey...');
    
    const payload = {
      type: 'post-survey',
      timestamp: new Date().toISOString(),
      anonymous_code: surveyData.anonymous_code,
      life_satisfaction: surveyData.life_satisfaction,
      self_efficacy: surveyData.self_efficacy,
      post_traumatic_growth: surveyData.post_traumatic_growth,
      learning_engagement: surveyData.learning_engagement
    };
    
    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });
    
    hideLoadingIndicator();
    return { success: true };
    
  } catch (error) {
    hideLoadingIndicator();
    console.error('Post-survey submission error:', error);
    return { success: false, error: error.message };
  }
}

// Loading indicator
function showLoadingIndicator(message = 'Loading...') {
  let indicator = document.getElementById('loading-indicator');
  if (!indicator) {
    indicator = document.createElement('div');
    indicator.id = 'loading-indicator';
    indicator.className = 'loading-indicator';
    document.body.appendChild(indicator);
  }
  indicator.innerHTML = `
    <div class="loading-spinner"></div>
    <p>${message}</p>
  `;
  indicator.style.display = 'flex';
}

function hideLoadingIndicator() {
  const indicator = document.getElementById('loading-indicator');
  if (indicator) {
    indicator.style.display = 'none';
  }
}
```

### Update submission handlers in survey.js:

```javascript
// In handlePreSurveySubmit():
async function handlePreSurveySubmit(e) {
  e.preventDefault();
  
  // ... (existing validation and data collection code)
  
  // Submit to Google Sheets
  const result = await submitPreSurvey(data);
  
  if (result.success) {
    showNotification('Survey completed successfully!', 'success');
    setTimeout(() => navigateTo('opening-story-1'), 1000);
  } else {
    showNotification('Failed to submit survey. Please try again.', 'error');
  }
}

// In completeStage3() in stage3.js:
async function finishGame() {
  stage3Data.endTime = new Date().toISOString();
  surveyData.gamePlay.stage3 = stage3Data;
  
  // Submit game data
  const result = await submitGamePlayData(surveyData.gamePlay);
  
  if (result.success) {
    showNotification('Game data saved!', 'success');
  } else {
    showNotification('Warning: Game data may not have been saved', 'warning');
  }
  
  // Navigate regardless of submission success
  setTimeout(() => navigateTo('ending-story'), 1000);
}

// In handlePostSurveySubmit():
async function handlePostSurveySubmit(e) {
  e.preventDefault();
  
  // ... (existing validation and data collection code)
  
  // Submit to Google Sheets
  const result = await submitPostSurvey(data);
  
  if (result.success) {
    showNotification('Post-survey completed successfully!', 'success');
    setTimeout(() => navigateTo('completion'), 1000);
  } else {
    showNotification('Failed to submit survey. Please try again.', 'error');
  }
}
```

---

## 🎨 Final Visual Polish

### Add Background Images

1. **Find royalty-free fantasy images** (Unsplash, Pexels, Pixabay)
2. **Optimize images** (compress to <500KB each)
3. **Add to project**: `images/backgrounds/`

### Update CSS for backgrounds:

```css
/* Add to main.css */

/* Background images for different sections */
#welcome {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../images/backgrounds/welcome.jpg') center/cover no-repeat;
}

.story-screen {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../images/backgrounds/story.jpg') center/cover no-repeat;
}

#stage1, #stage2, #stage3 {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../images/backgrounds/game.jpg') center/cover no-repeat;
}

#ending-story {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../images/backgrounds/ending.jpg') center/cover no-repeat;
}

#completion {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('../images/backgrounds/completion.jpg') center/cover no-repeat;
}
```

### Add Loading Indicator Styles:

```css
/* Loading Indicator */
.loading-indicator {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.loading-spinner {
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-indicator p {
  color: white;
  margin-top: 1rem;
  font-size: 1.1rem;
}
```

---

## 🐛 Bug Fixes & Edge Cases

### Handle Network Errors

```javascript
// Add retry logic for failed submissions
async function submitWithRetry(submitFunction, data, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await submitFunction(data);
      if (result.success) return result;
    } catch (error) {
      if (i === maxRetries - 1) {
        // Last attempt failed
        return { success: false, error: 'Failed after multiple attempts' };
      }
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

### Prevent Accidental Data Loss

```javascript
// Warn before leaving if surveys incomplete
window.addEventListener('beforeunload', (e) => {
  if (currentSection !== 'welcome' && currentSection !== 'completion') {
    e.preventDefault();
    e.returnValue = 'Your progress will be lost. Are you sure you want to leave?';
  }
});
```

### Handle Stage 3 Edge Cases

```javascript
// In stage3.js, handle "all cards lost" scenario
function processRollResult(diceResult) {
  // ... existing code
  
  if (remainingCount === 0) {
    showNotification('All cards have been lost', 'info');
    setTimeout(() => finishGame(), 2000);
    return;
  }
  
  // ... rest of code
}
```

---

## ⚡ Performance Optimization

### Lazy Load Images

```javascript
// Add to app.js
document.addEventListener('DOMContentLoaded', () => {
  // Lazy load background images
  const sections = document.querySelectorAll('.screen');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('loaded');
      }
    });
  });
  
  sections.forEach(section => observer.observe(section));
});
```

### Minify CSS & JS for Production

Before deployment:
1. Use online tools or build process to minify CSS/JS
2. Or use CDN tools like CloudFlare
3. For simplicity, can skip if file sizes are small

---

## 📋 Pre-Deployment Checklist

### Functionality
- [ ] All sections navigate correctly
- [ ] Pre-survey submits successfully to Google Sheets
- [ ] Game stages all functional
- [ ] Game data submits successfully
- [ ] Post-survey submits successfully
- [ ] Data appears correctly in spreadsheet

### Visual
- [ ] Background images load correctly
- [ ] All colors match specification
- [ ] Typography is readable
- [ ] Animations smooth
- [ ] No visual glitches

### Responsive Design
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1024px+ width)
- [ ] All content accessible on small screens
- [ ] Buttons are touch-friendly (44px minimum)

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Data Collection
- [ ] Pre-survey data appears in correct sheet
- [ ] All demographic fields populated
- [ ] All Likert scale values correct (1-7)
- [ ] Game play data appears in correct sheet
- [ ] All 25 card texts recorded
- [ ] Stories recorded correctly
- [ ] Dice rolls and lost cards tracked
- [ ] Post-survey data appears in correct sheet
- [ ] Anonymous codes match across sheets

### Performance
- [ ] Page load time < 3 seconds
- [ ] Images optimized (<500KB each)
- [ ] No console errors
- [ ] No memory leaks

---

## 🚀 GitHub Pages Deployment

### Step 1: Prepare Repository

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Complete Dice of Destiny web application"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/dice-of-destiny.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to repository Settings
2. Navigate to "Pages" section
3. Source: Deploy from a branch
4. Branch: `main`, folder: `/root`
5. Save

### Step 3: Access Your Site

After 1-2 minutes, your site will be live at:
```
https://YOUR_USERNAME.github.io/dice-of-destiny/
```

### Step 4: Update Apps Script URL

If you haven't yet:
1. Replace `YOUR_DEPLOYMENT_ID_HERE` in `js/data.js` with actual Apps Script URL
2. Commit and push changes
3. GitHub Pages will automatically redeploy

---

## 📄 Create README.md

Create a comprehensive README:

```markdown
# The Dice of Destiny

An educational web application that helps students reflect on life's value through simulated loss experiences.

## About

Dice of Destiny is a serious game where students:
1. Create cards representing precious things in their life
2. Write stories about why these things matter
3. Roll dice and randomly lose cards
4. Reflect on what truly matters through this simulated loss

## Features

- Complete pre/post survey system
- 5×5 card creation grid with 5 categories
- Story writing interface
- Interactive dice game with EASY/HARD modes
- Automatic data collection to Google Sheets
- Fully responsive design
- No login required

## Technology Stack

- HTML5, CSS3, Vanilla JavaScript
- Google Apps Script (data collection)
- GitHub Pages (hosting)

## Setup for Research

1. Clone this repository
2. Create Google Spreadsheet with 3 sheets (see documentation)
3. Deploy Google Apps Script
4. Update `APPS_SCRIPT_URL` in `js/data.js`
5. Deploy to GitHub Pages

## Usage

Simply navigate to the deployed URL and follow the on-screen instructions.

Estimated completion time: 60-75 minutes

## Data Collection

All data is collected anonymously using student-generated codes. Data includes:
- Pre-survey responses (demographics, life satisfaction, self-efficacy, PTG)
- Game play data (cards, stories, dice rolls)
- Post-survey responses (same measures plus learning engagement)

## License

[Your chosen license - MIT recommended]

## Author

Hironori SAKAI  
©2025

## Citation

If you use this in research, please cite:
[Add citation information]

## Support

For issues or questions, please open a GitHub issue.
```

---

## ✅ Phase 4 Completion Checklist

- [ ] Google Spreadsheet created with 3 sheets
- [ ] Apps Script deployed and URL obtained
- [ ] Data submission functions implemented
- [ ] All three submission points working (pre-survey, game, post-survey)
- [ ] Data appears correctly in spreadsheet
- [ ] Background images added and optimized
- [ ] Loading indicators implemented
- [ ] Error handling and retry logic added
- [ ] All bugs fixed
- [ ] Performance optimized
- [ ] Cross-browser tested
- [ ] Responsive design verified on all devices
- [ ] README.md created
- [ ] Repository created on GitHub
- [ ] GitHub Pages enabled
- [ ] Application deployed and accessible
- [ ] Final testing on live site completed

---

## 🎉 Project Complete!

Congratulations! You now have a fully functional, production-ready web application for educational research on loss and well-being.

### Final Steps:
1. Share URL with students
2. Monitor data collection in Google Sheets
3. Gather feedback for future improvements

### Potential Future Enhancements:
- Analytics integration
- Multi-language support
- Admin dashboard
- Data export features
- Additional game modes

---

**The Dice of Destiny web application is now complete and ready for use!**
