// BentoBot Web Application Logic

// ==========================================
// 1. Theme and Ingredient Definitions & Presets
// ==========================================

const PRESET_INGREDIENTS = [
    { id: 'rice', label: '🍙 Rice' },
    { id: 'sausage', label: '🥖 Sausage' },
    { id: 'broccoli', label: '🥦 Broccoli' },
    { id: 'carrot', label: '🥕 Carrot' },
    { id: 'lettuce', label: '🥬 Lettuce' },
    { id: 'egg', label: '🥚 Egg' },
    { id: 'cheese', label: '🧀 Cheese' },
    { id: 'tomato', label: '🍅 Tomato' },
    { id: 'salmon', label: '🐟 Salmon' },
    { id: 'chicken', label: '🍗 Chicken' },
    { id: 'nori', label: '🌿 Seaweed (Nori)' }
];

const PRESET_THEMES = [
    { id: 'bear', name: 'Sleeping Bear', emoji: '🐻', description: 'A cozy sleeping rice bear under a fluffy egg blanket.' },
    { id: 'octopus', name: 'Octopus Garden', emoji: '🐙', description: 'Cute sausage octopuses swimming in leafy greens.' },
    { id: 'cat', name: 'Cat-itude Box', emoji: '🐱', description: 'Adorable kitten rice balls peeking from egg roll boxes.' },
    { id: 'pikachu', name: 'Pikachu Playground', emoji: '⚡', description: 'A bright yellow character bento using turmeric rice.' },
    { id: 'forest', name: 'Forest Friends', emoji: '🌲', description: 'Quail egg mushrooms and tomato ladybugs in broccoli woods.' }
];

