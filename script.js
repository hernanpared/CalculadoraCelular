document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.count-section .cell button').forEach(button => {
        button.addEventListener('click', function() {
            const cellType = this.parentNode.id;
            const countSpan = this.previousElementSibling;
            let currentCount = parseInt(countSpan.textContent, 10);
            countSpan.textContent = ++currentCount;
            updateTotalCount();
            document.getElementById('clickSound').play();
        });
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        document.querySelectorAll('.count-section .cell span.count').forEach(span => {
            span.textContent = '0';
        });
        document.querySelectorAll('.count-section .cell button').forEach(button => {
            button.style.backgroundColor = '#4CAF50'; // Reset button color
            button.disabled = false; // Enable buttons
        });
        document.getElementById('totalLeukocytes').value = '0';
    });
});

function updateTotalCount() {
    const totalSpecified = parseInt(document.getElementById('totalLeukocytes').value, 10);
    let totalCurrent = 0;
    document.querySelectorAll('.count-section .cell span.count').forEach(span => {
        totalCurrent += parseInt(span.textContent, 10);
    });
    if (totalCurrent >= totalSpecified) {
        document.getElementById('alarmSound').play();
        document.querySelectorAll('.count-section .cell button').forEach(button => {
            button.style.backgroundColor = 'red';
            button.disabled = true;
        });
    }
}
