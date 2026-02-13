// Navigation
function navigateTo(targetId) {
    // Update Content
    document.querySelectorAll('.view').forEach(section => {
        section.classList.remove('active');
        if (!section.classList.contains('hidden')) section.classList.add('hidden');
    });

    const targetSection = document.getElementById(targetId);
    targetSection.classList.remove('hidden');
    setTimeout(() => targetSection.classList.add('active'), 10); // Trigger animation

    // Update Nav Buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.target === targetId) btn.classList.add('active');
    });

    // Scroll to top
    window.scrollTo(0, 0);
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.target));
});

// Feature 2: Career Discovery (Render & Filter)
const careerList = document.getElementById('career-list');
const searchInput = document.getElementById('career-search');
const filterBtns = document.querySelectorAll('.filter-btn');
let currentFilter = 'all';

function renderCareers(filter = 'all', searchTerm = '') {
    careerList.innerHTML = '';

    const filtered = careersData.filter(career => {
        const matchesFilter = filter === 'all' || career.category === filter || (filter === 'Government' && career.tags.includes('Government'));
        const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            career.skills.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
        careerList.innerHTML = '<p style="text-align:center; color:#7f8c8d;">No careers found.</p>';
        return;
    }

    filtered.forEach(career => {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.innerHTML = `
            <div class="career-header">
                <h3>${career.title}</h3>
                <span class="tag ${career.category.toLowerCase()}">${career.category}</span>
            </div>
            <p style="font-size: 0.9rem; color: #555;">${career.skills}</p>
            <button class="expand-btn" onclick="toggleDetails(this)">View Details ▼</button>
            <div class="career-details">
                <p><strong>🎓 Eligibility:</strong> ${career.eligibility}</p>
                <p><strong>📚 Education:</strong> ${career.education}</p>
                <p><strong>🚀 Next Steps:</strong> ${career.nextSteps}</p>
            </div>
        `;
        careerList.appendChild(card);
    });
}

function toggleDetails(btn) {
    const card = btn.parentElement;
    card.classList.toggle('expanded');
    btn.textContent = card.classList.contains('expanded') ? 'Hide Details ▲' : 'View Details ▼';
}

// Filter Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderCareers(currentFilter, searchInput.value);
    });
});

// Search Listener
searchInput.addEventListener('input', (e) => {
    renderCareers(currentFilter, e.target.value);
});


// Feature 3: Interactive Quiz
const quizContainer = document.getElementById('question-box');
const quizResult = document.getElementById('quiz-result');
let currentQuestionIndex = 0;
let scores = { Science: 0, Commerce: 0, Arts: 0, Vocational: 0 };

function loadQuiz() {
    currentQuestionIndex = 0;
    scores = { Science: 0, Commerce: 0, Arts: 0, Vocational: 0 };
    quizResult.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        showResult();
        return;
    }

    const q = quizQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h3 style="margin-bottom:15px;">${q.id}. ${q.question}</h3>
        <div class="options">
            ${q.options.map(opt => `<button class="quiz-option" onclick="handleAnswer('${opt.type}')">${opt.text}</button>`).join('')}
        </div>
    `;
}

function handleAnswer(type) {
    if (scores[type] !== undefined) scores[type]++;
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    // Find highest score
    const recommended = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    quizContainer.classList.add('hidden');
    quizResult.classList.remove('hidden');
    quizResult.innerHTML = `
        <div class="card success" style="text-align:center;">
            <h3>🌟 Suggestion: ${recommended}</h3>
            <p>Based on your answers, you seem to enjoy <strong>${recommended}</strong> related activities.</p>
            <button class="cta-btn" style="margin-top:10px;" onclick="navigateTo('discovery'); document.querySelector('[data-filter=${recommended}]').click();">Explore ${recommended} Careers</button>
            <button class="expand-btn" onclick="loadQuiz()" style="text-align:center; margin-top:10px;">Retake Quiz</button>
        </div>
    `;
}

// Feature 4: AI Guide
const chatOptions = document.getElementById('chat-options');
const chatOutput = document.getElementById('chat-output');

function loadFAQ() {
    chatOptions.innerHTML = faqData.map(item => `
        <button onclick="showAnswer('${item.question}')">${item.question}</button>
    `).join('');
}

function showAnswer(questionText) {
    const faq = faqData.find(f => f.question === questionText);
    chatOptions.classList.add('hidden');
    chatOutput.classList.remove('hidden');

    // Simple typewriter effect simulation or just text
    chatOutput.innerHTML = `
        <p style="font-weight:600; margin-bottom:10px;">Q: ${faq.question}</p>
        <p>${faq.answer}</p>
        <button class="close-chat" onclick="resetChat()">Ask another question</button>
    `;
}

function resetChat() {
    chatOutput.classList.add('hidden');
    chatOptions.classList.remove('hidden');
}


// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderCareers();
    loadQuiz(); // Prepare quiz
    loadFAQ(); // Prepare FAQ

    // Handle Quiz Tab Click (Reset if needed or just show)
    document.querySelector('[data-target="quiz"]').addEventListener('click', () => {
        if (currentQuestionIndex === 0) loadQuiz();
    });
});
