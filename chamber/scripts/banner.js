window.onload = function() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 7) {
        const meetingBanner = document.getElementById('meetingBanner');
        meetingBanner.style.display = 'block';
    }
    const closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', function() {
        const meetingBanner = document.getElementById('meetingBanner');
        meetingBanner.style.display = 'none';
    });
};