const today=new Date()
console.log(today)

const thisYear=today.getFullYear();
console.log(thisYear)

const footer=document.querySelector('footer')
console.log(footer)

const copyright = document.createElement("p")
console.log(copyright)

copyright.innerHTML=`<small>&copy; ${thisYear} Natalia Grigoryeva</small>`
console.log(copyright)

footer.appendChild(copyright)

const skills = ["Coding JavaScript","WebDesign",'Photography'];
console.log(skills)


const skillsSelection=document.getElementById('skills')
console.log(skillsSelection)
if (skillsSelection !== null) {
    const skillsList=skillsSelection.querySelector('ul')
    console.log(skillsList)
    
    for(i=0;i<skills.length;i++){
        
        const skill=document.createElement('li')
        skill.innerHTML=`${skills[i]}`
        skillsList.appendChild(skill)
    
    }
    console.log(skillsList)
}

const messageForm=document.getElementsByName('leave_message')[0]

messageForm.addEventListener('submit', (e) =>{
    e.preventDefault(); //don't refresh the page
    const name=e.target.name.value;
    const email=e.target.email.value;
    const message=e.target.message.value;
    //console.log (name, email, message');
    console.log(`Name: ${name}, email: ${email}, message: ${message}`);

    const messageSection=document.getElementById('messages');
    const messageList=messageSection.getElementsByTagName('ul')[0];
    const newMessage=document.createElement('li');
    newMessage.innerHTML=`
        <a href="mailto:${email}"> ${name} </a>
        <span> wrote: ${message}</span>`
    // messageList.appendChild(newMessage) 
    console.log(newMessage)

    const removeButton=document.createElement('button');
    removeButton.innerText='remove';
    removeButton.type='button';
    removeButton.addEventListener('click', (event)=>{
        const entry=event.target.parentNode //find the button's parent element using DOM Traversal (hint: parentNode property) and store it in a variable named entry
        entry.remove();

    })

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage)

    messageForm.reset();

})