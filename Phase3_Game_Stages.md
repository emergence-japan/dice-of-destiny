# Phase 3: Game Stages Implementation
## Dice of Destiny Web Application

---

## 🎯 Phase 3 Objective

Implement the three core game stages:
- **Stage 1**: Creating Precious Thing Cards (5×5 grid)
- **Stage 2**: Writing Stories about selected cards
- **Stage 3**: Rolling Dice of Destiny (dice game mechanic)

**Estimated Development Time**: 6-8 hours  
**Deliverables**: Fully functional game experience with data tracking

---

## 📋 Prerequisites

**Before starting Phase 3, ensure Phases 1-2 are complete:**
- ✅ Navigation system functional
- ✅ Pre-survey and post-survey forms working
- ✅ Data collection structure in place (surveyData object)
- ✅ Opening and ending stories display correctly

---

## 🎮 Stage 1: Creating Precious Thing Cards

### Overview
Students create up to 25 cards across 5 categories, writing down things that are important to them.

### Requirements
- 5×5 grid layout (25 total card slots)
- 5 color-coded categories: Items, Person, Places, Events, Goals
- Minimum: 5 cards total (at least 1 per category)
- Maximum: 25 cards
- Real-time validation feedback
- Visual card-style design

---

### HTML Structure

Replace the `#stage1` placeholder with:

```html
<section id="stage1" class="screen">
  <div class="content-wrapper stage-wrapper">
    
    <!-- Stage Header -->
    <div class="stage-header">
      <h2>Stage 1: Creating Precious Thing Cards</h2>
      <p class="stage-mission">
        <strong>Mission:</strong> Arrange the cards on the board.
      </p>
      <p class="stage-goal">
        <strong>Goal:</strong> Write down at least 5 things that are truly important to you, 
        then place the cards on your board.
      </p>
      <p class="stage-time">
        <strong>Estimated Time:</strong> 10-20 minutes
      </p>
    </div>
    
    <!-- Guide Questions -->
    <div class="guide-box">
      <h3>Guide Questions to Help You:</h3>
      <ul>
        <li>Looking back, is there a place you feel is important to you? Where is it?</li>
        <li>Who is the most important person in your life?</li>
        <li>What unforgettable event from your past stands out?</li>
        <li>What do you hold dear?</li>
        <li>What is a meaningful goal for you?</li>
      </ul>
      <p class="guide-note">
        There are no right or wrong answers. Just write down whatever comes to mind.
      </p>
    </div>
    
    <!-- Card Grid -->
    <div class="card-grid">
      <!-- Items Column (Green) -->
      <div class="card-column" data-category="items">
        <h3 class="category-header items-header">
          <span class="category-icon">🎁</span>
          Items
        </h3>
        <div class="card-slot" data-position="1" data-category="items">
          <input 
            type="text" 
            class="card-input" 
            placeholder="What item is important?"
            data-card-id="items-1"
          />
        </div>
        <div class="card-slot" data-position="2" data-category="items">
          <input type="text" class="card-input" placeholder="Another item?" data-card-id="items-2" />
        </div>
        <div class="card-slot" data-position="3" data-category="items">
          <input type="text" class="card-input" placeholder="Another item?" data-card-id="items-3" />
        </div>
        <div class="card-slot" data-position="4" data-category="items">
          <input type="text" class="card-input" placeholder="Another item?" data-card-id="items-4" />
        </div>
        <div class="card-slot" data-position="5" data-category="items">
          <input type="text" class="card-input" placeholder="Another item?" data-card-id="items-5" />
        </div>
      </div>
      
      <!-- Person Column (Pink) -->
      <div class="card-column" data-category="person">
        <h3 class="category-header person-header">
          <span class="category-icon">👤</span>
          Person
        </h3>
        <div class="card-slot" data-position="6" data-category="person">
          <input type="text" class="card-input" placeholder="Who is important?" data-card-id="person-1" />
        </div>
        <div class="card-slot" data-position="7" data-category="person">
          <input type="text" class="card-input" placeholder="Another person?" data-card-id="person-2" />
        </div>
        <div class="card-slot" data-position="8" data-category="person">
          <input type="text" class="card-input" placeholder="Another person?" data-card-id="person-3" />
        </div>
        <div class="card-slot" data-position="9" data-category="person">
          <input type="text" class="card-input" placeholder="Another person?" data-card-id="person-4" />
        </div>
        <div class="card-slot" data-position="10" data-category="person">
          <input type="text" class="card-input" placeholder="Another person?" data-card-id="person-5" />
        </div>
      </div>
      
      <!-- Places Column (Blue) -->
      <div class="card-column" data-category="places">
        <h3 class="category-header places-header">
          <span class="category-icon">📍</span>
          Places
        </h3>
        <!-- 5 card slots for places (positions 11-15) -->
      </div>
      
      <!-- Events Column (Yellow) -->
      <div class="card-column" data-category="events">
        <h3 class="category-header events-header">
          <span class="category-icon">⭐</span>
          Events
        </h3>
        <!-- 5 card slots for events (positions 16-20) -->
      </div>
      
      <!-- Goals Column (Purple) -->
      <div class="card-column" data-category="goals">
        <h3 class="category-header goals-header">
          <span class="category-icon">🎯</span>
          Goals
        </h3>
        <!-- 5 card slots for goals (positions 21-25) -->
      </div>
    </div>
    
    <!-- Validation Feedback -->
    <div class="validation-panel">
      <div class="validation-item">
        <span class="validation-label">Total Cards:</span>
        <span class="validation-value" id="total-cards-count">0 / 25</span>
        <span class="validation-status" id="total-cards-status">⚠️ Need at least 5</span>
      </div>
      <div class="validation-item">
        <span class="validation-label">Items:</span>
        <span class="validation-value" id="items-count">0</span>
        <span class="validation-status" id="items-status">⚠️</span>
      </div>
      <div class="validation-item">
        <span class="validation-label">Person:</span>
        <span class="validation-value" id="person-count">0</span>
        <span class="validation-status" id="person-status">⚠️</span>
      </div>
      <div class="validation-item">
        <span class="validation-label">Places:</span>
        <span class="validation-value" id="places-count">0</span>
        <span class="validation-status" id="places-status">⚠️</span>
      </div>
      <div class="validation-item">
        <span class="validation-label">Events:</span>
        <span class="validation-value" id="events-count">0</span>
        <span class="validation-status" id="events-status">⚠️</span>
      </div>
      <div class="validation-item">
        <span class="validation-label">Goals:</span>
        <span class="validation-value" id="goals-count">0</span>
        <span class="validation-status" id="goals-status">⚠️</span>
      </div>
    </div>
    
    <button 
      class="btn-primary" 
      id="stage1-next" 
      onclick="completeStage1()" 
      disabled
    >
      Proceed to Stage 2
    </button>
    
  </div>
</section>
```

