
    function fetchpaperdetails(idd){

        firebase.database().ref('paper_details').once('value',function(snapshotupdate){
            snapshotupdate.forEach(function(childsnapshotupdate){ 
              var id=childsnapshotupdate.val().email;
          
              if(id==idd){
                
                document.getElementById("titleInput").value=childsnapshotupdate.val().title;

                document.getElementById("primary_author_name").value=childsnapshotupdate.val().authorname;
                   /* document.getElementById("primary_author_email").value=childsnapshotupdate.val().emailid;
                    document.getElementById("primary_author_department").value=childsnapshotupdate.val().department;
                    document.getElementById("primary_author_country").value=childsnapshotupdate.val().country;
                    document.getElementById("primary_author_city").value=childsnapshotupdate.val().city;
                    document.getElementById("primary_author_college").value=childsnapshotupdate.val().college;


                  document.getElementById("secondary_author_email").value=childsnapshotupdate.val().secondemailid;
                  document.getElementById("2_author_department").value=childsnapshotupdate.val().seconddepartment;
                    document.getElementById("2_author_country").value=childsnapshotupdate.val().secondcountry;
                    document.getElementById("2_author_city").value=childsnapshotupdate.val().secondcity;
                    document.getElementById("2_author_college").value=childsnapshotupdate.val().secondcollege;

                  document.getElementById("3_author_email").value=childsnapshotupdate.val().thirdemailid;
                  document.getElementById("3_author_department").value=childsnapshotupdate.val().thirddepartment;
                    document.getElementById("3_author_country").value=childsnapshotupdate.val().thirdcountry;
                    document.getElementById("3_author_city").value=childsnapshotupdate.val().thirdcity;
                    document.getElementById("3_author_college").value=childsnapshotupdate.val().thirdcollege;

                  document.getElementById("4_author_email").innerHTML=childsnapshotupdate.val().fourthemailid;
                  document.getElementById("4_author_department").innerHTML=childsnapshotupdate.val().fourthdepartment;
                    document.getElementById("4_author_country").innerHTML=childsnapshotupdate.val().fourthcountry;
                    document.getElementById("4_author_city").innerHTML=childsnapshotupdate.val().fourthcity;
                    document.getElementById("4_author_college").innerHTML=childsnapshotupdate.val().fourthcollege;

                    document.getElementById("project_abstract").value=childsnapshotupdate.val().abstract;
                    document.getElementById("heading_topic").innerHTML=childsnapshotupdate.val().heading;
                    
                    document.getElementById("keyword_data").innerHTML=childsnapshotupdate.val().keyword;
                    if(childsnapshotupdate.val().keyword=="na"){
                        document.getElementById("keyword_data_info").style.display="none";

                    }
                    else{
                          document.getElementById("keyword_data_info").style.display="block";
                    }
                    
                    document.getElementById("content-det").innerHTML=childsnapshotupdate.val().content;
                    document.getElementById("content-det-2").innerHTML=childsnapshotupdate.val().secondcontent;
                    document.getElementById("content-det-3").innerHTML=childsnapshotupdate.val().thirdcontent;
                    document.getElementById("content-det-lit").innerHTML=childsnapshotupdate.val().literaturecontent;
                    document.getElementById("content-det-lit2").innerHTML=childsnapshotupdate.val().secondliteraturecontent;
                    document.getElementById("content-det-lit3").innerHTML=childsnapshotupdate.val().thirdliteraturecontent;

                    document.getElementById("title").innerHTML=childsnapshotupdate.val().firsttitle;
                    document.getElementById("author").innerHTML=childsnapshotupdate.val().author;
                    document.getElementById("year").innerHTML=childsnapshotupdate.val().year;

                    document.getElementById("2title").innerHTML=childsnapshotupdate.val().secondtitle;
                    if(childsnapshotupdate.val().secondtitle==""){
                        document.getElementById("2literature").style.display="none";

                    }
                    else{
                          document.getElementById("2literature").style.display="block";
                    }
                    document.getElementById("2author").innerHTML=childsnapshotupdate.val().secondauthor;
                    document.getElementById("2year").innerHTML=childsnapshotupdate.val().secondyear;


                    document.getElementById("3title").innerHTML=childsnapshotupdate.val().thirdtitle;
                    if(childsnapshotupdate.val().thirdtitle==""){
                        document.getElementById("3literature").style.display="none";

                    }
                    else{
                          document.getElementById("3literature").style.display="block";
                    }
                    document.getElementById("3author").innerHTML=childsnapshotupdate.val().thirdauthor;
                    document.getElementById("3year").innerHTML=childsnapshotupdate.val().thirdyear;

                    document.getElementById("image-det").innerHTML=childsnapshotupdate.val().design;

                    document.getElementById("result-det").innerHTML=childsnapshotupdate.val().result;

                    document.getElementById("conclusion-det").innerHTML=childsnapshotupdate.val().conclusion;

                    document.getElementById("references-det").innerHTML=childsnapshotupdate.val().references;


                    document.getElementById("sechead").innerHTML=childsnapshotupdate.val().secondheading;
                    if(childsnapshotupdate.val().secondheading==""){
                        document.getElementById("secintro").style.display="none";

                    }
                    else{
                          document.getElementById("secintro").style.display="block";
                    }


                  document.getElementById("thirdhead").innerHTML=childsnapshotupdate.val().thirdheading;
                    if(childsnapshotupdate.val().thirdheading==""){
                        document.getElementById("3intro").style.display="none";

                    }
                    else{
                          document.getElementById("3intro").style.display="block";
                    }
                    

                    document.getElementById("secondary_author_name").innerHTML=childsnapshotupdate.val().secondauthorname;
                    if(childsnapshotupdate.val().secondauthor==""){
                        document.getElementById("second").style.display="none";

                    }
                    else{
                          document.getElementById("second").style.display="block";
                    }


                    document.getElementById("3_author_name").innerHTML=childsnapshotupdate.val().thirdauthorname;
                    if(childsnapshotupdate.val().thirdauthor==""){
                        document.getElementById("third").style.display="none";

                    }
                    else{
                          document.getElementById("third").style.display="block";
                    }


                    document.getElementById("4_author_name").innerHTML=childsnapshotupdate.val().fourthauthorname;
                    if(childsnapshotupdate.val().fourthauthor==""){
                        document.getElementById("fourth").style.display="none";

                    }
                    else{
                          document.getElementById("fourth").style.display="block";
                    }


                    document.getElementById("image-det").innerHTML=childsnapshotupdate.val().design;
                    if(childsnapshotupdate.val().design==""){
                        document.getElementById("imageupl").style.display="none";

                    }
                    else{
                          document.getElementById("imageupl").style.display="block";
                    }*/
                    
                    
              }
                 
            });
             
            
   });



  }

