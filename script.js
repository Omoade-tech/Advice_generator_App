
const adviceId = document.getElementById('adviceNumber');

const adviceText = document.getElementById('adviceText');

const newAdviceBtn = document.getElementById('newAdviceBtn');

async function getAdvice() {
    try{
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        adviceId.textContent = data.slip.id;
        adviceText.textContent = `"${data.slip.advice}"`;
    } catch (error) {
        console.error('Error fetching advice:', error);
        adviceText.textContent = 'failed to load advice, please try again.';
    }
}

newAdviceBtn.addEventListener('click', getAdvice);
getAdvice();



