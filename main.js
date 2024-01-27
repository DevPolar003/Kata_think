    const button = document.querySelector('.button')
       const input = document.querySelector('.input-task')
       const listacompleta= document.querySelector('.list-task')
       let minhalista = []

        function Adicionarnovatarefa(){
          
        minhalista.push({
          tarefa: input.value,
          concluida: false
        })
          input.value = ''
          mostrarnatela()
        }
        function mostrarnatela(){

         let Novalist = ''

         minhalista.forEach ((item,index) => {
          Novalist = Novalist + `

          <li class="task ${item.concluida && "done"}">
             <img src="img/afimative.png" alt="none" onclick='confirmar(${index})'>
              <p>${item.tarefa}</p>
          <img src="img/trash.png" alt="none" onclick='deletar(${index})'>
      </li>
      ` 

         })
         
         listacompleta.innerHTML = Novalist
         
         localStorage.setItem('lista',JSON.stringify(minhalista))
        }
      
         function confirmar (index){
          minhalista[index].concluida = !minhalista[index].concluida
          mostrarnatela()
        }
          function deletar(index){
            minhalista.splice(index, 1)
            mostrarnatela()
          }

          function recarregar() {
            const localStorage = localStorage.getItem('lista')
            minhalista=JSON.parse(localStorage)
            console.log(localStorage)
            mostrarnatela()
            recarregar()
          }
          button.addEventListener('click', Adicionarnovatarefa)