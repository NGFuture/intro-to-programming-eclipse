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
console.log(messageForm);
messageForm.addEventListener('submit', (e) =>{
    console.log(e)

})