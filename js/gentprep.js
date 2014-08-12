


function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function roundToOne(num) {    
    return +(Math.round(num + "e+1")  + "e-1");
}

function roundToZero(num) {    
    return +(Math.round(num + "e+0")  + "e-0");
}

	


function stepOneSubmission() {
	$("#formInput").valid()
	if($("#formInput").valid()) {
		
	$("#mono").attr("href",""+monograph);	
	
	//var name = $('#surName').val();
   //$('#name-rep').val(name);
	
    //var nhi = $('#NHI').val();
    //$('#nhi-rep').val(nhi);
	
    var weight = $('#weight').val();
	var weightKg = (weight+" kg");
    $('#weight-rep').val(weightKg);
   
	
	var weeks = $('#weeks').val();
	var weekDays = weeks*7;
	var plusDays = $('#plusDays').val();
	
	
	var gestDays = (parseInt(weekDays)+parseInt(plusDays));
	var ga = (weeks.toString()+" weeks + "+plusDays.toString()+" days");
	$('#ga-rep').val(ga);
	var dob = $('#dob').val();
	$('#dob-rep').val(dob);
	
	var dobDate=$('#dob').datebox('getTheDate');
	var dobDate_ms = dobDate.getTime();
	  
	var now = new Date();
	var now_ms = now.getTime();
	var postnatalAge_ms = (now_ms-dobDate_ms);
	var postnatalAge_days = Math.floor(postnatalAge_ms/(1000*60*60*24));
	var correctedDays = (postnatalAge_days + gestDays);
	var correctedWeeks = Math.floor(correctedDays/7);
	var correctedPlusDays = (correctedDays-(correctedWeeks*7));
	//var cga = correctedDays;
	
	var cga = "CGA: "+correctedWeeks.toString()+" weeks + "+correctedPlusDays.toString()+" days. \n";
	$('#corrected-rep').val(cga);
	
	var dose;
	var doseBox;
	var calcRep;
	var finalDose;
	if(correctedDays>287&&postnatalAge_days>28){doseBox=doseBoxE;}
	else if(correctedDays>266&&postnatalAge_days>7){dose=7.5;doseBox=doseBoxA;}
	else if (correctedDays>259){dose=5;doseBox=doseBoxB;}
	else if (correctedDays>209){dose=3.5;doseBox=doseBoxC;}
	else {dose=2.5;doseBox=doseBoxD;}
	
	calcRep = cga+doseBox;
	
	var dosePerKg=roundToOne(dose*weight);
	
	if (correctedDays>287&&postnatalAge_days>28){finalDose="see above";}
	else {finalDose="Gentamicin "+dosePerKg+ " mg every 24 hours";}
	
   
	$('#calcRep').val(calcRep);
	$('#doseRep').val(finalDose);
	$('#noteRep').val(note);
    $.mobile.pageContainer.pagecontainer("change", "#theReport");
};
};


function dateFunction() {
	var now     = new Date();
	var year    = now.getFullYear();
    var month   = now.getMonth()+1; 
    var day     = now.getDate();
    var hour    = now.getHours();
    var minute  = now.getMinutes();
    var second  = now.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
    var datePrep = day+'/'+month+'/'+year+' at '+hour+':'+minute;
	$('#datePrep').val(datePrep);
	
	var expiry = new Date(now.getTime() + (stabilityDuration*(24 * 60 * 60 * 1000)));	
	var year    = expiry.getFullYear();
    var month   = expiry.getMonth()+1; 
    var day     = expiry.getDate();
    var hour    = expiry.getHours();
    var minute  = expiry.getMinutes();
    var second  = expiry.getSeconds(); 
    if(month.toString().length == 1) {
        var month = '0'+month;
    }
    if(day.toString().length == 1) {
        var day = '0'+day;
    }   
    if(hour.toString().length == 1) {
        var hour = '0'+hour;
    }
    if(minute.toString().length == 1) {
        var minute = '0'+minute;
    }
    if(second.toString().length == 1) {
        var second = '0'+second;
    }   
    var dateExp = day+'/'+month+'/'+year+' at '+hour+':'+minute;
	$('#dateExp').val(dateExp);
}		


