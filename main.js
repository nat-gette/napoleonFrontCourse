let table = document.getElementById("table");

let text ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt cum, error adipisci ex delectus suscipit enim pariatur officia voluptatibus tenetur velit quae illum, ipsam consectetur dignissimos debitis molestiae vitae quod exercitationem dolor quas totam odio a? Nulla, sed et. Aliquam nam hic perferendis exercitationem aspernatur accusantium, esse quisquam tenetur ratione voluptate sit nihil voluptatem alias. Asperiores cum perspiciatis dolores ut doloribus, excepturi nam eum autem provident neque, possimus necessitatibus quas tempore numquam ab, animi voluptatem at nostrum impedit sed laudantium! Accusantium enim suscipit sed vitae dignissimos, exercitationem optio ad quidem! Exercitationem, quaerat. Possimus itaque asperiores distinctio officia totam aliquid!';

let textArray=text.split(' ');

textArray.forEach((element, index) => {
    let tr = document.createElement('tr');
    let tdNum = document.createElement('tr'); 
    let td = document.createElement('td');
    td.innerText = element;
    tdNum.innerText = index+1;
    tr.appendChild(tdNum);
    tr.appendChild(td);
    table.appendChild(tr);
})