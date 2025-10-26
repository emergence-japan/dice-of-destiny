# Phase 1: Basic Structure & Navigation System
## Dice of Destiny Web Application

---

## 🎯 Phase 1 Objective

Build the foundational structure of the Dice of Destiny web application with:
- Complete HTML structure for all sections
- Navigation system (one-way, no back buttons)
- Fantasy-themed visual design
- Welcome and story screens
- Session management (no saving, refresh = restart)

**Estimated Development Time**: 2-3 hours  
**Deliverables**: Working skeleton application with all sections navigable

---

## 📋 Project Context

**What is Dice of Destiny?**
An educational web application that helps university students reflect on life's value through simulated loss experiences. Students create cards of precious things, write stories about them, then roll dice to randomly lose them—experiencing simulated loss to appreciate what matters most.

**Technical Requirements:**
- Vanilla JavaScript only (no frameworks)
- Static site (deployable to GitHub Pages)
- Fully responsive (mobile, tablet, desktop)
- Fantasy/artistic aesthetic with immersive storytelling
- English language only

---

## 🏗️ Application Flow Structure

```
1. Welcome Screen
   ↓
2. Important Notes & Instructions
   ↓
3. Pre-Survey (placeholder in Phase 1)
   ↓
4. Opening Story (3 parts)
   ↓
5. Stage 1: Creating Cards (placeholder)
   ↓
6. Stage 2: Writing Stories (placeholder)
   ↓
7. Stage 3: Rolling Dice (placeholder)
   ↓
8. Ending Story
   ↓
9. Post-Survey (placeholder)
   ↓
10. Thank You / Completion
```

**Phase 1 Focus**: Sections 1, 2, 4, 8, 10 + placeholders for 3, 5-7, 9

---

## 🎨 Visual Design Specifications

### Color Palette
```css
:root {
  /* Category Colors (for later phases) */
  --color-items: #4CAF50;      /* Green */
  --color-person: #E91E63;     /* Pink */
  --color-places: #2196F3;     /* Blue */
  --color-events: #FFC107;     /* Yellow */
  --color-goals: #9C27B0;      /* Purple */
  
  /* UI Colors */
  --color-primary: #6366F1;    /* Indigo */
  --color-secondary: #8B5CF6;  /* Violet */
  --color-success: #10B981;    /* Green */
  --color-text-dark: #1F2937;  /* Gray-800 */
  --color-text-light: #F9FAFB; /* Gray-50 */
  --color-background: #111827; /* Dark background for fantasy theme */
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 3rem;
  --spacing-xl: 4rem;
}
```

### Typography
```css
/* Import fonts */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

/* Usage */
- Headings: 'Cinzel', serif (fantasy feel)
- Body text: 'Lora', serif (readable, elegant)
- Font sizes: responsive (clamp() for fluid typography)
```

### Layout Principles
- **Mobile-first responsive design**
- **Centered content** with max-width: 1200px
- **Full-height sections** for immersive experience
- **Smooth transitions** between sections
- **Fantasy background images** (use gradient overlays for now, actual images in Phase 4)

---

## 📝 Section-by-Section Implementation

### 1. Welcome Screen

**Content:**
```html
<section id="welcome" class="screen active">
  <div class="content-wrapper">
    <h1 class="title">The Dice of Destiny</h1>
    <p class="subtitle">A game where you learn the value of life through loss</p>
    <p class="tagline">Simulated loss game</p>
    <button class="btn-primary" onclick="navigateTo('important-notes')">
      Begin Your Journey
    </button>
  </div>
</section>
```

**Visual:**
- Full-screen section
- Centered text with elegant typography
- Fantasy gradient background (dark blue to purple)
- Large, prominent button with hover effects
- Fade-in animation on load

---

### 2. Important Notes & Instructions

