// js/engine.js

let currentPrototype = null;
let currentVariantTasks = null;

// ============ ВНЕДРЯЕМ СТИЛИ ДЛЯ ИЗОБРАЖЕНИЙ И МОДАЛКИ ============
(function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Ограничение размеров изображений в заданиях */
        .task-image {
            margin: 10px 0;
            text-align: center;
        }
        .task-image img {
            max-width: 100%;
            max-height: 300px;
            width: auto;
            height: auto;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: 0.2s;
        }
        .task-image img:hover {
            opacity: 0.9;
            transform: scale(1.02);
        }

        /* matching */
        .matching-image-container {
            width: 150px;
            height: 100px;
            flex-shrink: 0;
            overflow: hidden;
            border-radius: 5px;
            background: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }
        .matching-image-container img {
            width: 150px !important;
            height: 100px !important;
            object-fit: cover !important;
            cursor: pointer;
        }

        /* Модальное окно */
        .image-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .image-modal.show {
            opacity: 1;
        }
        .image-modal img {
            max-width: 92%;
            max-height: 92%;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 0 40px rgba(0,0,0,0.6);
            cursor: default;
        }
    `;
    document.head.appendChild(style);
})();

// ============ ОТКРЫТИЕ МОДАЛЬНОГО ОКНА ============
function openImageModal(src) {
    // Удаляем предыдущее окно, если есть
    const old = document.querySelector('.image-modal');
    if (old) old.remove();

    const modal = document.createElement('div');
    modal.className = 'image-modal show';
    modal.innerHTML = `<img src="${src}" alt="Увеличенное изображение">`;
    modal.addEventListener('click', function(e) {
        if (e.target === modal) this.remove();
    });
    // Закрытие по Escape
    modal.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') this.remove();
    });
    document.body.appendChild(modal);
    // фокус для обработки клавиш
    modal.setAttribute('tabindex', '0');
    modal.focus();
}

// ============ УНИВЕРСАЛЬНАЯ ФУНКЦИЯ РЕНДЕРИНГА ============

function renderTasks(tasks, options = {}) {
    const container = document.getElementById("tasksContainer");
    const showIndividualCheck = options.showIndividualCheck !== undefined ? options.showIndividualCheck : true;
    const showHeaderButtons = options.showHeaderButtons !== undefined ? options.showHeaderButtons : true;

    if (!tasks || tasks.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">Нет заданий для отображения</p>';
        return;
    }

    let html = "";

    tasks.forEach((task) => {
        html += `<div class="task-card" id="task-${task.id}">`;
        html += `<div class="task-id">Задание №${task.id}</div>`;
        html += `<span class="task-type-badge">${getTaskTypeLabel(task.type)}</span>`;

        // Изображение для обычных заданий (не matching)
        if (task.image && task.type !== "matching") {
            html += `<div class="task-image">
                        <img src="${task.image}" alt="Изображение" loading="lazy" 
                             onclick="openImageModal('${task.image}')" 
                             onerror="this.style.display='none'">
                     </div>`;
        }

        if (task.audio) {
            html += `<div class="task-audio"><audio controls style="width:100%; max-width:300px; margin:10px 0;"><source src="${task.audio}" type="audio/mpeg">Ваш браузер не поддерживает аудио.</audio></div>`;
        }

        html += `<div class="task-question">${task.question}</div>`;
        html += `<div class="task-answer-area">`;

        if (task.type === "choice") {
            html += renderChoiceTask(task);
        } else if (task.type === "input") {
            html += renderInputTask(task);
        } else if (task.type === "multiChoice") {
            html += renderMultiChoiceTask(task);
        } else if (task.type === "matching") {
            html += renderMatchingTask(task);
        }

        html += `</div>`;
        if (showIndividualCheck) {
            html += `<div style="margin-top: 10px;">
                        <button onclick="checkSingleTaskById(${task.id})" class="check-button" style="padding: 4px 12px; font-size: 13px;">Проверить это задание</button>
                     </div>`;
        }
        html += `<div class="task-feedback" id="feedback-${task.id}"></div>`;
        html += `</div>`;
    });

    if (showHeaderButtons) {
        html += `<div style="text-align: center; margin-top: 30px; margin-bottom: 20px;">
            <button onclick="checkAllAnswers()" class="check-button" style="padding: 12px 40px; font-size: 18px;">Подвести итоги</button>
        </div>`;
    }

    container.innerHTML = html;
}

// ============ РЕНДЕРИНГ ПО ПРОТОТИПУ ============

function renderTasksByPrototype(prototypeNumber) {
    currentPrototype = prototypeNumber;
    currentVariantTasks = null;

    const allTasks = [
        ...(tasksDB.choiceTasks || []),
        ...(tasksDB.inputTasks || []),
        ...(tasksDB.multiChoiceTasks || []),
        ...(tasksDB.matchingTasks || [])
    ];
    const filteredTasks = allTasks.filter((task) => task.prototype === prototypeNumber);
    renderTasks(filteredTasks, { showIndividualCheck: true, showHeaderButtons: true });
}

// ============ ПРОВЕРКА ВСЕХ С ПЕРЕХОДОМ НА СТРАНИЦУ РЕЗУЛЬТАТА ============

function checkAllAnswers() {
    let tasksToCheck = [];
    if (currentVariantTasks && currentVariantTasks.length > 0) {
        tasksToCheck = currentVariantTasks;
    } else if (currentPrototype !== null) {
        const allTasks = [
            ...(tasksDB.choiceTasks || []),
            ...(tasksDB.inputTasks || []),
            ...(tasksDB.multiChoiceTasks || []),
            ...(tasksDB.matchingTasks || [])
        ];
        tasksToCheck = allTasks.filter(task => task.prototype === currentPrototype);
    } else {
        alert('Нет заданий для проверки');
        return;
    }

    if (tasksToCheck.length === 0) {
        alert('Нет заданий для проверки');
        return;
    }

    const results = [];
    let correctCount = 0;
    const totalTasks = tasksToCheck.length;

    tasksToCheck.forEach(task => {
        const result = checkSingleTaskDetailed(task, true);
        if (result) {
            results.push({
                id: task.id,
                userAnswer: result.userAnswer,
                correctAnswer: result.correctAnswer,
                isCorrect: result.isCorrect,
                answered: result.answered
            });
            if (result.isCorrect) correctCount++;
        } else {
            results.push({
                id: task.id,
                userAnswer: null,
                correctAnswer: null,
                isCorrect: false,
                answered: false
            });
        }
    });

    const primaryScore = correctCount;
    const secondaryScore = totalTasks > 0 ? Math.round((primaryScore / totalTasks) * 100) : 0;

    const report = {
        results: results,
        total: totalTasks,
        correct: primaryScore,
        secondary: secondaryScore,
        timestamp: new Date().toLocaleString()
    };

    localStorage.setItem('examReport', JSON.stringify(report));
    window.location.href = 'result.html';
}

// ============ ДЕТАЛЬНАЯ ПРОВЕРКА ОДНОГО ЗАДАНИЯ ============

function checkSingleTaskDetailed(task, silent = false) {
    let isCorrect = false;
    let userAnswer = null;
    let correctAnswer = null;
    let answered = true;

    if (task.type === "choice") {
        const selected = document.querySelector(`input[name="task_${task.id}"]:checked`);
        if (!selected) {
            if (!silent) showWarning(`task-${task.id}`, "⚠️ Выберите ответ");
            answered = false;
            return { isCorrect: false, userAnswer: null, correctAnswer: task.correct, answered: false };
        }
        userAnswer = parseInt(selected.value);
        correctAnswer = task.correct;
        isCorrect = userAnswer === correctAnswer;
        if (!silent) {
            const labels = document.querySelectorAll(`#task-${task.id} .option-label`);
            labels.forEach((label, index) => {
                label.classList.remove("correct-answer", "wrong-answer");
                if (index === task.correct) label.classList.add("correct-answer");
                if (index === userAnswer && !isCorrect) label.classList.add("wrong-answer");
            });
        }
    } else if (task.type === "input") {
        const input = document.getElementById(`input_${task.id}`);
        if (!input || !input.value.trim()) {
            if (!silent) showWarning(`task-${task.id}`, "⚠️ Введите ответ");
            answered = false;
            return { isCorrect: false, userAnswer: null, correctAnswer: task.correct[0] || '', answered: false };
        }
        userAnswer = input.value.trim();
        correctAnswer = task.correct[0] || '';
        isCorrect = task.correct.some((c) => c.toLowerCase() === userAnswer.toLowerCase());
        if (!silent) {
            input.classList.remove("correct-answer", "wrong-answer");
            input.classList.add(isCorrect ? "correct-answer" : "wrong-answer");
        }
    } else if (task.type === "multiChoice") {
        const checkboxes = document.querySelectorAll(`input[name="task_${task.id}"]:checked`);
        if (checkboxes.length === 0) {
            if (!silent) showWarning(`task-${task.id}`, "⚠️ Выберите варианты");
            answered = false;
            return { isCorrect: false, userAnswer: null, correctAnswer: task.correct.join(', '), answered: false };
        }
        const selected = Array.from(checkboxes).map(cb => parseInt(cb.value)).sort();
        const correct = [...task.correct].sort();
        userAnswer = selected.join(', ');
        correctAnswer = correct.join(', ');
        isCorrect = JSON.stringify(selected) === JSON.stringify(correct);
        if (!silent) {
            const labels = document.querySelectorAll(`#task-${task.id} .option-label`);
            labels.forEach((label, index) => {
                label.classList.remove("correct-answer", "wrong-answer", "missed-answer");
                if (correct.includes(index)) label.classList.add("correct-answer");
                if (selected.includes(index) && !correct.includes(index)) label.classList.add("wrong-answer");
            });
        }
    } else if (task.type === "matching") {
        const taskCard = document.getElementById(`task-${task.id}`);
        const selects = taskCard.querySelectorAll('.matching-select');
        let allSelected = true;
        let results = {};

        selects.forEach(select => {
            const letter = select.dataset.letter;
            const value = select.value;
            if (!value) allSelected = false;
            results[letter] = value ? parseInt(value) : null;
        });

        if (!allSelected) {
            if (!silent) showWarning(`task-${task.id}`, "⚠️ Выберите всё");
            answered = false;
            return { isCorrect: false, userAnswer: null, correctAnswer: JSON.stringify(task.correct), answered: false };
        }

        const correct = task.correct;
        let allCorrect = true;
        const userAnswers = {};
        Object.keys(correct).forEach(letter => {
            const userVal = results[letter];
            const correctVal = correct[letter];
            const match = userVal === correctVal;
            if (!match) allCorrect = false;
            userAnswers[letter] = userVal;
            if (!silent) {
                const icon = document.getElementById(`result_${task.id}_${letter}`);
                if (icon) {
                    icon.textContent = match ? "✅" : "❌";
                    icon.className = `matching-result-icon ${match ? "correct" : "incorrect"}`;
                }
                const select = taskCard.querySelector(`.matching-select[data-letter="${letter}"]`);
                if (select) {
                    select.classList.remove("correct-answer", "wrong-answer");
                    select.classList.add(match ? "correct-answer" : "wrong-answer");
                }
            }
        });

        isCorrect = allCorrect;
        userAnswer = JSON.stringify(userAnswers);
        correctAnswer = JSON.stringify(correct);
        answered = true;
    }

    if (!silent) {
        const fb = document.getElementById(`feedback-${task.id}`);
        if (fb) {
            fb.className = `task-feedback ${isCorrect ? "correct" : "incorrect"}`;
            fb.textContent = isCorrect ? "✅ Правильно!" : "❌ Неправильно.";
        }
        const card = document.getElementById(`task-${task.id}`);
        if (card) {
            card.classList.remove("task-correct", "task-incorrect");
            card.classList.add(isCorrect ? "task-correct" : "task-incorrect");
        }
    }

    return { isCorrect, userAnswer, correctAnswer, answered };
}

