document.addEventListener('DOMContentLoaded', function () {
    const deleteButtons = document.querySelectorAll('.open-delete-modal');  // 削除リンクを取得
    const modal = document.getElementById('deleteModal');
    const postTitleElement = document.getElementById('post-title');  // モーダル内のタイトル表示用の<span>タグ
    const confirmDeleteButton = document.getElementById('confirmDelete'); //削除ボタン
    const cancelDeleteButton = document.getElementById('cancelDeleteButton'); //キャンセルボタン
    const closeModalButton = document.getElementById('closeModal'); //モーダル右上にあるばつ印
    let postIdToDelete = null;  // 削除対象の投稿IDを保持
  
    // 削除リンクをクリックしたとき
    deleteButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        postIdToDelete = this.dataset.postId;
        const postTitle = this.dataset.postTitle;  // 削除する投稿のタイトルを取得
  
        // モーダルのタイトル部分に投稿タイトルを挿入
        postTitleElement.textContent = postTitle;
  
        // モーダル表示
        modal.style.display = 'flex';
      });
    });
  
    // 削除ボタンがクリックされたときの処理
    confirmDeleteButton.addEventListener('click', function() {
      if (!postIdToDelete) return;  // 削除対象が設定されていない場合は何もしない
  
      // 動的にフォームを作成して送信
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `/posts/${postIdToDelete}`;
  
      // CSRFトークンを追加
      const csrfToken = document.querySelector('[name="csrf-token"]').content;
      const csrfInput = document.createElement('input');
      csrfInput.type = 'hidden';
      csrfInput.name = 'authenticity_token';
      csrfInput.value = csrfToken;
      form.appendChild(csrfInput);
  
      // DELETEメソッド用の隠しフィールドを追加
      const methodInput = document.createElement('input');
      methodInput.type = 'hidden';
      methodInput.name = '_method';
      methodInput.value = 'DELETE';
      form.appendChild(methodInput);
  
      // フォームを送信
      document.body.appendChild(form);
      form.submit();
    });
  
    // キャンセルボタンがクリックされたとき
    cancelDeleteButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // モーダルの右上のばつ印がクリックされたとき
    closeModalButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    // モーダル外をクリックしたときにも閉じる
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';  // モーダルを非表示
      }
    });
  }); 
  
  
  