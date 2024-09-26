class CookieClicker {
    constructor() {
        this.score = 0;
        this.pointsPerClick = 1;
        this.upgradeCost = 10;          // Kosten van de eerste upgrade
        this.upgradeMultiplier = 2;     // Verdubbel de prijs na elke aankoop van de eerste upgrade
        this.autoClickerCost = 50;      // Kosten voor de auto-clicker upgrade
        this.autoClickerPointsPerSecond = 0; // Punten per seconde voor de auto-clicker
        this.init();
    }

    init() {
        this.cookieElement = document.getElementById('cookie');
        this.scoreElement = document.getElementById('score');
        this.upgradeButton = document.getElementById('upgrade');
        this.upgrade2Button = document.getElementById('upgrade2'); // Auto-clicker knop

        this.cookieElement.addEventListener('click', () => this.incrementScore());
        this.upgradeButton.addEventListener('click', () => this.buyUpgrade());
        this.upgrade2Button.addEventListener('click', () => this.buyAutoClicker()); // Event voor auto-clicker

        this.startAutoClicker(); // Start de interval voor de auto-clicker
        this.updateUI();
    }

    incrementScore() {
        this.score += this.pointsPerClick;
        this.updateUI();
    }

    updateUI() {
        this.scoreElement.innerText = `Score: ${this.score}`;
        this.upgradeButton.innerText = `Cursor (price ${this.upgradeCost})`;
        this.upgrade2Button.innerText = `Auto-Clicker (price ${this.autoClickerCost})`;

        // Disable knoppen als er niet genoeg score is voor een upgrade
        this.upgradeButton.disabled = this.score < this.upgradeCost;
        this.upgrade2Button.disabled = this.score < this.autoClickerCost;
    }

    buyUpgrade() {
        if (this.score >= this.upgradeCost) {
            this.score -= this.upgradeCost;
            this.pointsPerClick += 1;         // Verhoog de punten per klik
            this.upgradeCost *= this.upgradeMultiplier; // Verdubbel de kosten voor de volgende keer
            this.updateUI();
        }
    }

    buyAutoClicker() {
        if (this.score >= this.autoClickerCost) {
            this.score -= this.autoClickerCost;  // Verminder de score met de auto-clicker prijs
            this.autoClickerPointsPerSecond += 1; // Verhoog het aantal punten per seconde met 1
            this.autoClickerCost *= 2;           // Verdubbel de prijs voor de volgende auto-clicker upgrade
            this.updateUI();
        }
    }

    startAutoClicker() {
        setInterval(() => {
            this.score += this.autoClickerPointsPerSecond; // Voeg punten per seconde toe
            this.updateUI();
        }, 1000); // Elke seconde worden de punten toegevoegd
    }
}

// Instantieer het spel
const game = new CookieClicker();