---

### CSS for Stage 1

Add to `css/game.css`:

```css
/* Stage Wrapper */
.stage-wrapper {
  max-width: 1200px;
}

/* Stage Header */
.stage-header {
  background: rgba(99, 102, 241, 0.1);
  padding: 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  border-left: 4px solid var(--color-primary);
}

.stage-mission,
.stage-goal {
  margin: 0.75rem 0;
  font-size: 1.05rem;
}

.stage-time {
  font-size: 0.95rem;
  color: #c7d2fe;
  margin-top: 1rem;
}

/* Guide Box */
.guide-box {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.guide-box h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.guide-box ul {
  list-style-position: inside;
  padding-left: 1rem;
}

.guide-box li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.guide-note {
  margin-top: 1rem;
  font-style: italic;
  color: #a5b4fc;
}

/* Card Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin: 2rem 0;
}

.card-column {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Category Headers */
.category-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
}

.category-icon {
  font-size: 1.5rem;
}

.items-header {
  background: var(--color-items);
  color: white;
}

.person-header {
  background: var(--color-person);
  color: white;
}

.places-header {
  background: var(--color-places);
  color: white;
}

.events-header {
  background: var(--color-events);
  color: #1F2937;
}

.goals-header {
  background: var(--color-goals);
  color: white;
}

/* Card Slots */
.card-slot {
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-height: 80px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.card-slot:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
}

.card-slot.filled {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--color-success);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
}

/* Category-specific borders */
.card-column[data-category="items"] .card-slot.filled {
  border-color: var(--color-items);
}

.card-column[data-category="person"] .card-slot.filled {
  border-color: var(--color-person);
}

.card-column[data-category="places"] .card-slot.filled {
  border-color: var(--color-places);
}

.card-column[data-category="events"] .card-slot.filled {
  border-color: var(--color-events);
}

.card-column[data-category="goals"] .card-slot.filled {
  border-color: var(--color-goals);
}

/* Card Inputs */
.card-input {
  width: 100%;
  background: transparent;
  border: none;
  color: var(--color-text-light);
  font-family: 'Lora', serif;
  font-size: 0.95rem;
  padding: 0.5rem;
  outline: none;
}

.card-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
  font-style: italic;
}

/* Validation Panel */
.validation-panel {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.validation-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.validation-label {
  font-size: 0.9rem;
  color: #c7d2fe;
}

.validation-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-text-light);
}

.validation-status {
  font-size: 0.85rem;
}

.validation-status.valid {
  color: var(--color-success);
}

.validation-status.invalid {
  color: #ef4444;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### JavaScript for Stage 1

Add to `js/stage1.js`:

```javascript
// stage1.js

