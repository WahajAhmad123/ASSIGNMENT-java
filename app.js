// add any tag
// var main=document.getElementById('main');
// function add(){
//     console.log('e')
//     var paragragh=document.createElement("p");
//     var text=document.createTextNode('A B C D');
//     paragragh.appendChild(text);
//     main.appendChild(paragragh);
//     
// }


// function noreload(e){
//     e.preventDefault();
// }
var inp1 = document.getElementById('inp');
function list() {

    if (inp1.value == "") {

    }

    else {

        var ul = document.getElementById('ul');
        var li = document.createElement('li');
        var editbutton = document.createElement('button');
        editbutton.setAttribute('onclick', 'editted()');
        var ebuttontext = document.createTextNode("Edit");
        var delbutton = document.createElement('button');
        delbutton.setAttribute('onclick', 'deleted()');
        var dbuttontext = document.createTextNode("Delete");
        editbutton.appendChild(ebuttontext);
        delbutton.appendChild(dbuttontext);
        var litext = document.createTextNode(inp1.value);
        li.appendChild(litext);
        li.appendChild(editbutton);
        li.appendChild(delbutton);
        ul.appendChild(li);



        function delall(e) {
            ul.removeChild(li);
        }
    };
    inp1.value = "";

}