import { initTheme } from './theme.js';

// Initialize Theme
initTheme();

// Lotto Generator Web Component
class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.numbers = [];
  }

  connectedCallback() {
    this.render();
  }

  generateNumbers() {
    const set = new Set();
    while (set.size < 6) {
      set.add(Math.floor(Math.random() * 45) + 1);
    }
    this.numbers = Array.from(set).sort((a, b) => a - b);
    this.renderNumbers();
  }

  getBallColor(num) {
    if (num <= 10) return 'var(--lotto-yellow)';
    if (num <= 20) return 'var(--lotto-blue)';
    if (num <= 30) return 'var(--lotto-red)';
    if (num <= 40) return 'var(--lotto-gray)';
    return 'var(--lotto-green)';
  }

  renderNumbers() {
    const container = this.shadowRoot.querySelector('.numbers-container');
    container.innerHTML = '';
    
    this.numbers.forEach((num, index) => {
      const ball = document.createElement('div');
      ball.className = 'ball';
      ball.textContent = num;
      ball.style.backgroundColor = this.getBallColor(num);
      ball.style.animationDelay = `${index * 0.1}s`;
      container.appendChild(ball);
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: var(--card-bg, white);
          padding: 2.5rem;
          border-radius: 24px;
          box-shadow: var(--card-shadow, 0 10px 30px rgba(0,0,0,0.1));
          text-align: center;
          transition: background-color 0.3s, box-shadow 0.3s;
        }

        .numbers-container {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin: 2rem 0;
          flex-wrap: wrap;
          min-height: 60px;
        }

        .ball {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-weight: bold;
          font-size: 1.25rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          box-shadow: inset -4px -4px 8px rgba(0,0,0,0.2), 0 4px 8px rgba(0,0,0,0.1);
          animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
        }

        @keyframes pop-in {
          0% { transform: scale(0) rotate(-45deg); opacity: 0; }
          100% { transform: scale(1) rotate(0); opacity: 1; }
        }

        button {
          background-color: var(--btn-primary, #4a90e2);
          color: var(--btn-primary-text, white);
          border: none;
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 700;
          border-radius: 12px;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.3s, box-shadow 0.2s;
          box-shadow: 0 4px 12px var(--btn-primary);
        }

        button:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        button:active {
          transform: translateY(0);
        }

        h2 {
          margin-bottom: 1rem;
          font-size: 1.5rem;
          color: var(--text-color);
        }
      </style>
      <div class="generator-card">
        <h2>행운의 번호를 뽑아보세요!</h2>
        <div class="numbers-container">
          <p style="color: var(--text-color); opacity: 0.5;">버튼을 눌러 번호를 생성하세요</p>
        </div>
        <button id="generate-btn">번호 생성하기</button>
      </div>
    `;

    this.shadowRoot.getElementById('generate-btn').addEventListener('click', () => this.generateNumbers());
  }
}

customElements.define('lotto-generator', LottoGenerator);