// Store stage 1 data
let stage1Data = {
  startTime: null,
  endTime: null,
  cards: [] // Array of {id, category, position, text}
};

// Initialize Stage 1
function initializeStage1() {
  stage1Data.startTime = new Date().toISOString();
  
  // Add input listeners to all card inputs
  const cardInputs = document.querySelectorAll('.card-input');
  cardInputs.forEach(input => {
    input.addEventListener('input', handleCardInput);
  });
  
  // Initial validation
  validateStage1();
}

// Handle card input changes
function handleCardInput(e) {
  const input = e.target;
  const cardSlot = input.closest('.card-slot');
  const value = input.value.trim();
  
  // Update visual state
  if (value !== '') {
    cardSlot.classList.add('filled');
  } else {
    cardSlot.classList.remove('filled');
  }
  
  // Validate
  validateStage1();
}

// Validate Stage 1 requirements
function validateStage1() {
  const cardInputs = document.querySelectorAll('.card-input');
  const categories = {
    items: 0,
    person: 0,
    places: 0,
    events: 0,
    goals: 0
  };
  let totalCards = 0;
  
  // Count filled cards by category
  cardInputs.forEach(input => {
    if (input.value.trim() !== '') {
      const category = input.closest('.card-column').dataset.category;
      categories[category]++;
      totalCards++;
    }
  });
  
  // Update counts in UI
  document.getElementById('total-cards-count').textContent = `${totalCards} / 25`;
  document.getElementById('items-count').textContent = categories.items;
  document.getElementById('person-count').textContent = categories.person;
  document.getElementById('places-count').textContent = categories.places;
  document.getElementById('events-count').textContent = categories.events;
  document.getElementById('goals-count').textContent = categories.goals;
  
  // Validate requirements
  const totalValid = totalCards >= 5 && totalCards <= 25;
  const itemsValid = categories.items >= 1;
  const personValid = categories.person >= 1;
  const placesValid = categories.places >= 1;
  const eventsValid = categories.events >= 1;
  const goalsValid = categories.goals >= 1;
  
  // Update status indicators
  updateValidationStatus('total-cards-status', totalValid, 
    totalValid ? '✓ Valid' : '⚠️ Need 5-25 cards');
  updateValidationStatus('items-status', itemsValid, 
    itemsValid ? '✓' : '⚠️ Need at least 1');
  updateValidationStatus('person-status', personValid, 
    personValid ? '✓' : '⚠️ Need at least 1');
  updateValidationStatus('places-status', placesValid, 
    placesValid ? '✓' : '⚠️ Need at least 1');
  updateValidationStatus('events-status', eventsValid, 
    eventsValid ? '✓' : '⚠️ Need at least 1');
  updateValidationStatus('goals-status', goalsValid, 
    goalsValid ? '✓' : '⚠️ Need at least 1');
  
  // Enable/disable next button
  const allValid = totalValid && itemsValid && personValid && 
                   placesValid && eventsValid && goalsValid;
  document.getElementById('stage1-next').disabled = !allValid;
  
  return allValid;
}

// Update validation status element
function updateValidationStatus(elementId, isValid, text) {
  const element = document.getElementById(elementId);
  element.textContent = text;
  element.className = 'validation-status ' + (isValid ? 'valid' : 'invalid');
}

