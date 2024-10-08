document.getElementById('addRow').addEventListener('click', function() {
    var table = document.getElementById('myTable');
    var name = document.getElementById('nameInput').value;
    var age = document.getElementById('ageInput').value;

    if (name && age) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = name;
        cell2.innerHTML = age;
        cell3.innerHTML = '<button class="delete-button">删除</button>';

        document.getElementById('nameInput').value = '';
        document.getElementById('ageInput').value = '';

        // 排序表格
        sortTableByAge();

        // 为删除按钮添加事件监听器
        cell3.firstChild.addEventListener('click', function() {
            table.deleteRow(row.rowIndex);
        });
    } else {
        alert('姓名和年龄不能为空！');
    }
});

function sortTableByAge() {
    var table = document.getElementById('myTable');
    var rows = Array.from(table.querySelectorAll('tr'));
    var sortedRows = rows.sort(function(a, b) {
        var ageA = parseInt(a.cells[1].innerHTML);
        var ageB = parseInt(b.cells[1].innerHTML);
        return ageA - ageB;
    });

    table.innerHTML = '';
    sortedRows.forEach(function(row) {
        table.appendChild(row);
    });
}