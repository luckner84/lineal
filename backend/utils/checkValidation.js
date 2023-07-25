const isEmailVaild=new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const isPasswordValid = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');
const isImageValid=new RegExp(/\.(jpg|jpeg|png|gif)$/)
const isAlphaValid=new RegExp('^[a-zA-Z]+$') 
const isPhoneValid= new RegExp('[0-9]{3}-[0-9]{3}-[0-9]{4}')
module.exports={isEmailVaild,isPasswordValid,isAlphaValid,isImageValid, isPhoneValid}