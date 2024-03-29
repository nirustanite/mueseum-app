
function doesNotPassAllValidations(name, msg){

   if(!name || !msg){
        alert("You haven't entered a name or message");
        return true;
    }

    if((name && !msg) || (!name && msg)
    {
        alert("You haven't entered in one of the field");
        return true;
    }

    if(msg.length > 200){
        alert("Your comment is too long")
    }

    return false;
}


function submitComment()
{
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg');
    const msg = textArea.value;
    
    if(doesNotPassAllValidations(name,msg)){
        return null;
    }

    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h3.innerHTML = `${name} said:`;
    p.innerHTML = msg;
    comment.classList.add('comment');
    comment.appendChild(h3);
    comment.appendChild(p);

    const commentSection = document.getElementById('comments');
    commentSection.appendChild(comment);

    inputField.value = null;
    textArea.value = null;
}