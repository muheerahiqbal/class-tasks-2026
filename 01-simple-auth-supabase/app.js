// my app.js

import { supabase } from "./auth.js";

window.addEventListener("DOMContentLoaded", function () {

    // email regex (added)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let logemail = document.getElementById("logemail");
    let logpass = document.getElementById("logpass");
    let signName = document.getElementById("signName");
    let signEmail = document.getElementById("signEmail");
    let signPass = document.getElementById("signPass");

    let logSubmit = document.getElementById("logSubmit");
    let signSubmit = document.getElementById("signSubmit");

    if (logSubmit) {
        logSubmit.addEventListener("click", async function (e) {
            e.preventDefault();

            let logemail_value = logemail.value.trim();
            let logpass_value = logpass.value.trim();

            if (!logemail_value || !logpass_value) {
                alert(
                    "Please fill all the necessary required fields in order to proceed"
                );
                return;
            }

            // email format validation (added)
            if (!emailPattern.test(logemail_value)) {
                alert("Please enter a valid email address");
                return;
            }

            // password length validation (added)
            if (logpass_value.length < 6) {
                alert("Wrong Password");
                return;
            }
            alert("Login successful validation passed!");
            console.log(logemail_value, logpass_value);

            // supabase log in

            try {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: logemail_value,
                    password: logpass_value,
                });
                if (error) {
                    console.log(error.message);
                    return;
                }
                window.location.href = "./dashboard.html";
            } catch (error) {
                if (error) {
                    console.log(error.message);
                    return;
                }
            }
        });
    }

    if (signSubmit) {
        signSubmit.addEventListener("click", async function (e) {
            e.preventDefault();

            let signName_value = signName.value.trim();
            let signEmail_value = signEmail.value.trim();
            let signPass_value = signPass.value.trim();

            if (!signName_value || !signEmail_value || !signPass_value) {
                alert(
                    "Please fill all the necessary required fields in order to proceed"
                );
                return;
            }

            // email format validation (added)
            if (!emailPattern.test(signEmail_value)) {
                alert("Please enter a valid email address");
                return;
            }

            // password length validation (added)
            if (signPass_value.length < 6) {
                alert("Password must be at least 6 characters long");
                return;
            }

            alert("Signup successful validation passed!");
            console.log(signName_value, signEmail_value, signPass_value);

            // supabase for sign up

            try {
                const { data, error } = await supabase.auth.signUp({
                    email: signEmail_value,
                    password: signPass_value,
                });

                if (error) {
                    console.log(error.message);
                    return;
                }

                window.location.href = "./dashboard.html";
            } catch (error) {
                if (error) {
                    console.log(error.message);
                    return;
                }
            }
        });
    }

    let logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            window.location.href = "./index.html"
        })
    }
});