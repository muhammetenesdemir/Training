
const panels= document.querySelectorAll('.panel');

function toggleOpen(){
    console.log('Hello');
    this.classlist.toggle('open');
}
    function toggleActive(e){
        console.log (e.propertyName);
        if (e.propertyName.includes('flex')){
            this.classlist.toggle('open-active');
        }
        
    }
    


panels.forEach(panel => panel.addEventListener('click',toggleOpen));
panels.forEach(panel => panel.addEventListener('transitioned',toggleActive));
