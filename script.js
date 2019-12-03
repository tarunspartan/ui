const clicked = (i) => {
    switch (i) {
        case 'wifi':
            let WelementToggle = document.getElementById(`${i}`);
            let WelementIcon = document.getElementById('i'+`${i}`);
            WelementToggle.classList.length == 2 ? WelementToggle.classList.remove('on') : WelementToggle.classList.add('on');
            WelementIcon.classList.length ==3 ? WelementIcon.classList.remove(`${i}`) : WelementIcon.classList.add(`${i}`);
            break;
        case 'bluetooth':
            let BelementToggle = document.getElementById(`${i}`);
            let BelementIcon = document.getElementById('i'+`${i}`);
            BelementToggle.classList.length == 2 ? BelementToggle.classList.remove('on') : BelementToggle.classList.add('on');
            BelementIcon.classList.length ==3 ? BelementIcon.classList.remove(`${i}`) : BelementIcon.classList.add(`${i}`);
            break;
        case 'airplane':
            let AelementToggle = document.getElementById(`${i}`);
            let AelementIcon = document.getElementById('i'+`${i}`);
            AelementToggle.classList.length == 2 ? AelementToggle.classList.remove('on') : AelementToggle.classList.add('on');
            AelementIcon.classList.length ==3 ? AelementIcon.classList.remove(`${i}`) : AelementIcon.classList.add(`${i}`);
            break;
        case 'rotation':
            let RelementToggle = document.getElementById(`${i}`);
            let RelementIcon = document.getElementById('i'+`${i}`);
            RelementToggle.classList.length == 2 ? RelementToggle.classList.remove('on') : RelementToggle.classList.add('on');
            RelementIcon.classList.length ==3 ? RelementIcon.classList.remove(`${i}`) : RelementIcon.classList.add(`${i}`);
            break;
        case 'location':
            let LelementToggle = document.getElementById(`${i}`);
            let LelementIcon = document.getElementById('i'+`${i}`);
            LelementToggle.classList.length == 2 ? LelementToggle.classList.remove('on') : LelementToggle.classList.add('on');
            LelementIcon.classList.length ==3 ? LelementIcon.classList.remove(`${i}`) : LelementIcon.classList.add(`${i}`);
            break;
        default:
            break;
    }
}