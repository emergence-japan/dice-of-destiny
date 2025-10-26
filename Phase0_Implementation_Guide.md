# Dice of Destiny - 4-Phase Implementation Guide

**Project**: Educational Web Application about Loss and Well-being  
**Approach**: Modular, Phase-by-Phase Development  
**Total Phases**: 4  
**Estimated Total Time**: 15-20 hours

---

## 📋 Overview

This guide explains how to use the four-phase prompt system to build the complete Dice of Destiny web application. Each phase builds upon the previous one, ensuring a stable, tested, and production-ready application.

---

## 🎯 Why 4 Phases?

### Advantages of Phased Approach:
1. **Reliability**: Test each component before building the next
2. **Debugging**: Easier to identify and fix issues
3. **Flexibility**: Can adjust specifications between phases
4. **Learning**: Understand code incrementally
5. **Quality**: Each phase produces working, deployable code

### What You'll Build:

```
Phase 1 (2-3 hrs)  → Navigation & Structure
Phase 2 (4-5 hrs)  → Survey Forms
Phase 3 (6-8 hrs)  → Game Stages
Phase 4 (3-4 hrs)  → Data Integration & Polish
────────────────────────────────────────────
Total: 15-20 hrs   → Complete Application
```

---

## 📁 Phase-by-Phase Breakdown

### Phase 1: Basic Structure & Navigation
**File**: `Phase1_Basic_Structure_Navigation.md`

**What You'll Build:**
- Complete HTML structure for all 10 sections
- One-way navigation system
- Welcome and story screens
- Fantasy-themed visual design
- Placeholder sections for surveys and game stages

**Deliverables:**
- `index.html` - Complete HTML structure
- `css/main.css` - Base styles and animations
- `js/app.js` - Navigation logic
- Working skeleton that navigates from welcome to completion

**Success Criteria:**
✅ Can navigate through all sections  
✅ Fantasy aesthetic visible  
✅ No console errors  
✅ Responsive on mobile/tablet/desktop  

**Testing Checklist:**
- [ ] Welcome screen displays correctly
- [ ] Can click through all sections smoothly
- [ ] Story text is readable and well-formatted
- [ ] Placeholders clearly indicate future work
- [ ] Refresh warning works (except welcome/completion)
- [ ] Works on Chrome, Firefox, Safari, Edge

---

### Phase 2: Survey Forms Implementation
**File**: `Phase2_Survey_Forms.md`

**What You'll Build:**
- Complete pre-survey (44 questions)
- Complete post-survey (51 questions)
- All demographic questions
- 7-point Likert scale UI components
- Form validation
- Progress indicators
- Data collection structure

**Deliverables:**
- `css/survey.css` - Survey-specific styles
- `js/survey.js` - Form handling and validation
- Fully functional pre and post surveys

**Success Criteria:**
✅ All survey questions display correctly  
✅ Form validation prevents incomplete submissions  
✅ Data collected in `surveyData` object  
✅ Progress bars update correctly  
✅ Anonymous code saved for later use  

**Testing Checklist:**
- [ ] Can complete entire pre-survey
- [ ] All 44 questions present and functional
- [ ] Validation works (try submitting incomplete form)
- [ ] Data appears in browser console: `surveyData.preSurvey`
- [ ] Post-survey works similarly (51 questions)
- [ ] Anonymous code pre-fills in post-survey
- [ ] Likert scales work on mobile devices

---

### Phase 3: Game Stages Implementation
**File**: `Phase3_Game_Stages.md`

**What You'll Build:**
- Stage 1: 5×5 card creation grid
- Stage 2: Story writing interface
- Stage 3: Dice rolling game mechanic
- Real-time validation
- Visual feedback
- Complete game data tracking

**Deliverables:**
- `css/game.css` - Game-specific styles
- `js/stage1.js` - Card creation logic
- `js/stage2.js` - Story writing logic
- `js/stage3.js` - Dice game logic
- Fully playable game experience

**Success Criteria:**
✅ Stage 1: 5×5 grid with color-coded categories  
✅ Stage 1: Validation (min 5, max 25, 1 per category)  
✅ Stage 2: Card selection and story writing  
✅ Stage 3: Dice animation and card loss mechanic  
✅ All game data collected correctly  

