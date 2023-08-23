const sidebaritem=document.querySelectorAll('.sidebar-item');
const messages=document.querySelector('#messages');
const messagehighlight=document.querySelector('#message-highlight');
const message=document.querySelectorAll('.message');
const messagesearch=document.getElementById('message-search')

//remove active class from each item-so only one remains active at a time
const Changeactiveitem =() =>{
    sidebaritem.forEach(item => {
        item.classList.remove('active');
    })
}

// add active class for each item
sidebaritem.forEach(item => {
       item.addEventListener('click',()=>{
            Changeactiveitem();
            item.classList.add('active');
            if(item.id == 'notifications'){
                document.querySelector('.notification-popup').style.display='block';
            }
            else{
                document.querySelector('.notification-popup').style.display='none';
            }
       })
})

//-----------MESSAGES--------------------\
//hightlights messages card when message sidebar item is clicked
messages.addEventListener('click',()=>{
    messagehighlight.style.boxShadow='0 0 1rem var(--color-primary)';
    setTimeout(()=>{
    messagehighlight.style.boxShadow='none';
    },1500)
})

//adding search functionality to the message card right section
messagesearch.addEventListener('keyup',()=>{
    const val=messagesearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat=>{
        let name=chat.querySelector('h4').textContent.toLowerCase(); //when going for all,returns a typeerror in console stating cannot read lowercase()
        if(name.indexOf(val)!=-1){
            chat.style.display='block';
        }
        else{
            chat.style.display='none';
        }
    })
})