const DEMO_PRESETS = {
    'bear': {
        bento_name: "Bearly Awake Bento",
        theme_description: "A sleepy little bear made of brown-seasoned rice curled up under a fluffy tamagoyaki egg blanket.",
        nutritional_tags: ["350 kcal", "🍳 High Protein", "🍙 High Carbs", "🥦 Veggie Balanced"],
        cute_factor_rating: 5,
        identified_ingredients: ["Rice", "Egg", "Seaweed (Nori)", "Sausage", "Broccoli", "Tomato"],
        assembly_steps: [
            { step_number: 1, instruction: "Shape warm rice into a round ball for the head and an oval for the body. Color the rice light brown using a dash of soy sauce or bonito flakes.", kawaii_tip: "Dampen your hands or use plastic wrap to keep the rice from sticking to your fingers!" },
            { step_number: 2, instruction: "Create two tiny spheres for ears and position them on the head. Cut out circles of white cheese and press them onto the ears and snout.", kawaii_tip: "Use a small plastic straw to punch out perfectly round cheese circles!" },
            { step_number: 3, instruction: "Using a puncher or clean scissors, cut nori seaweed into eyes, a nose, and a sleepy smiling mouth. Press them onto the snout.", kawaii_tip: "Apply the seaweed pieces with a toothpick dabbed in a tiny bit of water." },
            { step_number: 4, instruction: "Cook a thin, flat yellow egg omelette. Fold it over the bear's body like a cozy, warm blanket.", kawaii_tip: "Tuck some broccoli florets under the blanket to prop it up." },
            { step_number: 5, instruction: "Boil a mini-sausage scored at one end into octopus tentacles. Place it next to the bear as its bedtime toy.", kawaii_tip: "Pan-fry the sausage for a golden look before boiling to curl the tentacles." },
            { step_number: 6, instruction: "Arrange cherry tomatoes and broccoli florets around the empty gaps to pack the box tightly so the bear doesn't move during travel.", kawaii_tip: "Bentos should be packed snuggly to prevent your food art from shifting!" }
        ],
        doodle_image_prompt: "kawaii cartoon outline drawing of a Japanese bento box with a sleeping bear made of brown rice under a yellow egg blanket, with octopus sausages, broccoli, and cherry tomatoes, blueprint paper texture, vector art, schematic layout, blue grid background"
    },
    'octopus': {
        bento_name: "Undersea Octopus Garden",
        theme_description: "A cheerful ocean-themed bento box featuring sausage octopuses swimming in a sea of green lettuce with star-shaped carrots.",
        nutritional_tags: ["380 kcal", "🥓 High Protein", "🥕 Vitamin A Rich", "🥬 Low Carb Option"],
        cute_factor_rating: 5,
        identified_ingredients: ["Sausage", "Lettuce", "Carrot", "Egg", "Rice", "Seaweed (Nori)"],
        assembly_steps: [
            { step_number: 1, instruction: "Cut mini-sausages in half. Make 4 vertical cuts along the bottom half of each piece to create 8 small legs.", kawaii_tip: "Ensure your knife is sharp for clean leg cuts!" },
            { step_number: 2, instruction: "Boil or pan-fry the sausages for 2 minutes. The heat will cause the 'tentacles' to curl outwards like cute octopuses!", kawaii_tip: "Adding a drop of oil to the pan helps curl the tentacles extra wide." },
            { step_number: 3, instruction: "Use a small puncher to make tiny nori circles for eyes. Stick them onto the sausage heads using a tiny dab of mayonnaise.", kawaii_tip: "A tiny poke of ketchup makes perfect rosy blushing cheeks!" },
            { step_number: 4, instruction: "Lay down a thick bed of curly green lettuce at the bottom of the box to represent the ocean weeds.", kawaii_tip: "Lettuce acts as a great separator to keep different foods from touching." },
            { step_number: 5, instruction: "Boil thin carrot slices. Use a cookie cutter to punch out carrot stars and tuck them under the octopuses like starfish.", kawaii_tip: "Save the carrot scraps to chop up and mix into the rice!" },
            { step_number: 6, instruction: "Shape small rice balls, wrap them with a strip of nori, and place them as sandy mounds on the ocean floor.", kawaii_tip: "Sprinkle sesame seeds on the rice for texture." }
        ],
        doodle_image_prompt: "kawaii cartoon outline drawing of a Japanese bento box with sausage octopuses with eyes and blush cheeks, star carrots, lettuce bed, sandy rice balls, blueprint paper texture, vector art, schematic layout, blue grid background"
    },
    'cat': {
        bento_name: "Neko-chan's Playground",
        theme_description: "Two playful kitten rice balls peeking out from behind delicious egg rolls and crisp vegetables.",
        nutritional_tags: ["320 kcal", "🐱 Cute Overload", "🧀 Calcium Rich", "🍙 Energy Booster"],
        cute_factor_rating: 5,
        identified_ingredients: ["Rice", "Cheese", "Seaweed (Nori)", "Egg", "Tomato", "Lettuce"],
        assembly_steps: [
            { step_number: 1, instruction: "Roll two small balls of sushi rice. Wrap a thick band of nori around the middle of one to make a tuxedo cat.", kawaii_tip: "Dabbing rice vinegar on your hands keeps the rice sweet and sanitary!" },
            { step_number: 2, instruction: "Cut small triangles out of sliced cheese or ham for ears. Insert them into the top of the rice balls.", kawaii_tip: "Use tiny pieces of raw spaghetti sticks to pin the ears securely into the rice!" },
            { step_number: 3, instruction: "Punch out nori whiskers, eyes, and a cute little mouth. Position them carefully on the kittens' faces.", kawaii_tip: "Use a toothpick with a touch of honey or mayo as an adhesive." },
            { step_number: 4, instruction: "Roll a slice of ham and cheese together, then slice it to create small rosebuds. Place them in empty spaces.", kawaii_tip: "These look like pretty flowers and add a wonderful savory flavor." },
            { step_number: 5, instruction: "Position sliced tamagoyaki (Japanese rolled omelette) as little steps for the kittens to play on.", kawaii_tip: "Slice the egg roll on a diagonal and flip one side to form a heart shape!" },
            { step_number: 6, instruction: "Fill the outer borders with crisp lettuce and bright red cherry tomatoes.", kawaii_tip: "Colorful contrasts make the bento look visually balanced and appetizing." }
        ],
        doodle_image_prompt: "kawaii cartoon outline drawing of a Japanese bento box with cat-shaped rice balls, diagonal tamagoyaki slices, rolled ham flowers, cherry tomatoes, blueprint paper texture, vector art, schematic layout, blue grid background"
    },
    'pikachu': {
        bento_name: "Volt-Tastic Pikachu Bento",
        theme_description: "A bright yellow Pikachu face made of turmeric rice, featuring rosy tomato cheeks and cheese details.",
        nutritional_tags: ["400 kcal", "⚡ Sparky Energy", "🥕 Antioxidant Rich", "🌾 High Carbs"],
        cute_factor_rating: 5,
        identified_ingredients: ["Rice", "Carrot", "Seaweed (Nori)", "Tomato", "Cheese", "Egg"],
        assembly_steps: [
            { step_number: 1, instruction: "Color hot rice yellow by mixing in a pinch of turmeric, saffron, or finely mashed cooked egg yolk.", kawaii_tip: "Masheg egg yolk adds a rich flavor and beautiful natural yellow color!" },
            { step_number: 2, instruction: "Mold the yellow rice into Pikachu's head with two long ears. Use plastic wrap to pack it tightly.", kawaii_tip: "Leave a little space at the top of the box for the long ears!" },
            { step_number: 3, instruction: "Wrap the tips of Pikachu's ears with nori sheets, sticking them on while the rice is still warm.", kawaii_tip: "The steam from warm rice will make the nori stick instantly without glue." },
            { step_number: 4, instruction: "Cut two red cheeks from the skin of a cherry tomato. Place them on the sides of the face.", kawaii_tip: "A small paring knife or scissors is ideal to skin the tomatoes cleanly." },
            { step_number: 5, instruction: "Use nori circles for Pikachu's eyes, and place a tiny dot of white cheese in the center of the eyes for highlights.", kawaii_tip: "Cheese highlights bring character eyes to life!" },
            { step_number: 6, instruction: "Nestle Pikachu in a bed of steamed broccoli and add star-shaped carrot carrots to complete the playground theme.", kawaii_tip: "Steaming carrots makes them tender and easy to punch shapes out of." }
        ],
        doodle_image_prompt: "kawaii cartoon outline drawing of a Japanese bento box with Pikachu yellow rice head, red tomato cheeks, cheese eyes, star carrots, broccoli, blueprint paper texture, vector art, schematic layout, blue grid background"
    },
    'forest': {
        bento_name: "Mushroom Meadow Bento",
        theme_description: "Quail egg mushrooms and cherry tomato ladybugs sitting in a lush green forest of broccoli and peas.",
        nutritional_tags: ["290 kcal", "🍄 Low Calorie", "🥦 High Fiber", "🥚 Protein Packed"],
        cute_factor_rating: 5,
        identified_ingredients: ["Tomato", "Egg", "Broccoli", "Lettuce", "Cheese", "Seaweed (Nori)"],
        assembly_steps: [
            { step_number: 1, instruction: "Boil quail eggs or small chicken eggs and peel them. Slice off a tiny bit of the bottom so they stand upright.", kawaii_tip: "Salt the water before boiling to make peeling tiny quail eggs easier!" },
            { step_number: 2, instruction: "Cut cherry tomatoes in half and hollow them out slightly. Place them on top of the eggs to act as red mushroom caps.", kawaii_tip: "Ensure the cap matches the size of the egg base for a cute proportions!" },
            { step_number: 3, instruction: "Dab mayonnaise or white cheese dots onto the red tomato caps to resemble woodland toadstools.", kawaii_tip: "Use a toothpick to place precise, tiny white dots." },
            { step_number: 4, instruction: "Create ladybugs by slicing a cherry tomato in half, placing a tiny slice of nori as the head, and dotting the back with nori bits.", kawaii_tip: "A tiny smear of cream cheese helps stick the nori dots onto the tomato skin." },
            { step_number: 5, instruction: "Create a dense green canopy in the bento box by packing steamed broccoli florets close together.", kawaii_tip: "Use different sizes of broccoli to mimic realistic trees." },
            { step_number: 6, instruction: "Nestle your egg mushrooms and tomato ladybugs deep inside the broccoli forest. Add a few cheese stars to look like sunlight.", kawaii_tip: "Sprinkle sesame seeds as falling forest pollen." }
        ],
        doodle_image_prompt: "kawaii cartoon outline drawing of a Japanese bento box with quail egg mushrooms, cherry tomato ladybugs, green broccoli forest, cheese stars, blueprint paper texture, vector art, schematic layout, blue grid background"
    }
};

