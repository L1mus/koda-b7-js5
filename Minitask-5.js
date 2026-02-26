const account = {
  id:32141235,
  username:"John Doe",
  password:"RWEQFdsfewfedf32D5W1sdD"
}

function updateAcc (newPass){
  if(newPass.length < 5){
    console.log(`Password anda minimal 5 karakter`)
  }
  const updated ={
    ...account,
    password:newPass
  }
  let cutPassword = updated.password.slice(-3)
  let sensorPassword = updated.password.slice(0,updated.password.length-3).replace(/[a-z0-9]/g,"*")
  return console.log(`
  Username : ${updated.username}
  Password : ${sensorPassword}${cutPassword}
  `)
}

updateAcc("321542r34rwe")
