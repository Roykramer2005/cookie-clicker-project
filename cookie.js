class CookieClicker {
    constructor() {
        this.score = 0;
        this.pointsPerClick = 1;
        this.upgradeCost = 10;
        this.upgradeMultiplier = 2;
        this.init();
    }

    init() {
        this.cookieElement = document.getElementById('cookie');
        this.scoreElement = document.getElementById('score');
        this.upgradeButton = document.getElementById('upgrade');


        this.cookieElement.addEventListener('click', () => this.incrementScore());

        this.upgradeButton.addEventListener('click', () => this.buyUpgrade());


        this.updateUI();
    }

    incrementScore() {
        this.score += this.pointsPerClick;
        this.updateUI();
    }


    updateUI() {
        this.scoreElement.innerText = `Score: ${this.score}`;
        this.upgradeButton.innerText = `Cursor (price ${this.upgradeCost})`;


        if (this.score >= this.upgradeCost) {
            this.upgradeButton.disabled = false;
        } else {
            this.upgradeButton.disabled = true;
        }
    }

    buyUpgrade() {
        if (this.score >= this.upgradeCost) {
            this.score -= this.upgradeCost;
            this.pointsPerClick += 1;
            this.upgradeCost *= this.upgradeMultiplier;
            this.updateUI();
        }
    }
}

const game = new CookieClicker();