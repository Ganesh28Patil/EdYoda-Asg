 // Question 1:
    // var str1 = 'Today is';
    // var str2 = '      a beautiful day     '
    // var str3 = ' In Hawaii.     '
    // Result = 'Today is a beautiful day In Hawaii.'
    // Use the str1, str2, str3 variables to create the Result string. 
    // Keep the extra spaces, lowercase and uppercase letters in mind.

    var str1 = 'Today is';
    var str2 = '      a beautiful day     ';
    var str3 = ' In Hawaii.     ';
    var Result = 'Today is a beautiful day In Hawaii.'; // Given Result in Question.
    var result = str1 +" "+ str2.trim() +" "+ str3.trim();
    console.log(result); //Today is a beautiful day In Hawaii.
    console.log(Result == result); // true, it means result matches