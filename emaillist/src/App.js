import React from "react";
import ReactDOM from "react-dom";
import GoogleContacts from "react-google-contacts";

const responseCallback = (response) => {
  console.log(response);
};
function ContactList() {
  return (
    <>
      <GoogleContacts
        clientId="120762216897-lh1bn8csubtfnp3vvkc55m1p1urebkir.apps.googleusercontent.com"
        buttonText="Import"
        onSuccess={responseCallback}
        onFailure={responseCallback}
      />
    </>
  );
}

export default ContactList;
