Fire();
function Fire(){
    const target = document.querySelector(".justify-content-center");
    if(target && !document.querySelector("#vl-survey-container")){
        const header = "Boyner.com.tr'deki Alışveriş deneyimini başkalarına da tavsiye eder misin?";
        const isMobile = window.innerWidth < 768 ? true : false;
        const style = document.createElement('style');
        style.innerHTML = `
            #vl-survey-container{
                width: 100%;
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1.5em;
                padding: 2em 0;
                margin-bottom: 3em;
                transition: 2s all;
                background: rgb(236,249,255);
                background: linear-gradient(0deg, rgba(236,249,255,1) 0%, rgba(253,229,255,0.9976365546218487) 100%);
            }

            #vl-survey-container .vl-h{
                font-size: 1em;
                font-weight: 600;
            }

            #vl-survey-container .vl-point-container{
                display: flex;
                gap: .8em;
            }

            #vl-survey-container .vl-point{
                font-size: 1.2em;
                width: 3em;
                height: 3em;
                border: 1px solid rgba(0,0,0,.2);
                padding: 0.7em;
                text-align: center;
                background-color: #fff;
                border-radius: 0.5px;
                cursor: pointer;
                transition: ease .2s all;
            }

            #vl-survey-container .vl-point:hover{
                background-color: #82018b;
                color: white;
                border: 1px solid rgba(ff,ff,ff,.2);
            }

            #vl-survey-container .vl-sub-container{
                width: 67em;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: -1em;
                font-size: .7em;
                font-weight: 600;
            }

            @media screen and (max-width: 768px) {
                #vl-survey-container{
                    height: 320px;
                    margin: 1em 0 2em 0;
                }
                #vl-survey-container .vl-point-container{
                    flex-direction: column;
                    align-items: center;                
                }
                #vl-survey-container .vl-inner-points{
                    display: flex;
                    gap: 2vw;
                }
                #vl-survey-container .vl-h{
                    font-size: 4vw;
                    padding: 0 4vw;
                    text-align: center;
                }
                #vl-survey-container .vl-sub-container{
                    width: 85vw;
                    font-size: 2.7vw;
                }
            }
            
        `;
        document.head.append(style);
        const survey = document.createElement('div');
        survey.id = "vl-survey-container";
        survey.innerHTML = `
            <span class="vl-h">💬 ${header}</span>
            <div class="vl-point-container">
            </div>
            <div class="vl-sub-container">
                <span>Kesinlikle Etmem</span>
                <span>Kesinlikle Ederim</span>
            </div>
        `;
        target.append(survey);
        putPoints();

        function putPoints() {
            const pointContainer = document.querySelector('.vl-point-container');
            if(isMobile){
                const top = document.createElement("div");
                const bottom = document.createElement("div");
                top.className = "vl-inner-points";
                bottom.className = "vl-inner-points";
                pointContainer.append(top, bottom);
            }
            for(let i=0; i<11; i++){
                const point = document.createElement('span');
                point.className = "vl-point";
                point.textContent = i;
                point.addEventListener('click', (e) => {
                    pointContainer.style.pointerEvents = "none";
                    console.log(e.target.textContent);
                    survey.style.height = "100px";
                    survey.innerHTML = `<span>Geri bildiriminiz için teşekkür ederiz.</span>`;
                    setTimeout(() => { survey.style.opacity = "0"; }, 2000);
                });
                if(isMobile){
                    if(i < 6){
                        pointContainer.querySelector(".vl-inner-points").append(point);
                    }
                    else{
                        pointContainer.querySelector(".vl-inner-points:last-child").append(point);
                    }
                }
                else{
                    pointContainer.append(point);
                }
            }
        }
    }
}