// ==========================================
// 2. Audio Controller (Retro Kawaii Synth)
// ==========================================

class AudioSynth {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggle() {
        this.enabled = !this.enabled;
        return this.enabled;
    }

    play(type) {
        if (!this.enabled) return;
        this.init();
        const now = this.ctx.currentTime;

        try {
            if (type === 'click') {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                
                osc.type = 'sine';
                osc.frequency.setValueAtTime(650, now);
                osc.frequency.exponentialRampToValueAtTime(150, now + 0.08);
                
                gain.gain.setValueAtTime(0.08, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
                
                osc.start(now);
                osc.stop(now + 0.08);
            } 
            else if (type === 'success') {
                const notes = [293.66, 349.23, 440.00, 587.33]; // D4, F4, A4, D5 (D minor arpeggio)
                notes.forEach((freq, i) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now + i * 0.07);
                    
                    gain.gain.setValueAtTime(0.06, now + i * 0.07);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.12);
                    
                    osc.start(now + i * 0.07);
                    osc.stop(now + i * 0.07 + 0.13);
                });
            } 
            else if (type === 'cooking') {
                // Synthesize a retro bubble cooking sequence
                const steps = 6;
                for (let i = 0; i < steps; i++) {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    
                    const start = now + i * 0.35 + Math.random() * 0.15;
                    const freq = 450 + Math.random() * 500;
                    
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, start);
                    osc.frequency.exponentialRampToValueAtTime(freq * 1.6, start + 0.12);
                    
                    gain.gain.setValueAtTime(0.03, start);
                    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.12);
                    