**Testing Checklist:**
- [ ] Can create 5-25 cards in Stage 1
- [ ] Validation prevents proceeding with <5 cards
- [ ] Cards display correctly in Stage 2
- [ ] Can write stories for selected cards
- [ ] Dice animation plays smoothly in Stage 3
- [ ] EASY mode loses 1-6 cards correctly
- [ ] HARD mode loses 3-8 cards correctly
- [ ] Cards move from remaining to lost correctly
- [ ] Can finish after minimum 4 rolls
- [ ] Check data: `surveyData.gamePlay`

---

### Phase 4: Data Integration & Polish
**File**: `Phase4_Data_Integration_Polish.md`

**What You'll Build:**
- Google Apps Script integration
- Data submission to Google Sheets
- Background images
- Loading indicators
- Error handling and retry logic
- Final bug fixes
- Performance optimization

**Deliverables:**
- `js/data.js` - Data submission functions
- Google Apps Script code
- Background images
- Complete, production-ready application

**Success Criteria:**
✅ Data successfully submits to Google Sheets  
✅ All three data types recorded (pre/game/post)  
✅ Background images load correctly  
✅ Error handling works  
✅ Application deployed to GitHub Pages  

**Testing Checklist:**
- [ ] Google Spreadsheet created with 3 sheets
- [ ] Apps Script deployed successfully
- [ ] Pre-survey data appears in spreadsheet
- [ ] Game play data appears in spreadsheet
- [ ] Post-survey data appears in spreadsheet
- [ ] Anonymous codes match across sheets
- [ ] Background images display correctly
- [ ] Loading indicators show during submissions
- [ ] Works on slow network connections
- [ ] Final cross-browser test complete
- [ ] Deployed to GitHub Pages
- [ ] Live site fully functional

---

## 🚀 How to Use These Prompts

### Step 1: Choose Your AI Assistant
- **Claude 3.5 Sonnet** (recommended - 200K context)
- **ChatGPT-4** (works well, may need to split large prompts)
- **GitHub Copilot** (can use in IDE)
- **Any AI code assistant**

### Step 2: Phase-by-Phase Implementation

**For each phase:**

1. **Read the prompt file completely**
   - Understand what will be built
   - Review success criteria
   - Note testing requirements

2. **Submit prompt to AI**
   - Copy entire prompt file
   - Paste into AI assistant
   - Add any specific preferences

3. **Implement the generated code**
   - Create files as specified
   - Copy code from AI response
   - Organize in correct directory structure

4. **Test thoroughly**
   - Use testing checklist in prompt
   - Fix any issues before moving on
   - Verify success criteria met

5. **Commit to version control**
   ```bash
   git add .
   git commit -m "Complete Phase X: [description]"
   ```

6. **Move to next phase**
   - Only proceed when current phase fully works
   - Document any issues or changes

---

## 💡 Tips for Success

### Before You Start:
- [ ] Read all four prompts to understand the complete project
- [ ] Set up your development environment
- [ ] Install a code editor (VS Code recommended)
- [ ] Have a modern browser for testing
- [ ] Create a GitHub account if you don't have one

### During Development:
- ✅ **Test after each phase** - Don't skip testing
- ✅ **Use version control** - Commit frequently
- ✅ **Keep backups** - Save working versions
- ✅ **Test on real devices** - Not just browser dev tools
- ✅ **Take breaks** - This is a substantial project

### When Things Go Wrong:
- Check browser console for errors
- Verify file paths are correct
- Ensure all files are properly linked
- Test in incognito/private browsing
- Ask AI to debug specific issues
- Review prompt's troubleshooting section

---

## 📊 Progress Tracking

Use this checklist to track your progress:

### Phase 1: Structure
- [ ] Started: ____/____/____
- [ ] Code generated
- [ ] Code implemented
- [ ] Testing complete
- [ ] Committed to git
- [ ] Completed: ____/____/____

### Phase 2: Surveys
- [ ] Started: ____/____/____
- [ ] Code generated
- [ ] Code implemented
- [ ] Testing complete
- [ ] Committed to git
- [ ] Completed: ____/____/____

