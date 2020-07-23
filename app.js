//  CHAPTER 20  to 25
//  TASK 1
// var firstname=prompt('ENTER FIRST NAME')
// var lastname=prompt('ENTER LAST NAME')
// document.write(firstname + lastname)

//  TASK 2
// var n=prompt('ENTER YOUR FAVORITE MOBILE ')
// document.write("MY FAVORITE MOBILE IS =" + n +"<br>" )
// document.write(" LENGTH IS =" + n.length)

//  TASK 3
// var str="pakistan"
// var index=str.indexOf('n');
// document.write("STRING = " + str +"<br>")
// document.write("INDEX NO. IS = "+index)

//  TASK 4
// var str="HELLO WORLD"
// var index=str.lastIndexOf('L');
// document.write("STRING = " + str +"<br>")
// document.write("INDEX NO. IS = "+index)

//  TASK 5
// var str="PAKISTANI"
// var index=str.charAt(3)
// document.write("STRING = " + str +"<br>")
// document.write("INDEX = " + index )

//  TASK 6
// var firstname=prompt('ENTER FIRST NAME')
// var lastname=prompt('ENTER LAST NAME')
// document.write(firstname + lastname)

// TASK 7
// var str='HYDERABAD'
// var replace=str.replace('HYDER','ISLAM')
// document.write("STRING = " + str +"<br>")
// document.write("REPLACE = " + replace )

// TASK 8
// var  message = 'Ali and Sami are best friends.They play cricket and football together'
// var replace=message.replace('and','&').replace('and','&')
// document.write('MESSAGE =' +message +'<br>')
// document.write("REPLACE = " + replace )

// TASK 9
// var str="472"
// var num=parseInt(str);
// document.write('IN STRING ='+ typeof(str) +'<br>')
// document.write('IN NUMBER ='+ typeof(num))

// TASK 10
// var str=prompt('WRITE PEANUTS:')
// var upper=str.toUpperCase();
// document.write('LOWER CASE = '+ str +'<br>')
// document.write('UPPER CASE = '+ upper)

// TASK 11
// var str=prompt('WRITE JAVASCRIPT:')
// var upper=(str.toUpperCase().charAt(0) + str.slice(1))
// document.write('USER INPUT = '+ str +'<br>')
// document.write('TITILE CASE = '+ upper)

// TASK 12
// var int=35.36;
// var str=toString(int);                             not working
// var remove=(int.toFixed() + int.split(2));
// document.write('NUMBER ='+ int +'  ' + typeof(str) )
// document.write('RESULT ='+ remove  )

// TASK 13
// var user = prompt('ENTER USER NAME')
// if(user >= 'a' && user <='z' ||  user >= 'A' && user <='Z'  ||  user >= 0 && user <= 9   )
// { 
//     document.write(user)
// }
// else
// {
//     alert(' enter a valid username')
// }

//  TASK 14
// var user=prompt('ENTER ITEM:')
// user=user.toLowerCase();
// var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

// for(var i=0;i<=4 ;i++)
// {
// if (user === arr[i])
// {
//     alert('FOUND ITEM')
//     document.write('INDEX NO. IS = '+arr.indexOf(user))
// }
// }

// TASK 15
// var pass=prompt('ENTER PASSWORD:')
// if (pass.charAt(0) >= 0 || pass.charAt(0) <= 9)
// {
//     alert('PASSWORD CAN NOT BEGIN WITH A NUMBER' + '\n' +'ENTER VALID PASSWROD')
// }
// else
// {
//     document.write('WELCOME IN OUR WEBSITE')
// }

// TASK 16
// var n="universityofkarachi"         not working
// var arr=split(n,'\n')
// document.write(arr)

// TASK 17
// var str = prompt('ENTER PAKISTAN :')
// var last = str.slice(-1)
// document.write('LAST CHARACTER IS = '+last)

// TASK 18
// var str='The quick brown fox jumps over the lazy dog'
// var array=str.
// document.write(array)



//  CHAPTER 26  to 30

// TASK 1
// var number = +prompt('ENTER VALUE:')
// var round=Math.round(number);
// var floor=Math.floor(number);
// var ceil=Math.ceil(number);
// document.write('NUMBER'+number +'<br>')
// document.write(' Round Of Value'+ round );
// document.write(' Floor Value'+floor +'<br>')
// document.write(' Ceil Value'+ceil)

// TASK 2
// var number = +prompt('ENTER VALUE:')
// var round=Math.round(number);
// var floor=Math.floor(number);
// var ceil=Math.ceil(number);
// document.write('NUMBER'+number +'<br>')
// document.write(' Round Of Value'+ round );
// document.write(' Floor Value'+floor +'<br>')
// document.write(' Ceil Value'+ceil)

