const benefits = document.querySelector('.benefits');
const membership = document.querySelector('#membership');

let firstBenefit = document.createElement('li');
let secondBenefit = document.createElement('li');
let thirdBenefit = document.createElement('li');
let fourthBenefit = document.createElement('li');

membership.addEventListener('change', () => {
    if (membership.value == 'gold_membership') {
        firstBenefit.innerHTML = 'BCOB Weekly update';
        secondBenefit.innerHTML = 'Business Elite Training';
        thirdBenefit.innerHTML = 'BCOB Monthly City Council';
        fourthBenefit.innerHTML = 'Advertising';
    
        benefits.appendChild(firstBenefit);
        benefits.appendChild(secondBenefit);
        benefits.appendChild(thirdBenefit);
        benefits.appendChild(fourthBenefit);
    
    } else if (membership.value == 'bronze_membership') {
        firstBenefit.innerHTML = 'BCOB Weekly update';
        secondBenefit.innerHTML = 'Business Elite Training';
        thirdBenefit.innerHTML = 'BCOB Monthly City Council';
        fourthBenefit.innerHTML = 'Event Discount';
    
        benefits.appendChild(firstBenefit);
        benefits.appendChild(secondBenefit);
        benefits.appendChild(thirdBenefit);
        benefits.appendChild(fourthBenefit);

    } else if (membership.value == 'silver_membership') {
        firstBenefit.innerHTML = 'BCOB Weekly update';
        secondBenefit.innerHTML = 'Business Elite Training';
        thirdBenefit.innerHTML = 'BCOB Monthly City Council';
        fourthBenefit.innerHTML = 'Express Access';
    
        benefits.appendChild(firstBenefit);
        benefits.appendChild(secondBenefit);
        benefits.appendChild(thirdBenefit);
        benefits.appendChild(fourthBenefit);
    
    } else if (membership.value == 'np_membership') {
        firstBenefit.innerHTML = 'BCOB Quarterly update';
        secondBenefit.innerHTML = 'Management Training';
        thirdBenefit.innerHTML = 'BCOB Monthly City Council';
    
    
        benefits.appendChild(firstBenefit);
        benefits.appendChild(secondBenefit);
        benefits.appendChild(thirdBenefit);
    }    
});

