let element = document.querySelector('.exibir')
        let result = false

        function reset() {
            element.innerHTML = ''
        }

        function addNum(num) {
            if (result == true) {
                reset()
                result = false
            }
            element.innerHTML += `${num}`
        }

        function calc() {
            try{
                element.innerHTML = ` = ${Function("return " + element.innerHTML)()}`
            } catch(SyntaxError){
                element.innerHTML = ` Expressão inválida`
            } 
            result = true
        }