                    osc.start(start);
                    osc.stop(start + 0.13);
                }
            }
        } catch (e) {
            console.error("Synthesizer failed:", e);
        }
    }
}

const synth = new AudioSynth();

// ==========================================
// 3. UI State Management
// ==========================================

let state = {
    selectedIngredients: new Set(),
    customIngredients: [],
    selectedTheme: 'bear',
    imageUploaded: false,
    imageBase64: null,
    imageMimeType: null,
    isLiveMode: false,
    apiKey: '',
    generationInProgress: false
};

// ==========================================
// 4. DOM Elements
// ==========================================

const quickIngredientsContainer = document.getElementById('quick-ingredients');
const customIngredientsInput = document.getElementById('custom-ingredients');
const addCustomBtn = document.getElementById('add-custom-btn');
const customChipsContainer = document.getElementById('custom-chips-container');
const themeGrid = document.getElementById('theme-grid');
const generateBtn = document.getElementById('generate-btn');

const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const dropPreview = document.getElementById('drop-preview');
const previewImg = document.getElementById('preview-img');
const removePreviewBtn = document.getElementById('remove-preview');

const soundToggleBtn = document.getElementById('sound-toggle-btn');
const settingsToggleBtn = document.getElementById('settings-toggle-btn');
const settingsPanel = document.getElementById('settings-panel');
const settingsCloseBtn = document.getElementById('settings-close-btn');
const apiModeToggle = document.getElementById('api-mode-toggle');
const apiKeyContainer = document.getElementById('api-key-container');
const geminiApiKeyInput = document.getElementById('gemini-api-key');

const idleState = document.getElementById('idle-state');
const loadingState = document.getElementById('loading-state');
const resultState = document.getElementById('result-state');

const loadingProgress = document.getElementById('loading-progress');
const loadingTitle = document.getElementById('loading-title');
const loadingSubtitle = document.getElementById('loading-subtitle');