// TASK 3
// var number = +prompt('ENTER VALUE:')
// var abs=Math.abs(number)
// document.write(' NUMBER '+number +'<br>')
// document.write('ABSOLUTE NUMBER '+abs +'<br>')

// TASK 4
// var dice1 = Math.floor(Math.random()*6)
// var dice2 = Math.floor(Math.random()*4)
// document.write("DICE 6 = "+dice1 +'<br>')
// document.write("DICE 4 = "+dice2 +'<br>')

// TASK 5
// var dice = Math.floor(Math.random()*2 +1)

// if(dice === 2)
// {
//     document.write(dice+ " HEADS")
// }
// else
// {
//     document.write(dice+ " TAILS")
// }

// TASK 6
// var rand = Math.floor(Math.random()*99 +1);
// document.write("RANDOM NUMBER 1 TO 100 = "+ rand);

// TASK 7
// var luckydraw=+prompt("ENTER NUMBER B/W 1 to 10:")
// if(luckydraw === 5)
// {
//     document.write("congratulate! you win the Honda CD 70")
// }
// else
// {
//     document.write("TRY AGAIN!")
// }


//  CHAPTER 31 to 34

// TASK 1
// var date = new Date();
// document.write(date)

// TASK 2
// var month = function(d){
//     mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//       return mlist[d.getMonth()];
//     };
//     document.write(month(new Date()));
    
// TASK 3
// var day=new Date()
// var weekday=new Array("Sun","Mon","Tues","Wed","Thu",
//             "Fri","Sat")
// document.write("Today is " + weekday[day.getDay()])

// TASK 4
// var day=new Date()
// var weekday=new Array("Sun","Mon","Tues","Wed","Thu",
//             "Fri","Sat")
// if(weekday === 'Sun' || weekday === 'Sat'){

//     document.write("FUN DAY ")
// }
// else
// {
//     document.write(" NO FUN DAY ")
// }

// TASK 5
// var day=+prompt("ENTER NO. OF DAYS:")
// if (day <= 16)
// {
//     document.write("“First fifteen days of the month")
// }
// else if(day >= 16)
// {
//     document.write("“Last days of the month")
// }

// TASK 6
// var Current=new Date();
// var date = new Date("Jun 1,1970")
// var dateMin = date.getTime();
// var datemili = date.getTime();
// document.write("Current Date "+Current +"<br>")
// document.write("Elapsed minutes since january 1,1970: "  +(datemili / 1000) / 60 +"<br>")
// document.write("Elapsed Milisecond since january 1,1970: "+datemili)

// TASK 7
// var time = prompt("WRITE TIME IN 24 HOURS:")
// if (time <= "12")
// {
//     alert("ITS AM");
// }
// else
// {
//     alert("ITS PM");
// }

// TASK 8
// var d = new Date();
// var lastDay = new Date(new Date().getFullYear(), 11, 31); 
// alert(lastDay);

// TASK 9 
// var today = new Date();
// var olddate = new Date("June 18, 2015")
// var daystoday= today.getDay() ;
// var daysolddate = olddate.getDay();
// var daysmili =  today -olddate;
// var days= daysmili/ (1000*60*60*24);
// var final = Math.floor(days);
// document.write("SINCE DAYS"+final);

// TASK 10
// var newdate = new Date("Dec 5,2015");
// var oldate = new Date("Jan 1,2015");
// var days = newdate - oldate;
// var sec = days/1000
// document.write("SINCE SECOND = "+sec);

// TASK 11
// var myDate = new Date();
// var newDate = new Date(myDate);
// newDate.setHours(newDate.getHours() + 1);
// document.write("Current DATE & TIME =" +myDate  +"<br>");
// document.write("AFTER 1 HOURS =" +newDate);

// TAKS 12
// var date=new Date ("Dec 5,2020")
// date.setFullYear(date.getFullYear() - 100)
// document.write(date)

// TASK 13
// var Datee=prompt("ENTER YOUR AGE")
// var date=new Date()
// var dob=date.getFullYear() - Datee
// document.write("YOUR YEAR IS"+dob)

// TASK 14
// var name = "NOOR-UL-AJAM";
// var month = new Date();
// var monthly = month.getMonth();
// var unit = 120;
// var charges= 10;
// var Netamount = unit*charges;
// var Latefee = 500;
// var lateamount = Netamount + Latefee;

// document.write("Costumer Name :"+name +"<br>")
// document.write("Current Month :"+monthly+"<br>")
// document.write("Number Of Unit :"+unit+"<br>")
// document.write("Charge Per Unit :"+charges+"<br>")
// document.write("Net Amount Payable (within Due Date) :"+Netamount+"<br>")
// document.write("Late Payment Surcharge :"+Latefee+"<br>")
// document.write("Gross Amount Payable (after Due Date) :"+lateamount)

