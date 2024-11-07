// تحميل التعليقات من Local Storage وعرضها
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = ''; // تفريغ التعليقات القديمة

    comments.forEach((comment) => {
        const commentDiv = document.createElement('div');
        commentDiv.textContent = comment;
        commentDiv.classList.add('comment');
        commentList.appendChild(commentDiv);
    });
}

// إضافة تعليق جديد إلى Local Storage وعرضه
function addComment() {
    const commentInput = document.getElementById('comment-input');
    const commentText = commentInput.value.trim();

    if (commentText) {
        // جلب التعليقات من Local Storage
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        // إضافة التعليق الجديد إلى القائمة
        comments.push(commentText);
        // حفظ التعليقات المحدثة في Local Storage
        localStorage.setItem('comments', JSON.stringify(comments));
        // إعادة تحميل التعليقات المحدثة على الصفحة
        loadComments();
        // تفريغ حقل الإدخال
        commentInput.value = '';
    }
}

// استدعاء دالة تحميل التعليقات عند فتح الصفحة
window.onload = loadComments;
