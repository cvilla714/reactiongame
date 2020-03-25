
			var start = new Date().getTime(); /*step 1.16*/
			
			
			function getrandomcolor () {  /*1.35*/
				
				var letters = '0123456789ABCDEF'.split (''); /*1.36*/
				
				var color = '#'; /*1.37*/
				
				for (var i = 0 ; i < 6 ; i++ ) {  /*1.38*/
					
					color += letters[Math.floor(Math.random() * 16)]; /*1.39*/
			}
			
					return color ; /*1.40*/
					
			}		
					
			function makeshapeappear() { /*step1.14*/
			
				var top = Math.random() * 400; /* 1.27 */ 
				
				var left = Math.random () * 400; /*1.29*/
				
				var width = (Math.random () * 200) + 100; /*1.31*/ /*1.46 add the +100 */
				
				var height = (Math.random() * 200) + 100 ; /*1.33*/ /*1.47 add the 100 as well */
				
				if (Math.random() > 0.5 ) { /*1.42*/
						
					document.getElementById("shape").style.borderRadius = "50%"; /*1.43*/
					
								
				} else { /*1.44*/
				
					document.getElementById("shape").style.borderRadius = "0"; /*1.45*/
				}
				
				
				document.getElementById("shape").style.backgroundColor  = getrandomcolor() ; /*1.41*/
				
				document.getElementById("shape").style.top = top + "px";  /* 1.28 */
				
				document.getElementById("shape").style.left= left + "px"; /*1.30*/
				
				document.getElementById("shape").style.width = width + "px"; /*1.32*/
				
				document.getElementById("shape").style.height = height + "px";  /*1.34*/
				
				document.getElementById("shape").style.display = "block"; /*step1.15*/
				
				start = new Date().getTime(); /*step1.17*/
		}
		
			function appearafterdelay() { /*1.21 create the function to make it appear after a delay */
			
			setTimeout(makeshapeappear, Math.random () * 2000); /* 1.22 */
		}
		
			appearafterdelay(); /* 1.23 */
			/*setTimeout(makeshapeappear, Math.random () * 2000); /*1.18*/ /*1.20 add the Match.random() * 2000*/ /*1.25 move this setTimeout inside the function */
			
			/*var start = new Date().getTime(); /*step1.7*/ /* move this outside the function*/ 
		
			document.getElementById("shape").onclick = function() {  /*step1.5*/
				document.getElementById("shape").style.display= "none"; /*step1.6*/
				
				var end = new Date().getTime(); /*step1.8*/
				
				 var timetaken = (end - start) /1000 ; /*step1.9*/ /*step1.11 divide by 1000*/
				 
				 /* alert(timetaken); /*step1.10*/
			
				document.getElementById("timetaken").innerHTML = timetaken + "s"; /*step1.13*/
			
				appearafterdelay(); /* 1.24 */
			}
			