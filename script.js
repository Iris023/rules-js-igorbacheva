alert("Проверим, хорошо ли ты знаешь правила ПДД");

const button = document.querySelector('.btn');
gsap.to(".first", {opacity: 1, delay: .7, duration: 2})

function startAnimation(){
    const q1_a1 = document.querySelector("#q1_a1");
    const q1_a2 = document.querySelector("#q1_a2");
    const q1_a3 = document.querySelector("#answer1");
    q1_a1.addEventListener('click', animateSecondQ);
    q1_a2.addEventListener('click', animateSecondQ);
    q1_a3.addEventListener('click', animateSecondQ);
    function animateSecondQ(){
        gsap.to(".second", {delay: .3, opacity: 1, duration: 2})
        const q2_a1 = document.querySelector("#answer2");
        const q2_a2 = document.querySelector("#q2_a2");
        const q2_a3 = document.querySelector("#q2_a3");
        q2_a1.addEventListener('click', animateThirdQ);
        q2_a2.addEventListener('click', animateThirdQ);
        q2_a3.addEventListener('click', animateThirdQ);
        function animateThirdQ(){
            gsap.to(".third", {delay: .3, opacity: 1, duration: 2})
            const q3_a1 = document.querySelector("#q3_a1");
            const q3_a2 = document.querySelector("#answer3");
            const q3_a3 = document.querySelector("#q3_a3");
            q3_a1.addEventListener('click', animateFourthQ);
            q3_a2.addEventListener('click', animateFourthQ);
            q3_a3.addEventListener('click', animateFourthQ);
            function animateFourthQ(){
                gsap.to(".fourth", {delay: .3, opacity: 1, duration: 2})
                const q4_a1 = document.querySelector("#q4_a1");
                const q4_a2 = document.querySelector("#q4_a2");
                const q4_a3 = document.querySelector("#answer4");
                q4_a1.addEventListener('click', animateFifthQ);
                q4_a2.addEventListener('click', animateFifthQ);
                q4_a3.addEventListener('click', animateFifthQ);
                function animateFifthQ(){
                    gsap.to(".fifth", {delay: .3, opacity: 1, duration: 2})
                    const q5_a1 = document.querySelector("#answer5");
                    const q5_a2 = document.querySelector("#q5_a2");
                    const q5_a3 = document.querySelector("#q5_a3");
                    q5_a1.addEventListener('click', animateSixthQ);
                    q5_a2.addEventListener('click', animateSixthQ);
                    q5_a3.addEventListener('click', animateSixthQ);
                    function animateSixthQ(){
                        gsap.to(".sixth", {delay: .3, opacity: 1, duration: 2})
                        const q6_a1 = document.querySelector("#q6_a1");
                        const q6_a2 = document.querySelector("#answer6");
                        const q6_a3 = document.querySelector("#q6_a3");
                        q6_a1.addEventListener('click', animateSeventhQ);
                        q6_a2.addEventListener('click', animateSeventhQ);
                        q6_a3.addEventListener('click', animateSeventhQ);
                        function animateSeventhQ(){
                            gsap.to(".seventh", {delay: .3, opacity: 1, duration: 2})
                            const q7_a1 = document.querySelector("#answer7");
                            const q7_a2 = document.querySelector("#q7_a2");
                            const q7_a3 = document.querySelector("#q7_a3");
                            q7_a1.addEventListener('click', animateResult);
                            q7_a2.addEventListener('click', animateResult);
                            q7_a3.addEventListener('click', animateResult);
                            function animateResult(){
                                gsap.to(".btn", {opacity: 1, duration: 0.5})
                            }
                        }      
                    }
                }
            }
        }
    }        
}
startAnimation();





const correctAnswers = document.querySelector('#result');

button.addEventListener('click', result);

function result(e){
    e.preventDefault();
    button.classList.remove('animated_btn');
    let points = 0;
    if (document.querySelector('#answer1').checked){
        points++;
    }
    if (document.querySelector('#answer2').checked){
        points++;
    }
    if (document.querySelector('#answer3').checked){
        points++;
    }
    if (document.querySelector('#answer4').checked){
        points++;
    }
    if (document.querySelector('#answer5').checked){
        points++;
    }
    if (document.querySelector('#answer6').checked){
        points++;
    }
    if (document.querySelector('#answer7').checked){
        points++;
    }

    correctAnswers.textContent = `Правильных ответов:  ${points} из 7`;
}
