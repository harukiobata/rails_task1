document.addEventListener('turbolinks:load', function () {
    //基本turbolinks:loadで
    const errorModal = document.getElementById('errorModal2');
    const errorMessageContent = document.getElementById('errorMessageContent');
    // errorがある時表示
    if (errorMessageContent.children.length > 0) {
      errorModal.style.display = 'flex';  
    }
  
    // モーダル外クリックで閉じる
    errorModal.addEventListener('click', function (event) {
      if (event.target === errorModal) {
        const errorModal = document.getElementById('errorModal2');
        errorModal.style.display = 'none'; 
      }
    });
    //turbolinks:load競合につきdate_calenderから移動
    const startDateArea = document.getElementById('start_date');
    const endDateArea = document.getElementById('end_date');
    
    startDateArea.addEventListener('focus', function() {
        this.showPicker();
    });

    endDateArea.addEventListener('focus', function() {
        this.showPicker();
    });
  }); 