**Content:**
```html
<section id="important-notes" class="screen">
  <div class="content-wrapper">
    <h2>Important Notes</h2>
    
    <div class="notes-box">
      <h3>About This Experience</h3>
      <ul>
        <li>This is a game. Your experience while playing differs from reality.</li>
        <li>Participation in and discontinuation of this game are entirely at your discretion.</li>
        <li>Participation in the game and its outcomes will not affect any individual's evaluation.</li>
        <li>If you feel uncomfortable during play, you may immediately stop the game.</li>
        <li>No one can force you to participate in or continue playing the game.</li>
      </ul>
    </div>
    
    <div class="notes-box">
      <h3>Survey Request</h3>
      <ul>
        <li>Surveys will be conducted before and after playing to study the game's effects.</li>
        <li>Data collected in the surveys will be processed statistically; personal information will not be disclosed.</li>
        <li>We require responses from as many participants as possible. Your cooperation is greatly appreciated.</li>
      </ul>
    </div>
    
    <div class="time-estimate">
      <p><strong>Estimated Time:</strong> 60-75 minutes</p>
      <p><em>Please ensure you have enough time to complete the entire experience.</em></p>
    </div>
    
    <button class="btn-primary" onclick="navigateTo('pre-survey')">
      I Understand, Proceed to Survey
    </button>
  </div>
</section>
```

**Visual:**
- Boxed content areas with subtle borders
- Clear hierarchy with headings
- Readable font size (minimum 16px)
- Sufficient spacing between sections

---

### 3. Pre-Survey Placeholder

**Content:**
```html
<section id="pre-survey" class="screen">
  <div class="content-wrapper">
    <h2>Pre-Survey</h2>
    
    <div class="placeholder-box">
      <p class="placeholder-text">
        📋 Survey form will be implemented in Phase 2
      </p>
      <p>This section will include:</p>
      <ul>
        <li>Anonymous code creation (Q1)</li>
        <li>Demographics (Q2-Q9): Age, Gender, Ethnicity, etc.</li>
        <li>Life Satisfaction (Q10-Q17): 8 questions with 7-point Likert scale</li>
        <li>Self-Efficacy (Q18-Q30): 13 questions</li>
        <li>Post-Traumatic Growth (Q31-Q44): 14 questions</li>
      </ul>
    </div>
    
    <button class="btn-primary" onclick="navigateTo('opening-story-1')">
      Skip to Opening Story (for testing)
    </button>
  </div>
</section>
```

---

### 4. Opening Story (3 Parts)

**Part 1:**
```html
<section id="opening-story-1" class="screen story-screen">
  <div class="content-wrapper story-content">
    <div class="story-text">
      <p>Suddenly, everything around you fades into darkness.</p>
      <p>When you open your eyes again, you find yourself in a strange, unfamiliar world.</p>
      <p>In front of you stands a child, dressed in a bizarre and colorful costume.</p>
      <p>As your eyes meet, the child begins to speak directly to you:</p>
      <blockquote>
        "I'm speaking to your heart. You've been struck by an unexpected misfortune. 
        Life may never be the same again. This accident is so great that you could 
        lose everything you hold dear."
      </blockquote>
      <p class="story-emphasis">You stare in confusion, not quite understanding what's happening—</p>
    </div>
    <button class="btn-secondary" onclick="navigateTo('opening-story-2')">
      Continue →
    </button>
  </div>
</section>
```

**Part 2:**
```html
<section id="opening-story-2" class="screen story-screen">
  <div class="content-wrapper story-content">
    <div class="story-text">
      <p>"I know you're probably thinking, 'What on earth are you talking about?' That's natural. 
      But please, trust me. What you're about to experience is deeply connected to your real life."</p>
      <p>You barely have time to process this before another surprise comes.</p>
      <p>"You're not the only one who has faced this misfortune. Others have too. And together, 
      you've been given a chance—to use something called <strong>the Dice of Destiny</strong>."</p>
      <p>The child leans closer, lowering their voice as if to emphasize the point:</p>
      <blockquote>
        "This is the most important thing, so don't forget it. By rolling this dice, you may be 
        able to protect what matters most to you. In fact, it could even lead you to a life 
        better than the one you have now."
      </blockquote>
    </div>
    <button class="btn-secondary" onclick="navigateTo('opening-story-3')">
      Continue →
    </button>
  </div>
</section>
```

