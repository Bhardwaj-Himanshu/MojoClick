//SIDEBAR
const sidebaritem=document.querySelectorAll('.sidebar-item');
//MESSAGES AND MESSAGE-CARD
const messages=document.querySelector('#messages');
const messagehighlight=document.querySelector('#message-highlight');
const message=document.querySelectorAll('.message');
const messagesearch=document.getElementById('message-search');
//THEME AND CUSTOMISATION
const theme=document.querySelector('#theme');
const thememodal=document.querySelector('.customise-theme');
//FONTS
const fontsize=document.querySelector('.choose-size span')

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

//-----------CUSTOMISE-THEME------------
//Modal open
theme.addEventListener('click',()=>{
    thememodal.style.display='grid';
    thememodal.style.boxShadow='0 0 1rem var(--color-primary)';
})
//Modal Close
thememodal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('customise-theme')){
        thememodal.style.display='none';
        theme.classList.remove('active');
    }
})

//Changing the font-size using modal now
fontsize.forEach(item=>{
    item.addEventListener('click',()=>{
        
    })
})