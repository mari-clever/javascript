const form = document.querySelector('#form')
const username = document.querySelector('#username');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const number = document.querySelector('#number');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
const Address = document.querySelector('#Address');
const DOB = document.querySelector('#DOB')
const Gender = document.querySelector('#Gender');
const qualification = document.querySelector('#qualification');
const Language=document.querySelector('#Language')
const formcheck=document.querySelector('.form-check')
const place = document.querySelector('#place');
const date = document.querySelector('#date');
const Duration = document.querySelector('#Duration');
const college = document.querySelector('#college');
const Univercity = document.querySelector('#Univercity');
const Course = document.querySelector('#Course');
const Photo=document.querySelector('#Photo')

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

date.max = new Date().toISOString().split("T")[0];
DOB.max = new Date().toISOString().split("T")[0];

function first_last(name,error){
    let name_of =document.getElementById(name);
    let error_of = document.getElementById(error);
    if(name_of.value.length > 20){
        error_of.textContent = 'name charect limited is 20';
        error_of.style.color='red';
    }
}

function Number_val(number1,error1){
    let number_of=document.getElementById(number1)
    let error_of1=document.getElementById(error1)
    if(number_of.value.length>=11){
        error_of1.textContent='only 10 digit allow'
        error_of1.style.color='red'
    }
}


function validateInputs(){
    const usernameVal = username.value.trim()
    const lastnameVal = lastname.value.trim()
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const AddressVal=Address.value.trim()
    const DOBVal =DOB.value.trim()
    const GenderVal=Gender.value.trim()
    const qualificationVal=qualification.value.trim()
    const LanguageVal=Language.value.trim()
    const placeVal=place.value.trim()
    const dateVal=date.value.trim()
    const CourseVal=Course.value.trim()
    const DurationVal=Duration.value.trim()
    const collegeVal=college.value.trim()
    const UnivercityVal=Univercity.value.trim()
    const PhotoVal=Photo.value.trim()
    let success = true

    if(usernameVal===''){
        success=false;
        setError(username,'firstname is required')
    }
    else if(!validateName(usernameVal)){
        success=false;
        setError(username,'cherecter only use')
    }
    else{
        setSuccess(username)
    }
    if(lastnameVal===''){
        success=false;
        setError(lastname,'lastname is required')
    }
    else if(!validatelast(lastnameVal)){
        success=false;
        setError(lastname,'charecter only use')
    }
    else{
        setSuccess(lastname)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }
    if(numberVal===''){
        success=false;
        setError(number,'number is required')
    }
    else if(!validatePhoneNumber(numberVal)){
        success=false;
        setError(number,'number only 10 degit use')
    }
    else{
        setSuccess(number)
    }

    if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else if(!validatePassword(passwordVal)){
        success=false;
        setError(password,'password use in capse+small+special charecter @#$%^&*+number')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    if(AddressVal===''){
        success=false;
        setError(Address,'Address is required')
    }
    else if(!validateAddress(AddressVal)){
        success=false;
        setError(Address,'use this charecter')
    }
    else{
        setSuccess(Address)
    }

    if(DOBVal===''){
        success=false;
        setError(DOB,'data of birth is required')
    }
    else{
        setSuccess(DOB)
    }
    if(GenderVal===''){
        success=false;
        setError(Gender,'any one selected')
    }
    else{
        setSuccess(Gender)
    }
    if(qualificationVal===''){
        success=false;
        setError(qualification,'any one selected')
    }
    else{
        setSuccess(qualification)
    }
    if(LanguageVal===''){
        success=false;
        setError(Language,'any one select')
    }
    else{
        setSuccess(Language)
    }
    if(placeVal===''){
        success=false;
        setError(place,'place is required')
    }
    else if(!validateplace(placeVal)){
        success=false;
        setError(place,'use this charecter')
    }
    else{
        setSuccess(place)
    }

    if(dateVal===''){
        success=false;
        setError(date,'date is required')
    }
    else if(dateVal<DOBVal || dateVal===DOBVal){
        success=false;
        setError(date,'your birth date for same chenge the date')
    }
    else{
        setSuccess(date)
    }
    if(CourseVal===''){
        success=false;
        setError(Course,'any one selected')
    }
    else{
        setSuccess(Course)
    }
    if(DurationVal===''){
        success=false;
        setError(Duration,'any one selected')
    }
    else{
        setSuccess(Duration)
    }
    if(collegeVal===''){
        success=false;
        setError(college,'college name is required')
    }
    else if(!validatecollege(collegeVal)){
        success=false;
        setError(college,'use this charecter')
    }
    else{
        setSuccess(college)
    }
    if(UnivercityVal===''){
        success=false;
        setError(Univercity,'univercity name is required')
    }
    else if(!validatecity(UnivercityVal)){
        success=false;
        setError(Univercity,'use this charecter')
    }
    else{
        setSuccess(Univercity)
    }
    if(PhotoVal===''){
         success=false;
        setError(Photo,'any files in store')
    }
    else if(PhotoVal==='.jpg'){
        success=false;
        setError(Photo,'only JPEG and png allow')
    }
    else{
         setSuccess(Photo)
    }
    return success;

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup1 = element.parentElement;
    const errorElement = inputGroup1.querySelector('.error')

    errorElement.innerText = message;
    inputGroup1.classList.add('error')
    inputGroup1.classList.remove('success')
}

function setSuccess(element){
    const inputGroup1 = element.parentElement;
    const errorElement = inputGroup1.querySelector('.error')

    errorElement.innerText = '';
    inputGroup1.classList.add('success')
    inputGroup1.classList.remove('error')
}

//email
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/
      );
  };

//username
function validateName(username) {
    const pattern = /^[A-Za-z\s'-]+$/;
    return pattern.test(username);
}


//last name
function validatelast(lastname) {
    const pattern = /^[A-Za-z\s'-]+$/;
    return pattern.test(lastname);
}
//mobilenumber
  function validatePhoneNumber(number) {
    const pattern = /^[789]\d{9}$/
    return pattern.test(number);
}
//password
function validatePassword(password){
const pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?`~]).{8,}$/;
return pattern.test(password)
}

//address
function validateAddress(Address){
    const pattern=/^[A-Za-z\s'-]+$/;
    return pattern.test(Address)
    }

//place
function validateplace(place){
    const pattern = /^[A-Za-z\s'-]+$/;
    return pattern.test(place);
}
//univercity
function validatecity(univercity){
    const pattern = /^[A-Za-z\s'-]+$/;
    return pattern.test(univercity)
}
//college
function validatecollege(college){
    const pattern = /^[A-Za-z\s'-]+$/;
    return pattern.test(college)
}






