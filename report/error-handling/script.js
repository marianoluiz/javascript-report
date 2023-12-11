//actual errorhandling
      //para di mag crash

      try {
        var num = 20;
        num.toUpperCase();
      } catch (error) {

      }

//catch block
	//(error) can be named anything like error,e,err its like a parameter

	//no errors were found cuz we catched it pero wala laman yung catch block so walang mangyayari


      try {
        var num = 20;
        num.toUpperCase();
      } catch (error) {
        console.log(error instanceof TypeError)
        console.log(error.message)
      }

      //shows true

      // error.message is from the reference
      //we have handled error gracefully without crashing, this is gonna be handy soon when we use external libraries that we dont know how  will they behave.