const bentoDoodle = document.getElementById('bento-doodle');
const doodleShimmer = document.getElementById('doodle-shimmer');
const regenerateDoodleBtn = document.getElementById('regenerate-doodle-btn');
const bentoTitle = document.getElementById('bento-title');
const bentoDesc = document.getElementById('bento-desc');
const bentoStars = document.getElementById('bento-stars');
const bentoStats = document.getElementById('bento-stats');
const usedIngredientsChips = document.getElementById('used-ingredients-chips');
const assemblyStepsList = document.getElementById('assembly-steps-list');

// ==========================================
// 5. Initializer & UI Generators
// ==========================================

function initApp() {
    // 1. Generate Quick Ingredients Drawer
    PRESET_INGREDIENTS.forEach(ing => {
        const chip = document.createElement('div');
        chip.className = 'chip';
        chip.dataset.id = ing.id;
        chip.innerHTML = ing.label;
        chip.addEventListener('click', () => {
            synth.play('click');
            if (state.selectedIngredients.has(ing.id)) {
                state.selectedIngredients.delete(ing.id);
                chip.classList.remove('selected');
            } else {
                state.selectedIngredients.add(ing.id);
                chip.classList.add('selected');
            }
        });
        quickIngredientsContainer.appendChild(chip);
    });

    // 2. Generate Theme Grid
    PRESET_THEMES.forEach((theme, index) => {
        const card = document.createElement('div');
        card.className = `theme-card ${index === 0 ? 'selected' : ''}`;
        card.dataset.id = theme.id;
        card.innerHTML = `
            <span class="theme-emoji">${theme.emoji}</span>
            <span class="theme-name">${theme.name}</span>
        `;
        card.addEventListener('click', () => {
            synth.play('click');
            document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            state.selectedTheme = theme.id;
        });
        themeGrid.appendChild(card);
    });

    // 3. Load settings from localStorage
    const savedApiKey = localStorage.getItem('bentobot_api_key');
    const savedApiMode = localStorage.getItem('bentobot_api_mode') === 'true';

    if (savedApiKey) {
        geminiApiKeyInput.value = savedApiKey;
        state.apiKey = savedApiKey;
    }
    apiModeToggle.checked = savedApiMode;
    state.isLiveMode = savedApiMode;
    toggleApiKeyInput(savedApiMode);

    // 4. Set listeners
    setupEventListeners();
}

function toggleApiKeyInput(enabled) {
    if (enabled) {
        apiKeyContainer.classList.remove('disabled');
        geminiApiKeyInput.removeAttribute('disabled');
    } else {
        apiKeyContainer.classList.add('disabled');
        geminiApiKeyInput.setAttribute('disabled', 'true');
    }
}

// ==========================================
// 6. Event Listeners
// ==========================================

function setupEventListeners() {
    // Add custom ingredient
    addCustomBtn.addEventListener('click', addCustomIngredient);
    customIngredientsInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addCustomIngredient();
    });

    // Settings listeners
    settingsToggleBtn.addEventListener('click', () => {
        synth.play('click');
        settingsPanel.classList.toggle('hidden');
    });
    settingsCloseBtn.addEventListener('click', () => {
        synth.play('click');
        settingsPanel.classList.add('hidden');
    });
    apiModeToggle.addEventListener('change', (e) => {
        synth.play('click');
        state.isLiveMode = e.target.checked;
        localStorage.setItem('bentobot_api_mode', state.isLiveMode);
        toggleApiKeyInput(state.isLiveMode);
    });
    geminiApiKeyInput.addEventListener('input', (e) => {
        state.apiKey = e.target.value.trim();
        localStorage.setItem('bentobot_api_key', state.apiKey);
    });

    // Sound toggle
    soundToggleBtn.addEventListener('click', () => {
        const enabled = synth.toggle();
        soundToggleBtn.innerHTML = enabled ? '🔊' : '🔇';
        if (enabled) synth.play('click');
    });

    // Image upload drag-and-drop
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
    });

    dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length > 0) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleFile(e.target.files[0]);
        }
    });

    removePreviewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        synth.play('click');
        clearImageUpload();
    });

    // Generate action
    generateBtn.addEventListener('click', generateBento);

    // Redraw image trigger
    regenerateDoodleBtn.addEventListener('click', () => {
        synth.play('click');
        redrawDoodle();
    });
}

