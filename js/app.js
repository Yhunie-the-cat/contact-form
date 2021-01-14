const email = document.querySelector("#email");

const handleSubmit = () => {
   if (!email.value.includes("@") || !email.value.includes(".")) {
      alert("Wrong email format!");
      email.focus();
   } else {
      alert("Email has been sent!");
      return true;
   }
   return false;
};
