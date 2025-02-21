document.addEventListener('turbolinks:load',function() {
    const startDateArea = document.getElementById('start_date');
    const endDateArea = document.getElementById('end_date');
    
    startDateArea.addEventListener('focus', function() {
        this.showPicker();
    });

    endDateArea.addEventListener('focus', function() {
        this.showPicker();
    });
});