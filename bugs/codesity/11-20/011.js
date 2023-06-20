const loggedUser = {
  role: "reader",
}

function getUserPermission(user) {
  let permission

  switch (user.role) {
    case "reader":
      permission = "can read"
      break;
    case "writer":
      permission = "can write"
      break;
    case "admin":
      permission = "can everything"
      break;
    default:
      permission = ""
      break
  }

  return permission
}

console.log(getUserPermission(loggedUser))

// https://jqtwrpw1.r.eu-central-1.awstrack.me/L0/https:%2F%2Fcodisity.pl%2F100-bugow-js%2F90b2a251-a246-4713-adfc-adf089197961/1/010701884574a094-dd7aedb0-65d0-4e9f-9005-b31e76c21c99-000000/m6hl3uAGDEKE2T3pDXS8prBffMQ=103