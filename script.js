document.addEventListener("DOMContentLoaded",()=>{
	const loginform =document.getElementById("logingForm");
	if(loginForm){
		loginForm.addEventListener("submit",Function(e) {
			e.preventDefault();
			const name=document.getElementById("studentName").value;
			const id=document.getElementById("studenId").value;
			const teacher=document.getElementById("teacherName").value;
			const Password=document.getElementById("examPassword").value;
			if(password==="exam123"){
				sessionStorage.setltem("studentName",name);
				window.Location.herf="exam.html";
				}else{
					alert("invalid exam password");
					}
				 
				 });
				 
	}
	const examFrom=document.getElementById("examFrom");
	if(examFrom){
		examFrom.addEventListener("submit",function(e) {
			e.preventDefault();
			let score =0;
			if(document.querySelector('input[name="q1"]:checked')?.value==="Paris")score++;
			if(document.querySelector('input[name="q2"]:checked')?.value==="JavaScript") score++;
			window.Location.herf='result.html?score=${score}';
		});
	}
});