// ============ ПРОВЕРКА ОТДЕЛЬНОГО ЗАДАНИЯ (кнопка) ============

function checkSingleTaskById(taskId) {
    const allTasks = [
        ...(tasksDB.choiceTasks || []),
        ...(tasksDB.inputTasks || []),
        ...(tasksDB.multiChoiceTasks || []),
        ...(tasksDB.matchingTasks || [])
    ];
    const task = allTasks.find(t => t.id === taskId);
    if (!task) {
        alert('Задание не найдено!');
        return;
    }
    checkSingleTaskDetailed(task, false);
}

// ============ ГЕНЕРАЦИЯ СЛУЧАЙНОГО ВАРИАНТА ============

function generateVariant() {
    const allTasks = [
        ...(tasksDB.choiceTasks || []),
        ...(tasksDB.inputTasks || []),
        ...(tasksDB.multiChoiceTasks || []),
        ...(tasksDB.matchingTasks || [])
    ];

    const prototypes = [...new Set(allTasks.map(t => t.prototype))].sort((a, b) => a - b);

    if (prototypes.length === 0) {
        alert('Нет заданий для генерации варианта');
        return;
    }

    const variantTasks = [];
    prototypes.forEach(proto => {
        const protoTasks = allTasks.filter(t => t.prototype === proto);
        if (protoTasks.length > 0) {
            const randomIndex = Math.floor(Math.random() * protoTasks.length);
            variantTasks.push(protoTasks[randomIndex]);
        }
    });

    currentVariantTasks = variantTasks;
    currentPrototype = null;
    renderTasks(variantTasks, { showIndividualCheck: false, showHeaderButtons: true });
}