// ==========================================
// 7. Ingredient Tag Utilities
// ==========================================

function addCustomIngredient() {
    const value = customIngredientsInput.value.trim().toLowerCase();
    if (!value) return;

    synth.play('click');

    if (!state.customIngredients.includes(value)) {
        state.customIngredients.push(value);
        renderCustomChips();
    }
    customIngredientsInput.value = '';
}

function removeCustomIngredient(index) {
    synth.play('click');
    state.customIngredients.splice(index, 1);
    renderCustomChips();
}

function renderCustomChips() {
    customChipsContainer.innerHTML = '';
    state.customIngredients.forEach((ing, index) => {
        const chip = document.createElement('div');
        chip.className = 'custom-chip';
        chip.innerHTML = `
            ${ing}
            <span onclick="removeCustomIngredient(${index})">&times;</span>
        `;
        customChipsContainer.appendChild(chip);
    });
}

// Make globally accessible for the inline onclick handler
window.removeCustomIngredient = removeCustomIngredient;

// ==========================================
// 8. Image Handling Utilities
// ==========================================

function handleFile(file) {
    synth.play('click');
    if (!file.type.startsWith('image/')) {
        alert("Please upload a valid image file!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const dataUrl = e.target.result;
        const commaIndex = dataUrl.indexOf(',');
        state.imageBase64 = dataUrl.substring(commaIndex + 1);
        state.imageMimeType = dataUrl.substring(5, commaIndex).split(';')[0];
        state.imageUploaded = true;

        previewImg.src = dataUrl;
        dropPreview.classList.remove('hidden');
        document.querySelector('.dropzone-prompt').classList.add('hidden');
    };
    reader.readAsDataURL(file);
}

function clearImageUpload() {
    state.imageUploaded = false;
    state.imageBase64 = null;
    state.imageMimeType = null;
    fileInput.value = '';
    previewImg.src = '';
    dropPreview.classList.add('hidden');
    document.querySelector('.dropzone-prompt').classList.remove('hidden');
}

// ==========================================
// 9. Bento Assembly Engine (Gemini & Demo)
// ==========================================

async function generateBento() {
    if (state.generationInProgress) return;

    // Check key if live mode enabled
    if (state.isLiveMode && !state.apiKey) {
        synth.play('click');
        settingsPanel.classList.remove('hidden');
        alert("Please provide a Gemini API Key to run in Live Mode, or turn off 'Live Mode' to use the offline Demo!");
        return;
    }

    state.generationInProgress = true;
    toggleLoadingState(true);

    const ingredientsList = [
        ...Array.from(state.selectedIngredients).map(id => PRESET_INGREDIENTS.find(p => p.id === id).label.substring(3)),
        ...state.customIngredients
    ];

    try {
        let bentoResult;

        if (state.isLiveMode) {
            bentoResult = await fetchBentoFromGemini(ingredientsList, state.selectedTheme);
        } else {
            // Simulated local computation delay
            await simulateCookingSequence();
            bentoResult = getDemoPreset(state.selectedTheme, ingredientsList);
        }

        renderBentoResult(bentoResult);
        synth.play('success');
    } catch (e) {
        console.error(e);
        alert("Bento assembly failed! Please check your connection, API key, or try offline Demo mode.");
        toggleLoadingState(false);
    } finally {
        state.generationInProgress = false;
    }
}

// Simulated Cooking Steps Progress
async function simulateCookingSequence() {
    synth.play('cooking');
    const loadingSubtitles = [
        "Analyzing ingredients list...",
        "Measuring optimal rice temperature...",
        "Molding cute character shapes...",
        "Carving octopus tentacles...",
        "Decorating cheek blushes...",
        "Polishing details..."
    ];

    for (let i = 0; i <= 100; i += 2) {
        await new Promise(r => setTimeout(r, 45));
        loadingProgress.style.width = `${i}%`;

        // Update descriptions at milestones
        if (i === 15) loadingSubtitle.innerText = loadingSubtitles[0];
        if (i === 35) loadingSubtitle.innerText = loadingSubtitles[1];
        if (i === 55) loadingSubtitle.innerText = loadingSubtitles[2];
        if (i === 70) loadingSubtitle.innerText = loadingSubtitles[3];
        if (i === 85) {
            loadingSubtitle.innerText = loadingSubtitles[4];
            synth.play('success'); // mini chime when details form
        }
        if (i === 95) loadingSubtitle.innerText = loadingSubtitles[5];
    }
}

function getDemoPreset(themeId, userIngredients) {
    const basePreset = JSON.parse(JSON.stringify(DEMO_PRESETS[themeId] || DEMO_PRESETS['bear']));
    
    // Customize identified ingredients based on what user actually selected, adding flair
    if (userIngredients.length > 0) {
        // Intersect or merge user's list into identified ingredients
        basePreset.identified_ingredients = [...new Set([...userIngredients, ...basePreset.identified_ingredients])];
    }
    
    return basePreset;
}

// Live Gemini API client calling 2.5 Flash
async function fetchBentoFromGemini(ingredients, themeId) {
    const themeName = PRESET_THEMES.find(t => t.id === themeId).name;
    let progress = 10;
    
    const interval = setInterval(() => {
        if (progress < 90) {
            progress += Math.floor(Math.random() * 8) + 2;
            loadingProgress.style.width = `${progress}%`;
        }
    }, 300);

    loadingSubtitle.innerText = "Analyzing fridge ingredients and designing kawaii layout...";
    synth.play('cooking');

    try {
        const contents = [];
        let promptText = `Act as BentoBot, an expert Japanese bento chef. Create a cute bento layout recommendation based on:
Theme: "${themeName}"
`;

        if (ingredients.length > 0) {
            promptText += `User Ingredients: ${ingredients.join(', ')}\n`;
        }

        if (state.imageUploaded && state.imageBase64) {
            promptText += `Please scan the attached photo of fridge ingredients, identify all food ingredients present, and merge them with the user ingredients.`;
            
            contents.push({
                role: "user",
                parts: [
                    { text: promptText },
                    {
                        inlineData: {
                            mimeType: state.imageMimeType,
                            data: state.imageBase64
                        }
                    }
                ]
            });
        } else {
            contents.push({
                role: "user",
                parts: [
                    { text: promptText }
                ]
            });
        }

        // Define schema for strict output
        const responseSchema = {
            type: "OBJECT",
            properties: {
                bento_name: { type: "STRING" },
                theme_description: { type: "STRING" },
                nutritional_tags: { type: "ARRAY", items: { type: "STRING" } },
                cute_factor_rating: { type: "INTEGER" },
                identified_ingredients: { type: "ARRAY", items: { type: "STRING" } },
                assembly_steps: {
                    type: "ARRAY",
                    items: {
                        type: "OBJECT",
                        properties: {
                            step_number: { type: "INTEGER" },
                            instruction: { type: "STRING" },
                            kawaii_tip: { type: "STRING" }
                        },
                        required: ["step_number", "instruction"]
                    }
                },
                doodle_image_prompt: { type: "STRING" }
            },
            required: ["bento_name", "theme_description", "nutritional_tags", "cute_factor_rating", "identified_ingredients", "assembly_steps", "doodle_image_prompt"]
        };

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${state.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: contents,
                generationConfig: {
                    responseMimeType: "application/json",
                    responseSchema: responseSchema
                }
            })
        });

        clearInterval(interval);

        if (!response.ok) {
            const errorMsg = await response.text();
            throw new Error(`Gemini API error: ${errorMsg}`);
        }

        const data = await response.json();
        
        loadingProgress.style.width = `100%`;
        await new Promise(r => setTimeout(r, 200));

        // Parse structured output
        const textResponse = data.candidates[0].content.parts[0].text;
        return JSON.parse(textResponse);

    } catch (e) {
        clearInterval(interval);
        throw e;
    }
}

