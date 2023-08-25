let root=document.documentElement;

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
const fontsizes=document.querySelectorAll('.choose-size span');
//COLOR-PALETTE
const colorpalette=document.querySelectorAll('.pick-color span');
//BACKGROUND-PICKER
const backgroundpicker=document.querySelectorAll('.light,.dim,.lights-out');


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
//removing the active class
const removeSizeselector=()=>{
    fontsizes.forEach(size=>{
        size.classList.remove('active');
    })
}
//js for adding active class and changing font-size
fontsizes.forEach(size => {
    size.addEventListener('click',()=>{
        
        removeSizeselector();
        let fontsize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontsize='10px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontsize='13px';
            root.style.setProperty('--sticky-top-left','5.4rem');
            root.style.setProperty('--sticky-top-right','-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontsize='16px';
            root.style.setProperty('--sticky-top-left','-2rem');
            root.style.setProperty('--sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontsize='19px';
            root.style.setProperty('--sticky-top-left','-5rem');
            root.style.setProperty('--sticky-top-right','-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontsize='22px';
            root.style.setProperty('--sticky-top-left','-10rem');
            root.style.setProperty('--sticky-top-right','-33rem');
        }

        //assign that new fontsize variable to change the size of html document
        document.querySelector('html').style.fontSize=fontsize;
    })
});

//Changing colors using modal now
//removing the active class-->need to make this more usable!
const removecolorselector=()=>{
    colorpalette.forEach(thing=>{ //also if I could use same names.
        thing.classList.remove('active');
    })
}
//js for adding active class and changing hues
colorpalette.forEach(thing=>{
    thing.addEventListener('click',()=>{
        removecolorselector();
        let colorhue;
        thing.classList.add('active');

        if(thing.classList.contains('color-1')){
            colorhue=252;
        }
        else if(thing.classList.contains('color-2')){
            colorhue=52;
        }
        else if(thing.classList.contains('color-3')){
            colorhue=352;
        }
        else if(thing.classList.contains('color-4')){
            colorhue=152;
        }
        else if(thing.classList.contains('color-5')){
            colorhue=202;
        }
        //assigning colorhue to the html class
        root.style.setProperty('--primary-color-hue',colorhue);
    })
})

//Changing background using modal now
//removing the active class
const removebackgroundselector=()=>{
    backgroundpicker.forEach(sub=>{
        sub.classList.remove('active');
    })
}
//a function to switch for all 3 properties instead of writing it in bottom
const changeBG=(something)=>{
    root.style.setProperty('--dark-color-lightness',something[0]);
    root.style.setProperty('--white-color-lightness',something[1]);
    root.style.setProperty('--light-color-lightness',something[2]);
}

//js for switching the darkcolorlightness,light...".....,white....."......
backgroundpicker.forEach(sub=>{
    sub.addEventListener('click',()=>{
        removebackgroundselector();
        let backgroundproperty;
        sub.classList.add('active');

        if(sub.classList.contains('light')){
            backgroundproperty=['17%','100%','95%'];
        }
        else if(sub.classList.contains('dim')){
            backgroundproperty=['90%','20%','15%'];
        }
        else if(sub.classList.contains('lights-out')){
            backgroundproperty=['95%','10%','0%']; 
        }
        //calling the changeBG function for root style changes
        changeBG(backgroundproperty);
    })
})