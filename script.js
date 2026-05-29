* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

body {
    background: linear-gradient(135deg, #a8d8ea, #aa96da);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.game-container {
    background: rgba(255,255,255,0.9);
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    width: 100%;
    max-width: 900px;
    text-align: center;
}

header {
    margin-bottom: 30px;
}

h1 {
    color: #2d3748;
    margin-bottom: 15px;
}

.controls {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.disk-count input {
    width: 60px;
    padding: 5px;
    border: 2px solid #cbd5e0;
    border-radius: 6px;
    font-size: 1rem;
}

.move-counter {
    font-size: 1.1rem;
    font-weight: bold;
    color: #2d3748;
}

button {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s;
}

#resetBtn {
    background-color: #e2e8f0;
    color: #2d3748;
}

#autoSolveBtn {
    background-color: #4299e1;
    color: white;
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.game-board {
    display: flex;
    justify-content: space-around;
    perspective: 800px;
    margin: 40px 0;
    height: 300px;
}

.peg {
    width: 200px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
}

.peg::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 220px;
    background: linear-gradient(to right, #8b7355, #c4a484, #8b7355);
    border-radius: 5px;
    bottom: 60px;
}

.peg-base {
    width: 180px;
    height: 20px;
    background: linear-gradient(to bottom, #c4a484, #8b7355);
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

.disk {
    height: 25px;
    border-radius: 6px;
    margin: 2px 0;
    cursor: pointer;
    transition: transform 0.2s;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    transform-style: preserve-3d;
}

.disk.selected {
    transform: translateY(-20px) translateZ(30px);
    box-shadow: 0 10px 15px rgba(0,0,0,0.3);
}

.disk-1 { width: 60px; background: linear-gradient(to bottom, #ff9999, #ff4d4d); }
.disk-2 { width: 80px; background: linear-gradient(to bottom, #ffcc99, #ff9933); }
.disk-3 { width: 100px; background: linear-gradient(to bottom, #ffff99, #ffff33); }
.disk-4 { width: 120px; background: linear-gradient(to bottom, #ccff99, #99ff33); }
.disk-5 { width: 140px; background: linear-gradient(to bottom, #99ffcc, #33ff99); }
.disk-6 { width: 160px; background: linear-gradient(to bottom, #99ccff, #3399ff); }
.disk-7 { width: 170px; background: linear-gradient(to bottom, #cc99ff, #9933ff); }
.disk-8 { width: 180px; background: linear-gradient(to bottom, #ff99ff, #ff33ff); }

.warning {
    color: #e53e3e;
    font-weight: bold;
    height: 30px;
    margin-top: 20px;
    animation: shake 0.5s ease-in-out;
}

.victory {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.95);
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    font-size: 2rem;
    font-weight: bold;
    color: #48bb78;
    display: none;
    z-index: 100;
    animation: glowWin 1s infinite alternate;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}

@keyframes glowWin {
    from { box-shadow: 0 0 10px #ffd700; }
    to { box-shadow: 0 0 30px #ffd700; }
}