// ==========================================
// 10. Renderer & Pollinations.ai Image Loader
// ==========================================

let activeDoodlePrompt = "";

function renderBentoResult(bento) {
    // 1. Text elements
    bentoTitle.innerText = bento.bento_name;
    bentoDesc.innerText = bento.theme_description;
    
    // 2. Stars
    const rating = Math.min(5, Math.max(1, bento.cute_factor_rating || 5));
    bentoStars.innerText = "⭐".repeat(rating) + "☆".repeat(5 - rating);

    // 3. Stats badges
    bentoStats.innerHTML = '';
    const emojiMap = ["🔥", "💪", "🌾", "🥦"];
    const classes = ["calories", "protein", "carbs", "veggie"];
    
    bento.nutritional_tags.forEach((tag, idx) => {
        const badge = document.createElement('span');
        const classIdx = idx % classes.length;
        badge.className = `stat-badge ${classes[classIdx]}`;
        badge.innerHTML = tag;
        bentoStats.appendChild(badge);
    });

    // 4. Used ingredients
    usedIngredientsChips.innerHTML = '';
    bento.identified_ingredients.forEach(ing => {
        const tag = document.createElement('span');
        tag.className = 'used-tag';
        tag.innerText = ing;
        usedIngredientsChips.appendChild(tag);
    });

    // 5. Steps
    assemblyStepsList.innerHTML = '';
    bento.assembly_steps.forEach(step => {
        const li = document.createElement('li');
        
        let tipHtml = '';
        if (step.kawaii_tip) {
            tipHtml = `<div class="kawaii-tip">💡 ${step.kawaii_tip}</div>`;
        }

        li.innerHTML = `
            <label class="checkbox-container">
                <input type="checkbox">
                <span class="checkmark"></span>
                <span class="step-content">
                    <span class="step-num">${step.step_number}</span>
                    ${step.instruction}
                    ${tipHtml}
                </span>
            </label>
        `;
        
        // Add checked toggle audio cue
        li.querySelector('input').addEventListener('change', () => {
            synth.play('click');
        });

        assemblyStepsList.appendChild(li);
    });

    // 6. Request image generation from Pollinations.ai
    activeDoodlePrompt = bento.doodle_image_prompt;
    loadPollinationsImage(activeDoodlePrompt);

    // Transition view states
    toggleLoadingState(false);
    idleState.classList.add('hidden');
    resultState.classList.remove('hidden');
}

