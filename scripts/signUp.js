// const { useId } = require("react")

//1.Getting elements for account creation
const form = document.querySelector("#sign-up-form")
const userName = document.querySelector("#UserName")
const firstName = form.querySelector("#firstName")
const lastName = form.querySelector("#lastName")
const email = form.querySelector("#email")
const password = form.querySelector("#password")
const createAccountBtn = form.querySelector("#createAccountBtn")
const mainSection = document.querySelector("#sign-up-main-section")
let userId = 0 //. initializing the first userId to zero

//. the state manager that determines whether a user is logged in or not
let loggedOut = JSON.parse(localStorage.getItem("loggedOutCloudVersion"))||true;

//. the array of objects that would store user details in local storage
let usersArray = JSON.parse(localStorage.getItem("usersArrayCloudVersion")) || [{id: 0,
            userName:"",
            firstName:"",
            lastName: "",
            email: "",
            password:""}]

//. so basically these are two contents that I would be dynamically updating depending on the state of loggedOut state manager
let mainLoggedOut = (`
        <main class=" w-screen flex justify-center my-[3rem]">  
        <!-- Sign Up Card -->
        <figure class="sm:border-2 sm:border-[#00000050] bg-white border-none rounded-lg sm:shadow-md p-8 max-w-md">
            <!-- Header -->
            <div class="text-center mb-8">
                <h1 class="text-3xl font-bold text-black mb-2">Create Account</h1>
                <p class="text-gray-600">Join us today</p>
            </div>

            <!-- Sign Up Form -->
            <form class="space-y-6" id="sign-up-form">
                <!-- Name Fields -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="firstName" class="block text-sm font-medium text-black mb-2">
                            First Name
                        </label>
                        <input 
                            type="text" 
                            id="firstName" 
                            name="firstName" 
                            required
                            class="w-full px-4 py-3 border-1 border-[#00000050] rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                            placeholder="Ataraxia"
                        >
                    </div>
                    <div>
                        <label for="lastName" class="block text-sm font-medium text-black mb-2">
                            Last Name
                        </label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            required
                            class="w-full px-4 py-3 border-1 border-[#00000050] rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                            placeholder="Chibuikem"
                        >
                    </div>
                </div>

                <!-- UserName Field -->
                <div>
                    <label for="email" class="block text-sm font-medium text-black mb-2">
                        UserName
                    </label>
                    <input 
                        type="text" 
                        id="UserName" 
                        name="UserName" 
                        required
                        class="w-full px-4 py-3 border-1 border-[#00000050] rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                        placeholder="UserName"
                    >
                </div>

                <!-- Email Field -->
                <div>
                    <label for="email" class="block text-sm font-medium text-black mb-2">
                        Email Address
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        class="w-full px-4 py-3 border-1 border-[#00000050] rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                        placeholder="dev.ataraxia7@gmail.com"
                    >
                </div>

                <!-- Password Field -->
                <div>
                    <label for="password" class="block text-sm font-medium text-black mb-2">
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required
                        class="w-full px-4 py-3 border-1 border-[#00000050] rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                        placeholder="Create a strong password"
                    >
                </div>

                <!-- Terms and Conditions -->
                <div class="flex items-start">
                    <input 
                        type="checkbox" 
                        id="terms" 
                        name="terms"
                        required
                        class="w-4 h-4 border-1 border-[#00000050] rounded focus:ring-black focus:ring-2 mt-1"
                    >
                    <label for="terms" class="ml-2 text-sm text-black">
                        I agree to the 
                        <a href="#" class="font-medium hover:underline">Terms of Service</a> 
                        and 
                        <a href="#" class="font-medium hover:underline">Privacy Policy</a>
                    </label>
                </div>

                <!-- Sign Up Button -->
                <button 
                    type="submit"
                    class="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200"
                    id="createAccountBtn"
                >
                    Create Account
                </button>
            </form>

            <!-- Divider -->
            <div class="mt-8 mb-6">
                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-white text-gray-500">Or sign up with</span>
                    </div>
                </div>
            </div>

            <!-- Social Sign Up Buttons -->
            <div class="grid grid-cols-2 gap-3">
                <button 
                    type="button"
                    class="flex items-center justify-center px-4 py-3 border-1 border-[#00000050] rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200"
                >
                    <svg class="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                </button>

                <button 
                    type="button"
                    class="flex items-center justify-center px-4 py-3 border-1 border-[#00000050] rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </button>
            </div>

            <!-- Login Link -->
            <div class="mt-8 text-center">
                <p class="text-black">
                    Already have an account? 
                    <a href="login.html" class="font-medium hover:underline">Sign in here</a>
                </p>
            </div>
        </figure>
    </main>
    `)
let mainLoggedIn = (`
            <div class="text-center">
                <!-- Main message with highlighted username -->
                <p class="text-md sm:text-base md:text-3xl text-gray-800 mb-4 sm:mb-6 leading-relaxed">
                    Hey <span class="font-bold text-blue-600 bg-blue-50 px-1 rounded" id="customerName">Ataraxia</span> you're logged in already
                </p>
                
                <!-- Logout button -->
                <button 
                    class="bg-[#000002] hover:bg-gray-700 active:bg-gray-900 text-white font-medium px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 md:text-xl rounded-md md:rounded-xl transition-colors duration-200 cursor-pointer"
                    id="logoutBtn"
                >
                    Log out
                </button>
            </div>
    `)


//. here the magic of creating users begins
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const userAlreadyExists = usersArray.some(user => user.userName == userName.value.trim())

    if (userAlreadyExists){
        alert("user with userName already exists")
        return;
    }

    else{
        // .creating a new user
        ++userId
        const user = {
            id: userId,
            userName: userName.value.trim(),
            firstName: firstName.value.trim(),
            lastName: lastName.value.trim(),
            email: email.value.trim(),
            password: password.value.trim(), //
        };
        //. adding a new user to usersArray
        usersArray.push(user)
        localStorage.setItem("usersArrayCloudVersion", JSON.stringify(usersArray));
        console.log(usersArray);

        //. clearing the input fields
        const inputfields = form.querySelectorAll("input")
        inputfields.forEach(element => {element.value = "" });

        //.logging in user
        loggedOut = !loggedOut
        localStorage.setItem("loggedOut",JSON.stringify(loggedOut))

        console.log(loggedOut)
   //dynamic rendering
    mainSection.classList = ""; //clears all classes
    mainSection.classList.add("bg-white",
        "border-l",
        "border-r",
        "px-4",
        "py-6",
        "sm:px-6",
        "sm:py-8",
        "md:px-8",
        "md:py-10",
    )
    mainSection.innerHTML = mainLoggedIn
    
}})

//. the conditional rendering manipulation begins    
if (loggedOut == false) {
    mainSection.classList = ""; //clears all classes
    mainSection.classList.add("bg-white",
        "border-l",
        "border-r",
        "px-4",
        "py-6",
        "sm:px-6",
        "sm:py-8",
        "md:px-8",
        "md:py-10",
    )
    mainSection.innerHTML = mainLoggedIn
    };