// Complete Stage 1 and move to Stage 2
function completeStage1() {
  if (!validateStage1()) {
    showNotification('Please complete all requirements before proceeding', 'error');
    return;
  }
  
  // Collect all card data
  const cardInputs = document.querySelectorAll('.card-input');
  stage1Data.cards = [];
  
  cardInputs.forEach(input => {
    const cardSlot = input.closest('.card-slot');
    const category = cardSlot.dataset.category;
    const position = parseInt(cardSlot.dataset.position);
    const text = input.value.trim();
    
    stage1Data.cards.push({
      id: input.dataset.cardId,
      category: category,
      position: position,
      text: text
    });
  });
  
  stage1Data.endTime = new Date().toISOString();
  
  // Store in global surveyData
  surveyData.gamePlay.stage1 = stage1Data;
  
  // Navigate to Stage 2
  navigateTo('stage2');
  
  // Initialize Stage 2 with cards from Stage 1
  initializeStage2();
}

// Initialize on section display
document.addEventListener('DOMContentLoaded', () => {
  // Initialize when stage1 becomes active
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.target.id === 'stage1' && mutation.target.classList.contains('active')) {
        initializeStage1();
      }
    });
  });
  
  const stage1 = document.getElementById('stage1');
  if (stage1) {
    observer.observe(stage1, { attributes: true, attributeFilter: ['class'] });
  }
});
```

---

## 🎮 Stage 2: Writing Stories

### Overview
Students select cards from Stage 1 and write stories about why they're important.

### Requirements
- Display all filled cards from Stage 1
- Allow selection of 1-25 cards
- Text area for story input for each selected card
- Minimum 1 story required

---

### HTML Structure (abbreviated - full structure similar to Stage 1)

```html
<section id="stage2" class="screen">
  <div class="content-wrapper stage-wrapper">
    <div class="stage-header">
      <h2>Stage 2: Writing Stories</h2>
      <p class="stage-mission">
        <strong>Mission:</strong> Share the stories behind your cards.
      </p>
      <p class="stage-goal">
        <strong>Goal:</strong> Explain the story of the cards you've placed on your board.
      </p>
    </div>
    
    <div class="instruction-box">
      <p>
        Select at least one card and write a story about why it's important to you. 
        Write as if you're telling someone about it.
      </p>
      <p class="example-text">
        <strong>Example:</strong> "This place is my family's living room. It's where we 
        always gathered, and we've had many experiences here. So..."
      </p>
    </div>
    
    <!-- Card Selection Area -->
    <div class="card-selection">
      <h3>Your Cards (click to select):</h3>
      <div id="stage2-cards" class="card-list">
        <!-- Cards populated by JavaScript -->
      </div>
    </div>
    
    <!-- Story Input Area -->
    <div id="story-input-area" class="story-input-area">
      <!-- Story text areas populated by JavaScript when cards selected -->
    </div>
    
    <div class="validation-feedback">
      <p>Stories written: <span id="story-count">0</span> (minimum: 1)</p>
    </div>
    
    <button class="btn-primary" id="stage2-next" onclick="completeStage2()" disabled>
      Proceed to Stage 3
    </button>
  </div>
</section>
```

---

### JavaScript for Stage 2

```javascript
// stage2.js

let stage2Data = {
  startTime: null,
  endTime: null,
  selectedCards: [], // Array of {cardId, cardText, category, story}
};

function initializeStage2() {
  stage2Data.startTime = new Date().toISOString();
  
  // Get cards from Stage 1
  const cards = surveyData.gamePlay.stage1.cards.filter(card => card.text !== '');
  
  // Display cards for selection
  const cardListEl = document.getElementById('stage2-cards');
  cardListEl.innerHTML = '';
  
  cards.forEach(card => {
    const cardEl = document.createElement('div');
    cardEl.className = 'selectable-card';
    cardEl.dataset.cardId = card.id;
    cardEl.dataset.category = card.category;
    cardEl.innerHTML = `
      <div class="card-category ${card.category}">${card.category}</div>
      <div class="card-text">${card.text}</div>
    `;
    
    cardEl.addEventListener('click', () => toggleCardSelection(cardEl, card));
    cardListEl.appendChild(cardEl);
  });
}

function toggleCardSelection(cardEl, card) {
  cardEl.classList.toggle('selected');
  
  if (cardEl.classList.contains('selected')) {
    // Add story input
    addStoryInput(card);
  } else {
    // Remove story input
    removeStoryInput(card.id);
  }
  
  validateStage2();
}

