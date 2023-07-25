export const isEmailVaild=new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
export const isPasswordValid = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');
export const isImageValid=new RegExp(/\.(jpg|jpeg|png|gif)$/)
export const isVideoValid=new RegExp(/\.(mp4|amv|mpg|ogg|webm)$/)
export const isAlphaValid=new RegExp('^[a-zA-Z ]*$') 
export const isPhoneValid= new RegExp('[0-9]{3}-[0-9]{3}-[0-9]{4}')