**Part 3:**
```html
<section id="opening-story-3" class="screen story-screen">
  <div class="content-wrapper story-content">
    <div class="story-text">
      <p>Just as you begin to wish for a clearer explanation—</p>
      <p>"I know you want me to explain everything in detail," the child interrupts, 
      "but there isn't time. It's about to begin."</p>
      <p>You feel a wave of uncertainty, yet your expression shifts to one of determination.</p>
      <p>"Thank you for listening," the child continues. "Now, you'll write down the things that 
      are most important to you on cards. As many as you can. Then, you'll join others who have 
      also written their important things, and together you'll roll the Dice of Destiny."</p>
      <p>The child suddenly raises a finger as if to warn you:</p>
      <blockquote>
        "Oh! Remember—you must follow the Master's instructions. Don't act on your own. 
        I truly hope that your life will become better through this."
      </blockquote>
      <p class="story-emphasis">With those final words, the child fades from your sight—vanishing 
      as quickly as they appeared.</p>
    </div>
    <button class="btn-primary" onclick="navigateTo('stage1')">
      Begin Stage 1
    </button>
  </div>
</section>
```

**Visual for Story Sections:**
- Centered text with generous margins
- Larger font size for readability
- Blockquotes styled distinctly (italic, indented, different color)
- Gentle fade-in animations
- Mystical background (gradient or subtle pattern)

---

### 5-7. Game Stages Placeholders

**Stage 1 Placeholder:**
```html
<section id="stage1" class="screen">
  <div class="content-wrapper">
    <h2>Stage 1: Creating Precious Thing Cards</h2>
    
    <div class="placeholder-box">
      <p class="placeholder-text">
        🎴 Stage 1 will be implemented in Phase 3
      </p>
      <p>This section will include:</p>
      <ul>
        <li>5×5 card grid (25 cards total)</li>
        <li>5 categories: Items, Person, Places, Events, Goals</li>
        <li>Color-coded visual cards</li>
        <li>Validation: min 5 cards, max 25, at least 1 per category</li>
      </ul>
    </div>
    
    <button class="btn-primary" onclick="navigateTo('stage2')">
      Skip to Stage 2 (for testing)
    </button>
  </div>
</section>
```

**Stage 2 & 3 Placeholders:** (Similar structure)

---

### 8. Ending Story

```html
<section id="ending-story" class="screen story-screen">
  <div class="content-wrapper story-content">
    <div class="story-text">
      <p>After rolling all the dice, slowly close your eyes.</p>
      <p>Then, you hear the Master's voice speaking to you:</p>
      <blockquote>
        "Everything you have in life will one day be lost. Everyone, without exception, 
        will eventually face death."
      </blockquote>
      <p>But the voice continues:</p>
      <blockquote>
        "Yet right now, in this very moment, you are alive. And the things you cherish most 
        are still with you."
      </blockquote>
      <p>The words begin to fade, and when you open your eyes again, you find yourself back 
      in the same place as before.</p>
      <p>You realize you have just experienced something strange—your most important things 
      being taken away by fate.</p>
      <p class="story-emphasis">You take a deep breath. Your heart feels calmer. And somehow, 
      you sense that life might be a little brighter than before.</p>
    </div>
    <button class="btn-primary" onclick="navigateTo('post-survey')">
      Proceed to Final Survey
    </button>
  </div>
</section>
```

---

### 9. Post-Survey Placeholder

```html
<section id="post-survey" class="screen">
  <div class="content-wrapper">
    <h2>Post-Survey</h2>
    
    <div class="placeholder-box">
      <p class="placeholder-text">
        📋 Post-survey form will be implemented in Phase 2
      </p>
      <p>This section will include the same sections as pre-survey, plus:</p>
      <ul>
        <li>Learning Engagement (Q37-Q51): 15 new questions</li>
      </ul>
    </div>
    
    <button class="btn-primary" onclick="navigateTo('completion')">
      Skip to Completion (for testing)
    </button>
  </div>
</section>
```

---

### 10. Thank You / Completion Screen

