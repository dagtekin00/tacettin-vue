<template>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway"
      rel="stylesheet"
    />
    <div class="mid">
      <div class="right">
        <b>
          <div class="txt4">
            <span class="abouttxt">{{ $t('contact') }}</span>
            <div class="hr4">
              <hr style="border: none; border-top: 2px solid rgb(0, 0, 0)" />
            </div></div
        ></b>
        <form class="contact" id="Form" @submit.prevent="formSubmitted">
          <input
            type="text"
            placeholder="name"
            name="name"
            id="name"
            for="name"
            required
          />
          <input
            type="email"
            placeholder="mail"
            name="email"
            id="email"
            required
          />
          <input
            type="tel"
            placeholder="phone"
            name="phone"
            id="phone"
            required
          />
          <textarea
            ad="mesaj"
            placeholder="message"
            name="message"
            id="message"
          ></textarea>
          <button type="submit">{{ $t('contactbtn') }}</button>
        </form>
      </div>
    </div>
  </template>

<script setup>
const formSubmitted = (event) => {
  var formData = new FormData(event.target); // formData
  fetch("http://localhost:3000/posts", {
    //posting user credentials to the server
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    })
  }).then(() => { window.location.reload(); }).catch((error) => {
    // Error handler
    console.error("Error:", error);
    error = true;
    alert(
      "Error Ocurred Please Try Again At a Later Time. Sorry for the inconvenience."
    );
  });
  if (error == false) {
    alert("Başarılı");
  }
};
</script>

<style>
            .contact{
                display: flex;
                flex-direction: column;
                padding: 10px;
            }
            .contact input{
                margin: 7px;
                height: 30px;
                border-bottom:1px solid #eee;
                border-radius:10px;
                padding: 7px;
                border:0;
                box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
            }
            .contact textarea{
                margin: 7px;
                height: 30px;
                border-bottom:1px solid #eee;
                border-radius:10px;
                padding: 7px;
                border:0;
                box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
            }
            .contact button{
             margin-top: 2%;
             margin-left: 1.5%;
             box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
                padding: 10px;
                font-family: 'Raleway';
                background-color: rgba(255, 255, 255, 0.537);
                border-radius: 20px;
                width: 40%;
                border: 0;
            }
            .contact button:hover{
                color: white;
                background-color: rgb(68, 68, 68);
            }

</style>