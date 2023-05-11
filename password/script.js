 var rang = document.querySelector('#rangeInp')
        var span = document.querySelector('.rangeval')
        var container = document.querySelector('.container')
        var string = 'qazwsxedcrfvtgbyhnujmiklop123456789QWERTYUIOPASDFGHJKLZXCVBNM'
        var myPass = document.querySelector('#myPass')
        var generatBtn = document.querySelector('.sub')
        const bodyy = document.body 

    
        generatBtn.addEventListener('click', () => {

            var pass_len = document.querySelector('#rangeInp').value
            const includSp = document.querySelector('#sPc').checked
            let password = ''
            let finalSrting = string

            if(includSp){
                finalSrting+= '~!@#$%^&*()_+}"?><,./"; '
            }
            for(i=0 ; i< pass_len ; i++){
                let str = finalSrting[Math.floor(Math.random() * finalSrting.length)]
                password+= str
            }
            myPass.value = password
        })
        
        rang.addEventListener('input',function(){
            span.innerText = rang.value
        })


        window.addEventListener('load',function(){

            setInterval(clocke,1000)

            rang.value = 8
            span.textContent = rang.value

            const boxMsg = document.createElement('div')
            boxMsg.classList.add('loadPage')
            
            setTimeout(()=>{
                boxMsg.classList.add('showLoad')
            },600)

            boxMsg.innerHTML = `<h2>Welecome Back dear</h2>

                                <p>You are loking for a strong password</p>
                                <div class="box_btn_load">
                                    <button id="confirm"  type="button" >Yes</button>
                                    <button id="refuse" type="button" >No</button>
                                </div>` 
            
            const btnConfirm = boxMsg.querySelector('#confirm')
            const btnrefuse = boxMsg.querySelector('#refuse')

            btnConfirm.addEventListener('click', function(e){
                setTimeout(()=>{
                    boxMsg.classList.remove('showLoad')
                    container.classList.add('show')
                },300)

            })

            bodyy.appendChild(boxMsg)   
        })


        var btnCopy = document.querySelector("#copy")
        var err = document.querySelector('.alert-error')


        btnCopy.addEventListener('click',()=>{
            if(myPass.value){
                navigator.clipboard.writeText(myPass.value)
                myPass.value = 'text copied'
                let oldIcon = btnCopy.firstElementChild
                let newIcon  = document.createElement('i')
                newIcon.setAttribute('class','bi bi-clipboard-check')
                
                btnCopy.replaceChild(newIcon, oldIcon) 
                setTimeout(()=>{
                    myPass.value = '';
                    btnCopy.replaceChild(oldIcon, newIcon)
                },1000)
            }
            else{
                err.classList.add('show')
                setTimeout(()=>{
                    err.classList.remove('show')
                },1200)
            }
        })


        var clock = document.querySelector('#clock')


        function clocke(){
            var d = new Date()
            let hours = d.getHours()
            let min= d.getMinutes()
            let s = d.getSeconds()
            let $s , $min , $hours ;
            if (s<10){
                $s = "0" + s
            }
            else{
                $s = s
            }
            if(min<10){
                $min = "0" + min
            }
            else{
                $min = min
            }
            if(hours<10){
                $hours = "0" + hours
            }
            else{
                $hours = hours
            }
            if(s==60){
                s=0 ;
                min+=1
            }
            if(min==60){
                min=0
                hours+=1
            }
            clock.textContent = `${$hours} : ${$min} : ${$s}` 
        }