function addStoryInput(card) {
  const storyArea = document.getElementById('story-input-area');
  
  const storyBox = document.createElement('div');
  storyBox.className = 'story-box';
  storyBox.id = `story-${card.id}`;
  storyBox.innerHTML = `
    <h4>Story for: "${card.text}" (${card.category})</h4>
    <textarea 
      class="story-textarea" 
      data-card-id="${card.id}"
      placeholder="Write your story here..."
      rows="6"
    ></textarea>
  `;
  
  storyArea.appendChild(storyBox);
  
  // Add listener
  const textarea = storyBox.querySelector('textarea');
  textarea.addEventListener('input', validateStage2);
}

function removeStoryInput(cardId) {
  const storyBox = document.getElementById(`story-${cardId}`);
  if (storyBox) {
    storyBox.remove();
  }
}

function validateStage2() {
  const textareas = document.querySelectorAll('.story-textarea');
  let storiesWritten = 0;
  
  textareas.forEach(textarea => {
    if (textarea.value.trim() !== '') {
      storiesWritten++;
    }
  });
  
  document.getElementById('story-count').textContent = storiesWritten;
  
  const valid = storiesWritten >= 1;
  document.getElementById('stage2-next').disabled = !valid;
  
  return valid;
}

function completeStage2() {
  if (!validateStage2()) {
    showNotification('Please write at least one story', 'error');
    return;
  }
  
  // Collect story data
  const textareas = document.querySelectorAll('.story-textarea');
  stage2Data.selectedCards = [];
  
  textareas.forEach(textarea => {
    const story = textarea.value.trim();
    if (story !== '') {
      const cardId = textarea.dataset.cardId;
      const card = surveyData.gamePlay.stage1.cards.find(c => c.id === cardId);
      
      stage2Data.selectedCards.push({
        cardId: cardId,
        cardText: card.text,
        category: card.category,
        story: story
      });
    }
  });
  
  stage2Data.endTime = new Date().toISOString();
  surveyData.gamePlay.stage2 = stage2Data;
  
  // Navigate to Stage 3
  navigateTo('stage3');
  initializeStage3();
}
```

---

## 🎲 Stage 3: Rolling Dice of Destiny

### Overview
The dice game where students lose cards based on dice rolls.

### Requirements
- Difficulty selection (EASY/HARD)
- 2D dice animation
- Minimum 4 rolls
- Card selection to lose
- Track remaining/lost cards
- Option to continue or finish after 4 rolls

---

### HTML Structure (abbreviated)

```html
<section id="stage3" class="screen">
  <div class="content-wrapper stage-wrapper wide">
    
    <!-- Difficulty Selection (shown first) -->
    <div id="difficulty-selection" class="difficulty-selection">
      <h2>Stage 3: Rolling Dice of Destiny</h2>
      <p>Before you begin, select your difficulty:</p>
      
      <div class="difficulty-options">
        <div class="difficulty-card" onclick="selectDifficulty('EASY')">
          <h3>EASY MODE</h3>
          <p>Lose 1-6 cards per roll</p>
          <button class="btn-secondary">Select Easy</button>
        </div>
        
        <div class="difficulty-card" onclick="selectDifficulty('HARD')">
          <h3>HARD MODE</h3>
          <p>Lose 3-8 cards per roll</p>
          <button class="btn-secondary">Select Hard</button>
        </div>
      </div>
    </div>
    
    <!-- Game Interface (hidden initially) -->
    <div id="game-interface" class="game-interface" style="display: none;">
      <div class="game-header">
        <h2>Stage 3: Rolling Dice of Destiny (<span id="difficulty-display"></span> MODE)</h2>
        <p>Roll #<span id="roll-number">1</span> (Minimum 4 rolls required)</p>
      </div>
      
      <div class="game-layout">
        <!-- Left: Remaining Cards -->
        <div class="remaining-cards">
          <h3>Remaining Cards (<span id="remaining-count">0</span>)</h3>
          <div id="remaining-cards-list" class="cards-list">
            <!-- Cards populated by JavaScript -->
          </div>
        </div>
        
        <!-- Center: Dice -->
        <div class="dice-area">
          <div id="dice" class="dice">
            <div class="dice-face">?</div>
          </div>
          <button id="roll-button" class="btn-primary" onclick="rollDice()">
            Roll Dice
          </button>
          <div id="dice-result" class="dice-result"></div>
          <div id="selection-prompt" class="selection-prompt" style="display: none;">
            Select <span id="cards-to-lose">0</span> cards to lose
            <br>
            <button id="confirm-selection" class="btn-secondary" onclick="confirmSelection()" disabled>
              Confirm Selection
            </button>
          </div>
          <div id="continue-or-finish" class="continue-or-finish" style="display: none;">
            <button class="btn-primary" onclick="continueRolling()">Continue Rolling</button>
            <button class="btn-secondary" onclick="finishGame()">Finish Game</button>
          </div>
        </div>
        
        <!-- Right: Lost Cards -->
        <div class="lost-cards">
          <h3>Lost Cards (<span id="lost-count">0</span>)</h3>
          <div id="lost-cards-list" class="cards-list">
            <!-- Lost cards appear here -->
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
```

---

### CSS for Stage 3 (key sections)

```css
/* Dice */
.dice {
  width: 120px;
  height: 120px;
  background: white;
  border: 3px solid #333;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  font-size: 4rem;
  font-weight: bold;
  color: #333;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.1s ease;
}

