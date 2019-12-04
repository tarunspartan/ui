const clicked = (i) => {
    switch (i) {
        case 'wifi':
            let WAelementToggle = document.getElementById('wifiactive');
            let WelementToggle = document.getElementById(`${i}`);
            let WelementIcon = document.getElementById('i'+`${i}`);
            WelementToggle.classList.length == 2 ? WelementToggle.classList.remove('on') & WAelementToggle.classList.remove('wifiactive') : WelementToggle.classList.add('on') & WAelementToggle.classList.add('wifiactive');
            WelementIcon.classList.length ==3 ? WelementIcon.classList.remove(`${i}`) : WelementIcon.classList.add(`${i}`);
            break;
        case 'bluetooth':
            let BAelementToggle = document.getElementById('bluetoothactive');
            let BelementToggle = document.getElementById(`${i}`);
            let BelementIcon = document.getElementById('i'+`${i}`);
            BelementToggle.classList.length == 2 ? BelementToggle.classList.remove('on') & BAelementToggle.classList.remove('bluetoothactive') : BelementToggle.classList.add('on') & BAelementToggle.classList.add('bluetoothactive');
            BelementIcon.classList.length ==3 ? BelementIcon.classList.remove(`${i}`) : BelementIcon.classList.add(`${i}`);
            break;
        case 'airplane':
            let AAelementToggle = document.getElementById('airplaneactive');
            let SElement = document.getElementById('signal');
            let SElement2 = document.getElementById('signal2');
            let AelementToggle = document.getElementById(`${i}`);
            let AelementIcon = document.getElementById('i'+`${i}`);
            AelementToggle.classList.length == 2 ? AelementToggle.classList.remove('on') & AAelementToggle.classList.remove('airplaneactive') & SElement.classList.add('signal') & SElement2.classList.add('signal2') : AelementToggle.classList.add('on') & AAelementToggle.classList.add('airplaneactive') & SElement.classList.remove('signal') & SElement2.classList.remove('signal2');
            AelementIcon.classList.length ==3 ? AelementIcon.classList.remove(`${i}`) : AelementIcon.classList.add(`${i}`);
            break;
        case 'rotation':
            let RelementToggle = document.getElementById(`${i}`);
            let RelementIcon = document.getElementById('i'+`${i}`);
            RelementToggle.classList.length == 2 ? RelementToggle.classList.remove('on') : RelementToggle.classList.add('on');
            RelementIcon.classList.length ==3 ? RelementIcon.classList.remove(`${i}`) : RelementIcon.classList.add(`${i}`);
            break;
        case 'location':
            let LAelementToggle = document.getElementById('locationactive');
            let LelementToggle = document.getElementById(`${i}`);
            let LelementIcon = document.getElementById('i'+`${i}`);
            LelementToggle.classList.length == 2 ? LelementToggle.classList.remove('on') & LAelementToggle.classList.remove('locationactive') : LelementToggle.classList.add('on') & LAelementToggle.classList.add('locationactive');
            LelementIcon.classList.length ==3 ? LelementIcon.classList.remove(`${i}`) : LelementIcon.classList.add(`${i}`);
            break;
        default:
            break;
    }
}