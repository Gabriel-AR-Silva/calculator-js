
$(function(){
  var numberOne;
  var numberTwo;
  var operator;
  var output = $('#output');
  //When the user clicks on the numeric button, the number clicked on the "output" must be added

  //Create an event for clicking the numeric button
  $('.btn').on('click', function(){
      // The "this" refers to the number clicked
      // Take the contents of the button that was clicked and saved in the various number
      let number = $(this).val();

      //Takes the output value and saves at the various output
      let screenNumber = output.val();

      //Adds in output the previous value and the number clicked
      $("#output").val(screenNumber + number);
  });

  // When you click an operator, you save the number that was typed.
  // Delete the output. Saves the operation that was clicked. Give error if you don't have a number entered
  $(".btn_add").on('click', function(){
      if(output.val()==''){
          //Show alert
          alert("Typing a number:");
          //exit the function
          return;
      }

      numberOne = output.val();
      output.val('');
      operator = '+';

  })
  $(".btn_sub").on('click', function(){
      if(output.val()==''){
          //Show alert
          alert("Typing a number:");
          //exit the function
          return;
      }

      numberOne = output.val();
      output.val('');
      operator = '-';

  })
  $(".btn_div").on('click', function(){
      if(output.val()==''){
          //Show alert
          alert("Typing a number:");
          //exit the function
          return;
      }

      numberOne = output.val();
      output.val('');
      operator = '/';

  })
  $(".btn_mult").on('click', function(){
      if(output.val()==''){
          //Show alert
          alert("Typing a number:");
          //exit the function
          return;
      }

      numberOne = output.val();
      output.val('');
      operator = '*';

  })
  // When clicking on the "equal" block will calculate according to the saved operator and show the result in the output
  $(".btn_igual").on('click', function(){
      if(output.val() == ''){
          //Show alert
          alert("Typing a number:");
          //Exit the function
          return;
      }
      numberTwo = output.val(); 
      if(operator == '+'){
          let result = parseFloat(numberOne) + parseFloat(numberTwo);
          output.val(result);
      }
      if(operator == '-'){
          let result = parseFloat(numberOne) - parseFloat(numberTwo);
          output.val(result);
      }
      if(operator == '/'){
          let result = parseFloat(numberOne) / parseFloat(numberTwo);
          output.val(result);
      }
      if(operator == '*'){
          let result = parseFloat(numberOne) * parseFloat(numberTwo);
          output.val(result);
      }
  })

  $('.btn_cancel').on('click', function(){
      output.val('');
  })
  $('.btn_cancel_geral').on('click', function(){
      output.val('');
      operator = 0;
  })
});
