const sidebaritem=document.querySelectorAll('.sidebar-item');
const messages=document.querySelector('#messages');
const messagehighlight=document.querySelector('#message-highlight');

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