### Phase 3: Game
- [ ] Started: ____/____/____
- [ ] Code generated
- [ ] Code implemented
- [ ] Testing complete
- [ ] Committed to git
- [ ] Completed: ____/____/____

### Phase 4: Integration
- [ ] Started: ____/____/____
- [ ] Google Sheets setup
- [ ] Apps Script deployed
- [ ] Code implemented
- [ ] Testing complete
- [ ] Deployed to GitHub Pages
- [ ] Completed: ____/____/____

---

## 🎓 Learning Outcomes

By completing this project, you will learn:

**HTML/CSS:**
- Semantic HTML structure
- Responsive design techniques
- CSS Grid and Flexbox
- CSS animations and transitions
- Form design and styling

**JavaScript:**
- DOM manipulation
- Event handling
- Data structures and state management
- Async/await and Promises
- Module organization
- Form validation

**Data Management:**
- Google Apps Script
- RESTful API integration
- Data collection and storage
- Privacy and security considerations

**Deployment:**
- Git and GitHub
- GitHub Pages hosting
- Production readiness
- Testing and QA

**Project Management:**
- Phased development
- Testing strategies
- Documentation
- Version control

---

## 🆘 Troubleshooting

### Common Issues and Solutions:

**Issue**: Navigation doesn't work
- **Check**: JavaScript file is linked in HTML
- **Check**: No console errors
- **Check**: Function names match between HTML and JS

**Issue**: Styles not applying
- **Check**: CSS file is linked correctly
- **Check**: Path to CSS file is correct
- **Check**: No CSS syntax errors

**Issue**: Form validation not working
- **Check**: All required attributes present
- **Check**: Validation functions called correctly
- **Check**: Event listeners attached

**Issue**: Data not submitting to Google Sheets
- **Check**: Apps Script URL is correct
- **Check**: Apps Script deployed as "Anyone"
- **Check**: No CORS errors (use no-cors mode)
- **Check**: Spreadsheet has correct sheets

**Issue**: Dice animation not smooth
- **Check**: CSS animation syntax
- **Check**: JavaScript timing
- **Check**: Browser compatibility

**Issue**: Not responsive on mobile
- **Check**: Meta viewport tag in HTML
- **Check**: Media queries in CSS
- **Check**: Touch target sizes (min 44px)

---

## 📚 Additional Resources

### Reference Documents:
- `DiceOfDestiny_WebApp_Specifications.md` - Complete specifications
- `AI_Prompt_DiceOfDestiny_WebApp.md` - Original monolithic prompt

### Online Resources:
- MDN Web Docs: https://developer.mozilla.org/
- Google Apps Script Docs: https://developers.google.com/apps-script
- GitHub Pages Guide: https://pages.github.com/

### Testing Tools:
- Chrome DevTools: Built into Chrome browser
- Firefox Developer Tools: Built into Firefox
- Lighthouse: Performance and accessibility testing
- BrowserStack: Cross-browser testing (paid)

---

## 🎯 Final Notes

### Remember:
- **Quality over speed** - Take time to test thoroughly
- **One phase at a time** - Don't skip ahead
- **Document as you go** - Add comments to code
- **Ask for help** - Use AI or community resources
- **Celebrate progress** - Each phase is an achievement!

### Support:
If you encounter issues not covered in the prompts:
1. Check browser console for specific errors
2. Ask your AI assistant to debug the specific issue
3. Search for similar issues online
4. Review the troubleshooting section in each prompt

---

## 📝 Customization

Feel free to customize:
- Color scheme (update CSS variables)
- Background images
- Font choices
- Validation rules (minimum cards, etc.)
- Text content (stories, instructions)

**Just remember**: If you change structure, you may need to update multiple phases.

---

## ✅ Ready to Start?

When you're ready:
1. Open `Phase1_Basic_Structure_Navigation.md`
2. Read it completely
3. Copy and paste into your AI assistant
4. Follow the implementation steps
5. Test thoroughly
6. Move to Phase 2

**Good luck building The Dice of Destiny!**

---

**Created**: 2025-10-26  
**Author**: Hironori SAKAI  
**Purpose**: Educational Research on Loss and Well-being