```html
<section id="completion" class="screen">
  <div class="content-wrapper completion-content">
    <h1 class="completion-title">The Dice of Destiny</h1>
    <p class="completion-subtitle">A game where you learn the value of life through loss</p>
    
    <div class="completion-message">
      <p>I hope today's session will support your health and well-being,<br>
      and help you lead a more fulfilling life.</p>
      <p>I look forward to seeing you again someday, in good spirits.<br>
      <strong>Thank you so much.</strong></p>
    </div>
    
    <p class="copyright">©Hironori SAKAI 2025</p>
  </div>
</section>
```

**Visual:**
- Centered, elegant layout
- Peaceful color scheme
- Larger spacing
- Subtle fade-in animation

---

## 🔧 Navigation System Implementation

### JavaScript Navigation Logic

```javascript
// app.js

// Global state
let currentSection = 'welcome';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

function initializeApp() {
  // Show welcome screen
  showSection('welcome');
  
  // Add fade-in animation to welcome screen
  const welcomeSection = document.getElementById('welcome');
  welcomeSection.classList.add('fade-in');
  
  // Warning on page refresh
  window.addEventListener('beforeunload', (e) => {
    if (currentSection !== 'welcome' && currentSection !== 'completion') {
      e.preventDefault();
      e.returnValue = 'Are you sure you want to leave? Your progress will be lost.';
    }
  });
}

function navigateTo(sectionId) {
  // Hide current section
  const currentSectionEl = document.getElementById(currentSection);
  if (currentSectionEl) {
    currentSectionEl.classList.remove('active');
    currentSectionEl.classList.add('fade-out');
  }
  
  // Show new section after short delay
  setTimeout(() => {
    if (currentSectionEl) {
      currentSectionEl.classList.remove('fade-out');
    }
    
    const newSection = document.getElementById(sectionId);
    if (newSection) {
      newSection.classList.add('active', 'fade-in');
      newSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      currentSection = sectionId;
      
      // Remove fade-in class after animation
      setTimeout(() => {
        newSection.classList.remove('fade-in');
      }, 500);
    }
  }, 300);
}

function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll('.screen').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    currentSection = sectionId;
  }
}
```

---

## 🎨 CSS Structure

### main.css (Core Styles)

```css
/* Reset and Base Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: 'Lora', serif;
  color: var(--color-text-light);
  background-color: var(--color-background);
  line-height: 1.6;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Cinzel', serif;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1rem;
}

/* Screen Sections */
.screen {
  display: none;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
  position: relative;
}

.screen.active {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Content Wrapper */
.content-wrapper {
  max-width: 800px;
  width: 100%;
  background: rgba(17, 24, 39, 0.8);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
}

/* Typography */
.title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text-light);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  text-align: center;
  margin-bottom: 0.5rem;
  color: #e0e7ff;
}

.tagline {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #c7d2fe;
  font-style: italic;
}

/* Buttons */
.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-family: 'Cinzel', serif;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 1rem 0;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
}

/* Notes Boxes */
.notes-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.notes-box h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.notes-box ul {
  list-style-position: inside;
  padding-left: 1rem;
}

.notes-box li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

/* Story Sections */
.story-content {
  max-width: 700px;
}

.story-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
}

.story-text blockquote {
  border-left: 4px solid var(--color-primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
  font-style: italic;
  color: #e0e7ff;
}

.story-emphasis {
  font-style: italic;
  color: #c7d2fe;
}

/* Placeholder Boxes */
.placeholder-box {
  background: rgba(251, 191, 36, 0.1);
  border: 2px dashed rgba(251, 191, 36, 0.3);
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
}

.placeholder-text {
  font-size: 1.3rem;
  font-weight: 600;
  color: #fbbf24;
  margin-bottom: 1rem;
}

.placeholder-box ul {
  text-align: left;
  max-width: 500px;
  margin: 1rem auto;
}

/* Completion Screen */
.completion-content {
  text-align: center;
}

.completion-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
}

.completion-subtitle {
  font-size: 1.3rem;
  margin-bottom: 3rem;
}

.completion-message {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.5rem;
  padding: 2rem;
  margin: 2rem 0;
  font-size: 1.2rem;
  line-height: 1.8;
}

.copyright {
  margin-top: 3rem;
  font-size: 0.9rem;
  opacity: 0.7;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.fade-out {
  animation: fadeOut 0.3s ease-out forwards;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 2rem;
  }
  
  .screen {
    padding: 1rem;
  }
  
  .btn-primary,
  .btn-secondary {
    width: 100%;
    padding: 1rem;
  }
}
```

