var todo_list = [];

function amitFunction() {

        var item = document.getElementById('task').value;
        if(item.length<6){
             alert('Your text must have a least 6 chars');
             return;
        }else if(item.length>42){
            alert('Your text must have less than 42 chars');
            return; 
        }

        var pro = document.getElementById('priority').value;
        var pro_array = ['Urgent','Critical','Normal'];
        var priorities = 
            {
              'Urgent' : 0, 
              'Critical' : 1,
              'Normal' : 2,
              'If You Can' : 3
            }
        todo_list.push(
          {
            priority : pro,
            task : item
          }
        );
        todo_list.sort(function (task1, task2) {
          return priorities[task1.priority] - priorities[task2.priority];
        });

        var resultNode = document.getElementById("result");

        while (resultNode.firstChild) {
          resultNode.removeChild(resultNode.firstChild);
        }

        var priorityNode = document.getElementById("priorit");

        while (priorityNode.firstChild) {
          priorityNode.removeChild(priorityNode.firstChild);
        }
        for(var i =0; i < todo_list.length; i++)
          {
            var lia = document.createElement("p");
            var lib = document.createElement("p");

            var item_list = document.createTextNode(todo_list[i].task);
            var item_pro = document.createTextNode(todo_list[i].priority);

            lia.appendChild(item_list);
            lib.appendChild(item_pro);

            document.getElementById("result").appendChild(lia);
            document.getElementById("priorit").appendChild(lib);
            document.getElementById('task').value='';


            if(todo_list[i].priority == pro_array[0]){
                 $("p:last-child").css('color','red');
               }
            if(todo_list[i].priority == pro_array[1]){
                 $("p:last-child").css('color','orange');
               }
             if(todo_list[i].priority == pro_array[2]){
                 $("p:last-child").css('color','green');
               }

         }

         var resultNode = document.getElementById("result");
         var priorityNode = document.getElementById("priorit");

        for(var i =0; i< resultNode.childNodes.length; i++) (function(i){ 
          resultNode.childNodes[i].onclick = function() {
            $([resultNode.childNodes[i],priorityNode.childNodes[i]]).css('color','gray');
            $([resultNode.childNodes[i],priorityNode.childNodes[i]]).css("text-decoration", "line-through");
          }
          priorityNode.childNodes[i].onclick = function() {
            $([resultNode.childNodes[i],priorityNode.childNodes[i]]).css('color','gray');
            $([resultNode.childNodes[i],priorityNode.childNodes[i]]).css("text-decoration", "line-through");
          }
        })(i);

  }