// ============ ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ============

function getTaskTypeLabel(type) {
    const labels = {
        choice: "Выбор ответа",
        input: "Ввод ответа",
        multiChoice: "Несколько вариантов",
        matching: "Соответствие"
    };
    return labels[type] || type;
}

function renderChoiceTask(task) {
    let html = `<div class="task-options">`;
    task.options.forEach((option, index) => {
        html += `
            <label class="option-label">
                <input type="radio" name="task_${task.id}" value="${index}">
                ${option}
            </label>
        `;
    });
    html += `</div>`;
    return html;
}

function renderInputTask(task) {
    return `<input type="text" class="task-input" id="input_${task.id}" placeholder="Введите ответ...">`;
}

function renderMultiChoiceTask(task) {
    let html = `<div class="task-options">`;
    task.options.forEach((option, index) => {
        html += `
            <label class="option-label">
                <input type="checkbox" name="task_${task.id}" value="${index}">
                ${option}
            </label>
        `;
    });
    html += `</div>`;
    return html;
}

function renderMatchingTask(task) {
    let html = `<div class="matching-container">`;
    html += `<div class="matching-row">`;

    html += `<div class="matching-left">`;
    task.leftItems.forEach((item) => {
        html += `
            <div class="matching-item">
                <span class="matching-letter">${item.label}</span>
                <div class="matching-image-container">
                    <img src="${item.image}" alt="Карта ${item.label}" 
                         onclick="openImageModal('${item.image}')"
                         onerror="this.parentElement.innerHTML='<div class=\\'image-error\\'>❌</div>'">
                </div>
            </div>
        `;
    });
    html += `</div>`;

    html += `<div class="matching-right">`;
    task.leftItems.forEach((item) => {
        html += `
            <div class="matching-item">
                <span class="matching-letter">${item.label}</span>
                <select class="matching-select" data-task="${task.id}" data-letter="${item.id}">
                    <option value="">Выберите...</option>
        `;
        task.rightItems.forEach((option) => {
            html += `<option value="${option.id}">${option.label}</option>`;
        });
        html += `
                </select>
                <span class="matching-result-icon" id="result_${task.id}_${item.id}"></span>
            </div>
        `;
    });
    html += `</div>`;

    html += `</div>`;
    html += `</div>`;
    return html;
}

function showWarning(taskId, message) {
    const fb = document.getElementById(`feedback-${taskId}`);
    if (fb) {
        fb.className = "task-feedback warning";
        fb.textContent = message;
    }
}

function resetAllAnswers() {
    document.querySelectorAll(".task-input").forEach(input => {
        input.value = "";
        input.classList.remove("correct-answer", "wrong-answer");
    });
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
        input.checked = false;
    });
    document.querySelectorAll(".option-label").forEach(label => {
        label.classList.remove("correct-answer", "wrong-answer", "missed-answer");
    });
    document.querySelectorAll(".matching-select").forEach(select => {
        select.value = "";
        select.classList.remove("correct-answer", "wrong-answer");
    });
    document.querySelectorAll(".matching-result-icon").forEach(icon => {
        icon.textContent = "";
        icon.className = "matching-result-icon";
    });
    document.querySelectorAll(".task-feedback").forEach(fb => {
        fb.textContent = "";
        fb.className = "task-feedback";
    });
    document.querySelectorAll(".task-card").forEach(card => {
        card.classList.remove("task-correct", "task-incorrect");
    });
    const totalResult = document.getElementById("total-result");
    if (totalResult) totalResult.remove();
}