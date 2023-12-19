async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data), 
    });
    return response.json();
}

sendButton.addEventListener("click", async()=>{
     question = document.getElementById("questionInput").value;
     document.getElementById("questionInput").value="";
     document.querySelector(".right2").style.display="block"
     document.querySelector(".right1").style.display="none"

     question1.innerHTML = question;
     question2.innerHTML = question;

     let result = await postData("/api", {"question":question})
     solution.innerHTML=result.answer;
})