// CHAPTER 35 to 38

// TASK 1
// function today(){
// var today = new Date()
// document.write(today)
// }
// today();

// TASK 2
// function Name(){
// var firstname = prompt("ENTER YOUR FIRST NAME:")
// var lastname = prompt("ENTER YOUR LAST NAME:")
// var greets=firstname+lastname;
// document.write(greets)
// }
// Name();

// TASK 3
// function addnum(){
// var firstnum = +prompt("ENTER YOUR FIRST NUMBER:")
// var secnum = +prompt("ENTER YOUR SEC NUMBER:")
// var greets= firstnum + secnum ;
// document.write(greets)
// }
// addnum();

// TASK 4
// function cal(num1,num2,opreator){

// var num1 = +prompt("ENTER YOUR FIRST NUMBER:")
// var num2 = +prompt("ENTER YOUR SEC NUMBER:")
// opreator = prompt("SELECT OPERATOR:")
// if (opreator === "+")
// {
// var greets= num1 + num2 ;
// document.write(greets)
// }
// else if (opreator === "-")
// {
// var greets= num1 - num2 ;
// document.write(greets)
// }
// else if (opreator === "*")
// {
// var greets= num1 * num2 ;
// document.write(greets)
// }
// else if (opreator === "/")
// {
// var greets= num1 / num2 ;
// document.write(greets)
// }
// else
// {document.write("ERROR")}
// }
// cal();

// TASK 5
// function sqr()
// {
//     var num = +prompt("ENTER NUMBER FOR SQUARE:")
//     var squ = num*num;
//     document.write(squ)
// }
// sqr();

// TASK 6
// function factorial(n){
//     var answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//     var n = +prompt("ENTER NUMBER :");
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);

// TASK 7
// function count()
// {
// var num = +prompt("ENTER THE START NUMBER:")
// var end = +prompt("ENTER THE END NUMBER:")
// for(var i = num ;i<=end;i++)
// {
//   num ++; 
//   document.write(i)
// }
// }
// count();

// TASK 8
// function pythagorean(sideA, sideB){
//     return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//   }
//   document.write(pythagorean(4, 3));

// TASK 9
// function area()
// {var hight= +prompt("ENTER AREA HIGHT:")
// var widht= +prompt("ENTER AREA WIDHT:")
// var area= hight*widht
// document.write("AREA IS = " +area)
// }
// area();

// TASK 10
// function Reverse() { 
// var user= prompt("ENTER NAME TO CHECK THE palindrome:")
// var name = [ 'Civic', "Kayak", "Level","Madam","Mom","Noon","Racecar",'Radar',"Redder","Refer","Repaper","Rotator","Rotor","Sagas","Solos","Stats","Tenet","Wow"]
// for (var i=0;i<=name.length;i++)
// {
// if( user == name[i])
// {
//     document.write("palindrome")
//     break
// }
// else
// {
//     document.write("not palindrome")
//     break
// }
// }
// }
// Reverse();

// TASK 11
// function upper()
// {
// var name = prompt("WRITE ANY NAME IN LOWER CASE:")
// var uper= name.toUpperCase()
// document.write("NORMAL = "+name+"<br>")
// document.write("UPPER CASE= "+uper)
// }
// upper();

// TASK 12
// function longestword(str)
// {
// var name = prompt("WRITE ANY WORDS")
// var array= name.match(/\w[a-z]{0,}/gi);
// var result = array[0];

//   for(var i = 1 ; i < array.length ; i++)
//   {
//     if(result.length < array[i].length)
//     {
//     result = array[i];
//     } 
//   }
// document.write(result)
// }
// longestword();

// TASK 13
// function count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(count("JSResourceS.com", 'o'));

// TASK 14



// CHAPTER 38 to 44

// TASK 1
// function cal(a,b)
// {
//     var a=+prompt("ENTER VALUE:")
//     var b= +prompt("ENTER POWER:")
//     var power=Math.pow(a,b)
// document.write(power)
// }
// cal();


// TASK 2
// function leapyear(){
// var year = +prompt("ENTER YEAR:")
// var LeapYear = year % 4;

// if (LeapYear==0) {
//     alert("This is Leap Year");
// } else {
//     alert("This is not leap year");
// }
// }
// leapyear();

// TASK 3
// function side()
// { 
//     var a=10,b=10,c=15;
//     var s = (a+b+c)/2

//     var area=((s*(s-a)*(s-b)*(s-c)));
//     var cd=Math.sqrt(area);
//   document.write(cd)

// }
// side();

// TASK 4