---

## 📁 File Structure for Phase 1

```
dice-of-destiny/
│
├── index.html                 # Complete HTML with all sections
├── css/
│   ├── variables.css          # CSS custom properties
│   └── main.css               # All styles for Phase 1
├── js/
│   └── app.js                 # Navigation and initialization
└── README.md                  # Setup instructions
```

---

## ✅ Phase 1 Completion Checklist

Before moving to Phase 2, verify:

- [ ] All 10 sections are present in HTML
- [ ] Navigation works smoothly between all sections
- [ ] Welcome screen displays correctly with fantasy styling
- [ ] Important notes section is readable and well-formatted
- [ ] All 3 opening story parts display with proper formatting
- [ ] Placeholder sections clearly indicate future implementation
- [ ] Ending story displays correctly
- [ ] Completion screen shows final message
- [ ] Page refresh warning works (except on welcome/completion)
- [ ] Responsive design works on mobile (test at 375px width)
- [ ] Responsive design works on tablet (test at 768px width)
- [ ] Responsive design works on desktop (test at 1024px+ width)
- [ ] All transitions and animations are smooth
- [ ] Typography is readable (minimum 16px body text)
- [ ] Colors provide adequate contrast (WCAG AA)
- [ ] No console errors in browser
- [ ] Code is well-commented

---

## 🧪 Testing Instructions

### Manual Testing Steps:

1. **Open `index.html` in browser**
   - Should see welcome screen with fantasy styling
   - Title, subtitle, and button should be visible

2. **Click "Begin Your Journey"**
   - Should smoothly transition to Important Notes
   - All content should be readable

3. **Navigate through all sections**
   - Test each button click
   - Verify smooth transitions
   - Check that placeholders display correctly

4. **Test responsive design**
   - Resize browser to mobile width (375px)
   - Verify all content is readable
   - Buttons should be full-width
   - Text should not overflow

5. **Test page refresh warning**
   - Navigate to any section except welcome/completion
   - Try to refresh page
   - Should see browser warning

### Browser Testing:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## 🚀 Deployment to GitHub Pages

1. Create GitHub repository: `dice-of-destiny`
2. Push Phase 1 code
3. Enable GitHub Pages in repository settings
4. Set source to `main` branch, `/root` folder
5. Access at: `https://[username].github.io/dice-of-destiny/`

---

## 📌 Important Notes for Phase 1

### What's Included:
✅ Complete HTML structure
✅ Full navigation system
✅ Fantasy-themed visual design
✅ Story sections with content
✅ Placeholder sections for future phases
✅ Responsive design framework
✅ Animation system

### What's NOT Included (Coming in Later Phases):
❌ Pre-survey form (Phase 2)
❌ Post-survey form (Phase 2)
❌ Stage 1: Card creation (Phase 3)
❌ Stage 2: Story writing (Phase 3)
❌ Stage 3: Dice rolling (Phase 3)
❌ Google Apps Script integration (Phase 4)
❌ Data submission (Phase 4)
❌ Background images (Phase 4 - using gradients for now)

---

## 🎯 Success Criteria for Phase 1

**Functional:**
- All sections navigable
- One-way navigation enforced
- No back buttons or browser back
- Smooth transitions between sections
- Page refresh warning works

**Visual:**
- Fantasy/mystical aesthetic achieved
- Readable typography
- Adequate color contrast
- Responsive on all devices
- Professional appearance

**Code Quality:**
- Clean, organized code
- Well-commented
- No console errors
- Follows best practices
- Easy to extend in future phases

---

## 🔜 Next Steps

After Phase 1 is complete and tested:
1. Review and approve functionality
2. Proceed to **Phase 2: Survey Forms Implementation**
   - Pre-survey with all 44 questions
   - Post-survey with all 51 questions
   - 7-point Likert scales
   - Form validation
   - Data storage preparation

---

**Ready to implement Phase 1? Use this prompt with Claude, ChatGPT, or another AI code assistant to generate the complete code.**