.dice.rolling {
  animation: diceRoll 1s ease-out;
}

@keyframes diceRoll {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(90deg) scale(1.1); }
  50% { transform: rotate(180deg) scale(1.2); }
  75% { transform: rotate(270deg) scale(1.1); }
}

/* Game Cards */
.game-card {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.game-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.game-card.selected {
  border-color: var(--color-primary);
  background: rgba(99, 102, 241, 0.2);
}

.game-card.lost {
  opacity: 0.6;
  cursor: not-allowed;
}
```

---

### JavaScript for Stage 3

```javascript
// stage3.js

let stage3Data = {
  startTime: null,
  endTime: null,
  mode: null, // 'EASY' or 'HARD'
  rolls: [], // Array of {rollNumber, diceResult, cardsLost}
  remainingCards: [],
  lostCards: []
};

function selectDifficulty(mode) {
  stage3Data.mode = mode;
  stage3Data.startTime = new Date().toISOString();
  
  // Hide difficulty selection
  document.getElementById('difficulty-selection').style.display = 'none';
  
  // Show game interface
  document.getElementById('game-interface').style.display = 'block';
  document.getElementById('difficulty-display').textContent = mode;
  
  // Initialize cards
  initializeStage3Cards();
}

function initializeStage3Cards() {
  // Get all filled cards from Stage 1
  const allCards = surveyData.gamePlay.stage1.cards.filter(c => c.text !== '');
  stage3Data.remainingCards = [...allCards];
  stage3Data.lostCards = [];
  
  displayCards();
}

function displayCards() {
  // Display remaining cards
  const remainingList = document.getElementById('remaining-cards-list');
  remainingList.innerHTML = '';
  
  stage3Data.remainingCards.forEach(card => {
    const cardEl = createGameCard(card, 'remaining');
    remainingList.appendChild(cardEl);
  });
  
  document.getElementById('remaining-count').textContent = stage3Data.remainingCards.length;
  
  // Display lost cards
  const lostList = document.getElementById('lost-cards-list');
  lostList.innerHTML = '';
  
  stage3Data.lostCards.forEach(card => {
    const cardEl = createGameCard(card, 'lost');
    lostList.appendChild(cardEl);
  });
  
  document.getElementById('lost-count').textContent = stage3Data.lostCards.length;
}

function createGameCard(card, type) {
  const cardEl = document.createElement('div');
  cardEl.className = `game-card ${type}`;
  cardEl.dataset.cardId = card.id;
  cardEl.innerHTML = `
    <div class="card-category ${card.category}">${card.category}</div>
    <div class="card-text">${card.text}</div>
  `;
  
  if (type === 'remaining') {
    cardEl.addEventListener('click', () => toggleCardForLoss(cardEl));
  }
  
  return cardEl;
}

function rollDice() {
  // Disable roll button
  document.getElementById('roll-button').disabled = true;
  
  // Animate dice
  const dice = document.getElementById('dice');
  dice.classList.add('rolling');
  
  // Random result after animation
  setTimeout(() => {
    const result = Math.floor(Math.random() * 6) + 1;
    dice.querySelector('.dice-face').textContent = result;
    dice.classList.remove('rolling');
    
    processRollResult(result);
  }, 1000);
}

function processRollResult(diceResult) {
  const mode = stage3Data.mode;
  const cardsToLose = mode === 'EASY' ? diceResult : diceResult + 2;
  const remainingCount = stage3Data.remainingCards.length;
  
  const actualCardsToLose = Math.min(cardsToLose, remainingCount);
  
  // Show result
  document.getElementById('dice-result').textContent = 
    `You rolled ${diceResult}. You must lose ${actualCardsToLose} card(s).`;
  
  // Show selection prompt
  document.getElementById('cards-to-lose').textContent = actualCardsToLose;
  document.getElementById('selection-prompt').style.display = 'block';
  
  // Store for confirmation
  stage3Data.currentRoll = {
    rollNumber: stage3Data.rolls.length + 1,
    diceResult: diceResult,
    cardsToLose: actualCardsToLose
  };
}

function toggleCardForLoss(cardEl) {
  cardEl.classList.toggle('selected');
  validateSelection();
}

function validateSelection() {
  const selected = document.querySelectorAll('.game-card.selected');
  const required = stage3Data.currentRoll.cardsToLose;
  
  document.getElementById('confirm-selection').disabled = selected.length !== required;
}

function confirmSelection() {
  const selectedCards = document.querySelectorAll('.game-card.selected');
  const lostCardIds = Array.from(selectedCards).map(el => el.dataset.cardId);
  
  // Move cards from remaining to lost
  lostCardIds.forEach(cardId => {
    const cardIndex = stage3Data.remainingCards.findIndex(c => c.id === cardId);
    if (cardIndex !== -1) {
      const card = stage3Data.remainingCards.splice(cardIndex, 1)[0];
      stage3Data.lostCards.push(card);
    }
  });
  
  // Store roll data
  stage3Data.currentRoll.cardsLost = lostCardIds;
  stage3Data.rolls.push(stage3Data.currentRoll);
  
  // Update display
  displayCards();
  
  // Hide selection prompt
  document.getElementById('selection-prompt').style.display = 'none';
  
  // Check if game should continue
  const rollCount = stage3Data.rolls.length;
  
  if (stage3Data.remainingCards.length === 0) {
    // All cards lost - end game
    finishGame();
  } else if (rollCount >= 4) {
    // Show continue or finish options
    document.getElementById('continue-or-finish').style.display = 'block';
  } else {
    // Continue rolling (required 4 rolls minimum)
    document.getElementById('roll-button').disabled = false;
    document.getElementById('roll-number').textContent = rollCount + 1;
  }
}

function continueRolling() {
  document.getElementById('continue-or-finish').style.display = 'none';
  document.getElementById('roll-button').disabled = false;
  document.getElementById('roll-number').textContent = stage3Data.rolls.length + 1;
}

function finishGame() {
  stage3Data.endTime = new Date().toISOString();
  surveyData.gamePlay.stage3 = stage3Data;
  
  // Navigate to ending story
  navigateTo('ending-story');
}
```

---

## ✅ Phase 3 Completion Checklist

- [ ] Stage 1: 5×5 card grid displays correctly
- [ ] Stage 1: All 5 categories present with color coding
- [ ] Stage 1: Real-time validation shows counts
- [ ] Stage 1: Minimum 5 cards, at least 1 per category enforced
- [ ] Stage 1: Data collected and stored correctly
- [ ] Stage 2: Cards from Stage 1 display correctly
- [ ] Stage 2: Card selection works
- [ ] Stage 2: Story textareas appear for selected cards
- [ ] Stage 2: Minimum 1 story validation works
- [ ] Stage 2: Data collected correctly
- [ ] Stage 3: Difficulty selection works
- [ ] Stage 3: Dice animation plays smoothly
- [ ] Stage 3: EASY mode loses 1-6 cards correctly
- [ ] Stage 3: HARD mode loses 3-8 cards correctly
- [ ] Stage 3: Minimum 4 rolls enforced
- [ ] Stage 3: Card selection to lose works
- [ ] Stage 3: Cards move from remaining to lost
- [ ] Stage 3: Continue/finish options appear after 4 rolls
- [ ] Stage 3: Data collected correctly
- [ ] All stages transition smoothly
- [ ] Responsive design works on all devices
- [ ] No console errors

---

## 🧪 Testing Instructions

1. Complete Stage 1 with various card counts
2. Test validation (too few cards, missing categories)
3. Complete Stage 2 with different card selections
4. Test both EASY and HARD modes in Stage 3
5. Verify dice animation and roll mechanics
6. Check data collection in console: `surveyData.gamePlay`

---

## 🚀 Ready for Phase 4

After Phase 3 complete:
- All game stages functional
- Data collection complete
- Move to **Phase 4: Data Integration & Polish**

---

**Use this prompt to implement Phase 3 game stages!**
