document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.count-section .cell button').forEach(button => {
        button.addEventListener('click', function() {
            const cellType = this.parentNode.id;
            const countSpan = this.previousElementSibling;
            let currentCount = parseInt(countSpan.textContent, 10);
            countSpan.textContent = ++currentCount;
            updatePercentage(cellType);
            document.getElementById('clickSound').play();
        });
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        document.querySelectorAll('.count-section .cell span.count').forEach(span => {
            span.textContent = '0';
        });
        document.querySelectorAll('.percentage-section .cell span').forEach(span => {
            span.textContent = '0%';
        });
        document.getElementById('totalLeukocytes').value = '0';
    });
});

function updatePercentage(cellType) {
    const totalLeukocytes = parseInt(document.getElementById('totalLeukocytes').value, 10);
    const countSpan = document.querySelector(`#${cellType} .count`);
    const count = parseInt(countSpan.textContent, 10);
    const percentageSpan = document.querySelector(`#${cellType}Percentage span`);
    if (totalLeukocytes > 0) {
        const percentage = (count / totalLeukocytes) * 100;
        percentageSpan.textContent = percentage.toFixed(2) + '%';
    } else {
        percentageSpan.textContent = '0%';
    }
}
