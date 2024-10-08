document.getElementById('addItem').addEventListener('click', function() {
    const input = document.getElementById('itemInput');
    const newItem = input.value.trim();
    if (newItem) {
        addListItem(newItem);
        input.value = '';
    } else {
        alert('请输入新项内容！');
    }
});

function addListItem(text) {
    const list = document.getElementById('myList');
    const li = document.createElement('li');
    li.innerHTML = `
                <span>${text}</span>
                <button class="edit-button">编辑</button>
                <button class="delete-button">删除</button>
            `;
    const span = li.querySelector('span');
    const editButton = li.querySelector('.edit-button');
    const deleteButton = li.querySelector('.delete-button');

    editButton.onclick = function() {
        const newText = prompt('编辑内容:', text);
        if (newText !== null) {
            span.textContent = newText;
        }
    };

    deleteButton.onclick = function() {
        list.removeChild(li);
    };

    list.appendChild(li);
}