function loadPollinationsImage(prompt) {
    bentoDoodle.classList.add('loading');
    doodleShimmer.classList.remove('hidden');

    const seed = Math.floor(Math.random() * 1000000);
    // Design rules: add standard styles to ensure a clean, cute, blue-grid bento blueprint drawing
    const refinedPrompt = `${prompt}, technical blueprint design layout, blueprint grid background, white vector line-art, 2d flat lay, cute, illustration, outline sketch, kawaii details, high contrast, clean path`;
    
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(refinedPrompt)}?width=600&height=600&nologo=true&seed=${seed}`;
    
    bentoDoodle.src = imageUrl;
    
    bentoDoodle.onload = function() {
        bentoDoodle.classList.remove('loading');
        doodleShimmer.classList.add('hidden');
    };

    bentoDoodle.onerror = function() {
        // Fallback placeholder image or try again
        bentoDoodle.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop";
        bentoDoodle.classList.remove('loading');
        doodleShimmer.classList.add('hidden');
    };
}

function redrawDoodle() {
    if (activeDoodlePrompt) {
        loadPollinationsImage(activeDoodlePrompt);
    }
}

// State transition wrapper
function toggleLoadingState(loading) {
    if (loading) {
        idleState.classList.add('hidden');
        resultState.classList.add('hidden');
        loadingState.classList.remove('hidden');
        loadingProgress.style.width = '0%';
        loadingSubtitle.innerText = 'Warming up the rice cooker...';
    } else {
        loadingState.classList.add('hidden');
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initApp);
